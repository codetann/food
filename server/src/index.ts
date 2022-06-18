import express from "express";
import http from "http";
import { Server } from "socket.io";
import { initSockets, config } from "config";

const app: express.Application = express();
const server = http.createServer(app);
const io: Server = new Server(server);

initSockets(io, []);

server.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
