import { VStack, useStyleConfig, StackProps } from "@chakra-ui/react";

const Page = (props: StackProps) => {
  const styles = useStyleConfig("base_page");
  return <VStack __css={styles} {...props} />;
};

export { Page };
