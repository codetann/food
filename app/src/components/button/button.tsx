import { useStyleConfig, chakra, type ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  const styles = useStyleConfig("base_button");

  return <chakra.button __css={styles} {...props} />;
};

export { Button };
