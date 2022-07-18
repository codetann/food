import { VStack, useStyleConfig, StackProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const variants = {
  enter: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 50,
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
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      style={{ overflow: "hidden" }}
    >
      <VStack __css={styles} {...props} />
    </motion.main>
  );
};

export { Page };
