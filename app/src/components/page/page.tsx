import { VStack, useStyleConfig, StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const variants = {
  enter: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const Page = (props: StackProps) => {
  const styles = useStyleConfig("base_page");
  return (
    <motion.main
      variants={variants}
      initial="enter"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
      style={{ overflow: "hidden" }}
    >
      <VStack __css={styles} {...props} />
    </motion.main>
  );
};

export { Page };
