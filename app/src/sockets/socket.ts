import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import socketio from "socket.io-client";
import { useStore, State } from "@store";
import type { Payload } from "@types";

const io = socketio("http://localhost:4000");

const useController = (store: State, toast: any) => {
  const onCheckCode = ({ code }: Payload["check-code"]) => {
    if (code) store.setCode(code);
  };
  const onJoin = ({ users }: Payload["join"]) => {
    store.setUsers(users.map((user) => user.name));
  };
  const onError = ({ message }: Payload["error"]) => {
    toast({
      title: "Error",
      status: "error",
      description: message,
      position: "top-right",
    });
  };

  const emitCheckCode = (code: string) => {
    io.emit("check-code", code);
  };
  const emitJoin = (name: string, code: string) => {
    io.emit("join", { name, code });
  };

  return {
    onCheckCode,
    onJoin,
    onError,
    emitCheckCode,
    emitJoin,
  };
};

const useSocketController = () => {
  const store = useStore();
  const toast = useToast();
  const controller = useController(store, toast);

  useEffect(() => {
    io.on("check-code", controller.onCheckCode);
    io.on("join", controller.onJoin);
    io.on("error", controller.onError);
  }, []);

  return {
    checkCode: controller.emitCheckCode,
    join: controller.emitJoin,
  };
};

export { useSocketController };
