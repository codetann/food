import { Server, Socket } from "socket.io";

interface Member {
  name: string;
  code: string;
}

interface Payload {
  ["join"]: {
    code: string;
    name: string;
  };
}

const codeList: string[] = ["0000"];
const userList: Member[] = [];

class JoinSocket {
  io: Server;
  socket: Socket;

  constructor(io: Server, socket: Socket) {
    this.io = io;
    this.socket = socket;

    socket.on("check-code", this.checkCode.bind(this));
    socket.on("join", this.join.bind(this));
  }

  checkCode = (code: string) => {
    if (codeList.includes(code)) {
      this.socket.join(code);
      this.socket.emit("check-code", { code });
    } else {
      this.socket.emit("error", { message: "Invite code was invalid." });
    }
  };

  join = ({ name, code }: Member) => {
    userList.push({ name, code });
    console.log(userList);

    const users = userList.filter((user) => user.code === code);

    this.io.to(code).emit("join", { users });
  };

  disconnect = () => {
    this.socket.disconnect();
  };
}

export { JoinSocket };
