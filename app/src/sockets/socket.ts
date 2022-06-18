import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import socketio from "socket.io-client";
import { useStore } from "src/store/store";
import type { Payload } from "src/typings";

const io = socketio("http://localhost:4000");

const useSocketController = () => {
  const store = useStore();
  const toast = useToast();

  useEffect(() => {
    io.on("check-room", on.check_room);
    io.on("error", on.error);
  }, []);

  const on = {
    check_room: (payload: Payload["check_code"]) => {
      const { code } = payload;
      if (code) store.setCode(code);
    },
    error: (payload: any) => {
      toast({
        title: "Error",
        status: "error",
        description: payload.message,
        position: "top-right",
      });
    },
  };

  const emit = {
    check_room: (room: string) => {
      io.emit("check-room", room);
    },
  };

  return emit;
};

export { useSocketController };
