import { StyleConfig } from "@chakra-ui/theme-tools";

const base_input: StyleConfig = {
  baseStyle: {
    fontSize: "sm",
    h: "3rem",
    rounded: "lg",
    transition: "all .2s",
    border: "1px solid",
    outline: "none",
    ring: "none",
    pl: "1rem",

    _dark: {
      bg: "base.input.dark",
      borderColor: "base.border.dark",
    },

    _hover: {
      opacity: 0.9,
      transform: "translateY(-1px)",
    },

    _focus: {
      outline: "none",
      ring: "none",
      _dark: {
        bg: "none",
        borderColor: "base.primary",
      },
      transform: "none",
      color: "white",
    },
  },
};

export { base_input };
