import { Server, Socket } from "socket.io";

const rooms: string[] = ["0000"];

class JoinSocket {
  io: Server;
  socket: Socket;

  constructor(io: Server, socket: Socket) {
    this.io = io;
    this.socket = socket;

    socket.on("check-room", this.checkForRoom.bind(this));
  }

  checkForRoom = (room: string) => {
    if (rooms.includes(room)) {
      this.socket.emit("check-room", { room });
    } else {
      this.socket.emit("error", { message: "Could not find room." });
    }
  };
}

export { JoinSocket };
