import { extendTheme } from "@chakra-ui/react";
import { BoxHoverCard } from "./CardStyleConfig.style";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  components: {
    BoxHoverCard,
  },
});
