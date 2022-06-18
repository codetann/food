import { Server, Socket } from "socket.io";

const rooms: string[] = ["0000"];

class JoinSocket {
  io: Server;
  socket: Socket;

  constructor(io: Server, socket: Socket) {
    this.io = io;
    this.socket = socket;
  }

  checkForRoom = (room: string) => {
    if (rooms.includes(room)) {
      this.socket.emit("check-room", { payload: true });
    } else {
      this.socket.emit("check-room", { payload: false });
    }
  };
}

export { JoinSocket };
