import { useState } from "react";
import { Button } from "@components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      <Button width="20rem">Click Me</Button>
    </div>
  );
}

export default App;
