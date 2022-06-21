import { Server, Socket } from "socket.io";
import { Payload } from "../typings/socket";
import { State } from "./state";

const state = new State();

class UserSocket {
  io: Server;
  id: string;
  socket: Socket;
  name: string | null;
  code: string | null;

  constructor(io: Server, socket: Socket) {
    this.io = io;
    this.socket = socket;
    this.id = socket.id;
    this.name = null;
    this.code = null;

    this.socket.on("check", this.check.bind(this));
    this.socket.on("join", this.join.bind(this));
    this.socket.on("create", this.create.bind(this));
    this.socket.on("leave", this.leave.bind(this));
    this.socket.on("disconnect", this.disconnect.bind(this));
  }

  check = ({ code }: Payload["check"]) => {
    if (state.checkCode(code)) {
      this.code = code;

      this.socket.join(code);
      this.socket.emit("check", { code });
      return;
    }

    this.socket.emit("error", { message: "Invite code was invalid." });
  };

  create = (/* future params */) => {
    const code = state.generateCode();
    state.setCode(code);
    this.code = code;

    this.socket.join(code);
    this.socket.emit("create", { code });
  };

  join = ({ name, code }: Payload["join"]) => {
    state.addUser({ name, id: this.id, code });
    this.io.to(code).emit("join", { users: state.getUsers(code) });
  };

  leave = () => {
    state.removeUser(this.id);

    this.socket.leave(this.code!);
    this.io.to(this.code!).emit("leave", { users: state.getUsers(this.code!) });
  };

  disconnect = () => {
    state.removeUser(this.id);

    this.io.to(this.code!).emit("leave", { users: state.getUsers(this.code!) });
    this.socket.leave(this.code!);
    this.socket.disconnect();
  };
}

export { UserSocket };
