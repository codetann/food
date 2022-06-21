import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import socketio from "socket.io-client";
import { useStore, State } from "@store";
import type { Payload } from "@types";

const io = socketio("http://localhost:4000");

class Controller {
  store: State;
  toast: ReturnType<typeof useToast>;

  constructor(store: State, toast: ReturnType<typeof useToast>) {
    this.store = store;
    this.toast = toast;

    io.on("check", this.onCheck.bind(this));
    io.on("join", this.onJoin.bind(this));
    io.on("create", this.onCreate.bind(this));
    io.on("leave", this.onLeave.bind(this));
    io.on("error", this.onError.bind(this));
  }

  // socket listeners
  onCheck = ({ code }: Payload["on:check"]) => {
    if (code) this.store.setCode(code);
  };
  onJoin = ({ users }: Payload["on:join"]) => {
    this.store.setUsers(users.map((user) => user.name));
  };
  onCreate = ({ code }: Payload["on:create"]) => {
    this.store.setCode(code);
  };
  onLeave = ({ users }: any) => {
    this.store.setUsers(users.map((user: any) => user.name));
  };
  onError = ({ message }: Payload["on:error"]) => {
    this.toast({
      title: "Error",
      status: "error",
      description: message,
      position: "top-right",
    });
  };

  // socket emitters
  check = ({ code }: Payload["emit:check"]) => {
    io.emit("check", { code });
  };
  join = ({ name, code }: Payload["emit:join"]) => {
    io.emit("join", { name, code });
  };
  create = () => {
    io.emit("create");
  };
  leave = () => {
    io.emit("leave");
    this.store.clear();
  };
}

const useSocketController = () => {
  const store = useStore();
  const toast = useToast();
  const controller = new Controller(store, toast);

  return {
    check: controller.check,
    join: controller.join,
    create: controller.create,
    leave: controller.leave,
  };
};

export { useSocketController };
