import { Page } from "@components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@store";

function JoinDetailsPage() {
  const navigate = useNavigate();
  const code = useStore((state) => state.code);

  useEffect(() => {
    if (!code) navigate("/join");
  }, []);

  return (
    <Page>
      <h1>Join Details</h1>
      <p>
        You have been invited to join the group <strong>{code}</strong>
      </p>
    </Page>
  );
}

export { JoinDetailsPage };
