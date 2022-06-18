import express from "express";
import http from "http";
import { Server } from "socket.io";
import { initSockets, config } from "config";
import { JoinSocket } from "sockets";

const app: express.Application = express();
const server = http.createServer(app);
const io: Server = new Server(server, {
  cors: {
    origin: "*",
  },
});

initSockets(io, [JoinSocket]);

server.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
