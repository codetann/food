import {
  useStyleConfig,
  Button as ChakraButton,
  type ButtonProps,
} from "@chakra-ui/react";

interface Button extends ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = (props: Button) => {
  const styles = useStyleConfig("base_button", {
    variant: props?.variant || "primary",
  });

  return <ChakraButton __css={styles} {...props} />;
};

export { Button };
