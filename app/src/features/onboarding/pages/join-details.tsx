import { Page, Input, Button } from "@components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@store";
import { Heading, VStack } from "@chakra-ui/react";
import { useSocket } from "src/sockets";

function JoinDetailsPage() {
  const navigate = useNavigate();
  const { socket } = useSocket();
  const { code, name, setName } = useStore((state) => state);

  useEffect(() => {
    if (!code) navigate("/join");
  }, []);

  const handleClick = () => {
    socket.join(code, name);
    navigate("/waiting");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Page>
      <Heading pb="2rem">Enter Your Name</Heading>

      <VStack spacing={5} w="100%">
        <Input w="20rem" onChange={handleChange} placeholder="Name" />
        <Button disabled={!name} w="20rem" onClick={handleClick}>
          Continue
        </Button>
      </VStack>
    </Page>
  );
}

export { JoinDetailsPage };
