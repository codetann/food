import {
  useStyleConfig,
  Button as ChakraButton,
  type ButtonProps,
} from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  const styles = useStyleConfig("base_button");

  return <ChakraButton __css={styles} {...props} />;
};

export { Button };
