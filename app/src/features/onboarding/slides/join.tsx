// import { PinInput } from "@components";
import { useState } from "react";
import { Button, PinInput } from "@components";
import { Heading, HStack, PinInput as Inputs, Text } from "@chakra-ui/react";
import { Slide } from "./slide";

const JoinSlide = () => {
  const [pin, setPin] = useState("");

  return (
    <Slide>
      <Heading>Enter Code</Heading>
      <Text maxW="xl" textAlign="center" pt="1rem" color="whiteAlpha.700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        atque non est quae laboriosam harum rem?
      </Text>
      <HStack py="4rem">
        <Inputs onChange={(value) => setPin(value)}>
          <PinInput />
          <PinInput />
          <PinInput />
          <PinInput />
        </Inputs>
      </HStack>
      <Button isDisabled={pin.length < 4} w="15rem">
        Join
      </Button>
    </Slide>
  );
};

export { JoinSlide };
