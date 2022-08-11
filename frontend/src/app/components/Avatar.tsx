import { getRandomColor } from "@utils";
import { HStack, Avatar as ChakraAvatar, Text } from "@chakra-ui/react";

const Avatar = ({ name }: any) => {
  return (
    <HStack spacing={4} bg="whiteAlpha.50" p="1rem" w="100%" rounded="lg">
      <ChakraAvatar size="sm" name={name} color={getRandomColor()} />
      <Text>{name}</Text>
    </HStack>
  );
};

export default Avatar;
