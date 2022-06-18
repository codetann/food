import { Button, Page } from "@components";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoin = () => navigate("/join");

  return (
    <Page>
      <Button w="20rem" onClick={handleJoin}>
        Join Friends
      </Button>
      <Button w="20rem" variant="secondary">
        Create Group
      </Button>
    </Page>
  );
};

export { LandingPage };
