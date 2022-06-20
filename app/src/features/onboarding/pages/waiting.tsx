import { useStore } from "@store";
import { Page } from "@components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function WaitingPage() {
  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.code) navigate("/join");
  }, []);

  return (
    <Page>
      <h1>Waiting for people to join...</h1>
      {store.users.map((user) => (
        <div key={user}>
          <h2>{user}</h2>
        </div>
      ))}
    </Page>
  );
}

export { WaitingPage };
