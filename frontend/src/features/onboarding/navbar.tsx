import { IconButton, HStack } from "@chakra-ui/react";
import { Button } from "@components";
import { useStore } from "@store";
import { useLocation, useNavigate } from "react-router-dom";
import { LeftArrowIcon } from "@assets";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useStore();

  const onBack = () => {
    switch (location.pathname) {
      case "/join": {
        navigate("/");
      }
      case "/join/details": {
        state.clear();
        navigate("/join");
      }
      case "/create": {
        navigate("/");
      }
    }
  };

  return (
    <HStack pos="fixed" top="5rem" w="100%" justify="space-between" maxW="6xl">
      <IconButton
        aria-label="left-arrow"
        stroke="white"
        fill="none"
        icon={<LeftArrowIcon />}
        onClick={onBack}
        fontSize="2xl"
        background="none"
      >
        Back
      </IconButton>

      <h1>Logo</h1>
    </HStack>
  );
};

export { NavBar };
