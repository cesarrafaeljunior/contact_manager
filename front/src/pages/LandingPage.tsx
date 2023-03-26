import { Flex } from "@chakra-ui/react";
import { ModalLogin } from "../components/ModalLogin";

export const LandingPage = () => {
  return (
    <Flex
      align="center"
      justify="center"
      width="100%"
      height="100vh"
      bg="blue.300"
    >
      <ModalLogin />
    </Flex>
  );
};
