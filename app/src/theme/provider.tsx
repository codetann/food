import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export { ThemeProvider };
