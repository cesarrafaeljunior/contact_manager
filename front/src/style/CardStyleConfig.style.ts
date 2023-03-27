import { defineStyleConfig } from "@chakra-ui/styled-system";

export const BoxHoverCard = defineStyleConfig({
  variants: {
    _hover: {
      opacity: "0",
    },
  },
  defaultProps: {
    variant: "_hover",
  },
});
