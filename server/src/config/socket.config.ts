import type { Server } from "socket.io";

const initSockets = (io: Server, sockets: []) => {
  io.on("connection", (socket) => {
    sockets.forEach((Socket: any) => {
      new Socket(io, socket);
    });
  });
};

export { initSockets };
