// import { PinInput } from "@components";
import { PinInput } from "@components";
import { HStack, PinInput as Inputs } from "@chakra-ui/react";

const JoinSlide = () => {
  return (
    <HStack>
      <Inputs>
        <PinInput />
        <PinInput />
        <PinInput />
        <PinInput />
      </Inputs>
    </HStack>
  );
};

export { JoinSlide };
