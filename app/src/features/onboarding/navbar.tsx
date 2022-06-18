import { Box, HStack } from "@chakra-ui/react";
import { Button } from "@components";

const NavBar = ({ prevSlide, show }: any) => {
  return (
    <HStack pos="fixed" top="0" w="100vw" justify="space-between">
      {show && <Button onClick={prevSlide}>Back</Button>}
      {!show && <Box />}
      <h1>Logo</h1>
    </HStack>
  );
};

export { NavBar };
