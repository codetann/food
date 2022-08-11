import {
  PinInputField,
  chakra,
  InputProps,
  useStyleConfig,
} from "@chakra-ui/react";

const PinInput = (props: InputProps) => {
  return (
    <PinInputField
      bg="base.input.dark"
      border="1px solid"
      borderColor="base.border.dark"
      _focus={{
        bg: "none",
        outline: "none",
        boxShadow: "none",
        border: "1px solid",
        borderColor: "base.primary",
      }}
      {...(props as any)}
    />
  );
};

export { PinInput };
