import { StyleConfig } from "@chakra-ui/theme-tools";

const base_button: StyleConfig = {
  baseStyle: {
    h: "3rem",
    px: "2rem",
    rounded: "lg",
    color: "white",
    bg: "base.primary",
    transition: "all .2s",
    fontSize: "sm",

    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
      _hover: {
        opacity: 0.5,
        transform: "none",
      },
    },

    _hover: {
      opacity: 0.9,
      transform: "translateY(-1px)",
    },

    _active: {
      opacity: 0.8,
      transform: "scale(0.99)",
    },
  },
  variants: {
    secondary: {
      bg: "whiteAlpha.50",
      color: "primary.darkmode",
    },
  },
  sizes: {},
  defaultProps: {},
};

export { base_button };
