import { Server, Socket } from "socket.io";

const codes: string[] = ["0000"];

class JoinSocket {
  io: Server;
  socket: Socket;

  constructor(io: Server, socket: Socket) {
    this.io = io;
    this.socket = socket;

    socket.on("check-code", this.checkCode.bind(this));
  }

  checkCode = (code: string) => {
    if (codes.includes(code)) {
      this.socket.emit("check-code", { code });
    } else {
      this.socket.emit("error", { message: "Invite code was invalid." });
    }
  };
}

export { JoinSocket };
