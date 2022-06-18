import { useState } from "react";
import { Button } from "@components";
import { BrowserRouter as AppRouter } from "react-router-dom";
import { Routes } from "@routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppRouter>
      <Routes />
    </AppRouter>
  );
}

export default App;
