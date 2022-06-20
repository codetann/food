import { Server, Socket } from "socket.io";
import { Payload } from "../typings/socket";

interface Member {
  id: string;
  name: string;
  code: string;
}

const codes: string[] = ["0000"];
const activeUsers: Member[] = [];

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
    this.socket.on("disconnect", this.disconnect.bind(this));
  }

  check = ({ code }: Payload["check"]) => {
    if (codes.includes(code)) {
      this.code = code;

      this.socket.join(code);
      this.socket.emit("check", { code });
      return;
    }

    this.socket.emit("error", { message: "Invite code was invalid." });
  };

  join = ({ name, code }: Payload["join"]) => {
    activeUsers.push({ name, code, id: this.id });
    const users = activeUsers.filter((user) => user.code === code);
    this.io.to(code).emit("join", { users });
  };

  disconnect = () => {
    const users = activeUsers.filter((user) => user.id !== this.id);
    this.io.to(this.code!).emit("join", { users });
    this.socket.disconnect();
  };
}

export { UserSocket };
