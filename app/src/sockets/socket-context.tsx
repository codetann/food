import { createContext, useContext } from "react";
import { useSocketController } from "./socket";

const SocketContext = createContext<any>(null);

export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }: any) => {
  const socket = useSocketController();

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider };
