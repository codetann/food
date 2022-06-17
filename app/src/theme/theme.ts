import { extendTheme } from "@chakra-ui/react";
import { styles } from "./global";
import { colors } from "./foundation/colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  colors,
});

export { theme };
