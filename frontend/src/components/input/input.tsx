import { useStyleConfig, chakra, InputProps } from "@chakra-ui/react";

const Input = (props: InputProps) => {
  const styles = useStyleConfig("base_input");
  return <chakra.input __css={styles} {...(props as any)} />;
};

export { Input };
