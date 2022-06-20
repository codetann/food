import { useStore } from "@store";
import { Page, User } from "@components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Heading, VStack } from "@chakra-ui/react";

function WaitingPage() {
  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.code) navigate("/join");
  }, []);

  return (
    <Page>
      <VStack w="100%" maxW="lg">
        <Heading pb="2rem">Waiting for people to join</Heading>
        {store.users.map((user) => (
          <User name={user} />
        ))}
      </VStack>
    </Page>
  );
}

export { WaitingPage };
