import { useStore } from "@store";
import { Button, Page, User } from "@components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { useSocket } from "src/sockets";

function WaitingPage() {
  const store = useStore();
  const { socket } = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.code) navigate("/join");
  }, []);

  const handleLeave = () => {
    socket.leave();
    navigate("/join");
  };

  return (
    <Page>
      <VStack w="100%" maxW="lg">
        <Heading>Code {store.code}</Heading>
        <Heading pb="2rem">Waiting for people to join</Heading>
        {store.users.map((user) => (
          <User name={user} />
        ))}
        <Button variant="secondary" onClick={handleLeave}>
          Leave
        </Button>
      </VStack>
    </Page>
  );
}

export default WaitingPage;
