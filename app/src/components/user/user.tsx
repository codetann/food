import { getRandomColor } from "src/utils";
import { HStack, Avatar, Text } from "@chakra-ui/react";

const User = ({ name }: any) => {
  const color = getRandomColor();
  return (
    <HStack spacing={4} bg="whiteAlpha.50" p="1rem" w="100%" rounded="lg">
      <Avatar size="sm" name={name} color={color} />
      <Text>{name}</Text>
    </HStack>
  );
};

export { User };
