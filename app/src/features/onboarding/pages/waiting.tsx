import { useStore } from "@store";
import { Page, User } from "@components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";

function WaitingPage() {
  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.code) navigate("/join");
  }, []);

  return (
    <Page>
      <VStack w="100%" maxW="lg">
        <h1>Waiting for people to join...</h1>
        {store.users.map((user) => (
          <User name={user} />
        ))}
      </VStack>
    </Page>
  );
}

export { WaitingPage };
