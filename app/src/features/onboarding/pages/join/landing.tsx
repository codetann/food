import { Button, Page } from "@components";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoin = () => navigate("/join");
  const handleCreate = () => navigate("/create");

  return (
    <Page>
      <Button w="20rem" onClick={handleJoin}>
        Join Friends
      </Button>
      <Button w="20rem" variant="secondary" onClick={handleCreate}>
        Create Group
      </Button>
    </Page>
  );
};

export { LandingPage };
