import { LockIcon, EmailIcon } from "@chakra-ui/icons";
import {
  FormControl,
  Input,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ModalRegister } from "../ModalRegister";

export const ModalLogin = () => {
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1.5rem"
      width="90%"
      maxW="400px"
      padding="2rem"
      margin="0 auto"
      boxShadow="5px 5px 20px 1px"
      bg="#F5F5F5"
    >
      <Heading
        as="h2"
        noOfLines={1}
        alignSelf="flex-start"
        fontSize="1.5rem"
        color="blue.600"
      >
        Login Page
      </Heading>
      <InputGroup>
        <InputLeftElement children={<EmailIcon />} />
        <Input placeholder="Enter your email address" />
      </InputGroup>
      <InputGroup flexDirection="column" justifyContent="space-between">
        <InputLeftElement children={<LockIcon />} />
        <Input type="icon" placeholder="Enter your password" />
      </InputGroup>
      <Button width="100%" height="50px" colorScheme={"blue"} fontSize="1.3rem">
        Login
      </Button>
      <ModalRegister />
    </FormControl>
  );
};
