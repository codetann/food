import { useEffect, useState } from "react";
import { Button, Page, PinInput } from "@components";
import {
  Heading,
  HStack,
  PinInput as Inputs,
  Text,
  chakra,
} from "@chakra-ui/react";

import { useSocket } from "src/sockets";
import { useStore } from "src/store";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components";

const JoinPage = () => {
  const code = useStore((state) => state.code);
  const [pin, setPin] = useState("");
  const { socket } = useSocket();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) navigate("/join/details");
  }, [code]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    socket.check({ code: pin });
  };

  return (
    <Page>
      <NavBar />
      <Heading>Enter Code</Heading>
      <Text maxW="xl" textAlign="center" pt="1rem" color="whiteAlpha.700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        atque non est quae laboriosam harum rem?
      </Text>
      <chakra.form
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        onSubmit={handleSubmit}
      >
        <HStack py="4rem">
          <Inputs onChange={(value) => setPin(value)}>
            <PinInput />
            <PinInput />
            <PinInput />
            <PinInput />
          </Inputs>
        </HStack>
        <Button isDisabled={pin.length < 4} w="16rem" type="submit">
          Join
        </Button>
      </chakra.form>
    </Page>
  );
};

export default JoinPage;
