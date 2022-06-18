import { VStack } from "@chakra-ui/react";
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

const Slide = (props: any) => {
  return (
    <motion.div
      style={{ position: "absolute" }}
      variants={variants}
      initial="enter"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, type: "spring" }}
    >
      <VStack {...props} />
    </motion.div>
  );
};

export { Slide };
