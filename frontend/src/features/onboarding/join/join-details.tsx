import { Page, Input, Button } from "@components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@store";
import { Heading, VStack } from "@chakra-ui/react";
import { useSocket } from "src/sockets";
import { NavBar } from "../navbar";

function JoinDetailsPage() {
  const navigate = useNavigate();
  const { socket } = useSocket();
  const { code, name, setName } = useStore((state) => state);

  useEffect(() => {
    if (!code) navigate("/join");
    if (name && code) navigate("/waiting");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socket.join({ name, code });
    navigate("/waiting");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Page>
      <NavBar />
      <Heading pb="2rem">Enter Your Name</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5} w="100%">
          <Input w="20rem" onChange={handleChange} placeholder="Name" />
          <Button disabled={!name} w="20rem" type="submit">
            Continue
          </Button>
        </VStack>
      </form>
    </Page>
  );
}

export { JoinDetailsPage };
