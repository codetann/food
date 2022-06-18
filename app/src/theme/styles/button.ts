import { StyleConfig } from "@chakra-ui/theme-tools";

const base_button: StyleConfig = {
  baseStyle: {
    padding: ".8rem 2rem",
    rounded: "lg",
    color: "white",
    bg: "base.primary",
    transition: "all .2s",
    fontWeight: 500,

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
      bg: "base.alt.dark",
      color: "primary.darkmode",
    },
  },
  sizes: {},
  defaultProps: {},
};

export { base_button };
