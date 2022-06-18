import type { Server } from "socket.io";

const initSockets = (io: Server, sockets: any[]) => {
  io.on("connection", (socket) => {
    console.log("Socket connected");

    sockets.forEach((Socket: any) => {
      new Socket(io, socket);
    });
  });
};

export { initSockets };
