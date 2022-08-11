import { BrowserRouter } from "react-router-dom";
import { Routes } from "@routes";
import { SocketProvider } from "src/sockets";

function App() {
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
