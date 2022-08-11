import { HStack, VStack } from "@chakra-ui/react";
import { Button, Page } from "@components";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoin = () => navigate("/join");
  const handleCreate = () => navigate("/create");

  return (
    <Page>
      <VStack>
        <Button w="20rem" onClick={handleJoin}>
          Join Friends
        </Button>
        <Button w="20rem" variant="secondary" onClick={handleCreate}>
          Create Group
        </Button>
      </VStack>
    </Page>
  );
};

export { LandingPage };
