import { LockIcon } from "@chakra-ui/icons";
import {
  FormControl,
  Input,
  Heading,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { useUserContext } from "../../hooks/user/useUserContext.hook";
import { IUserLogin } from "../../interfaces/user/user.interface";
import { ModalRegister } from "../ModalRegister";

export const ModalLogin = () => {
  const { control, handleSubmit } = useForm<IUserLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { loginUser } = useUserContext();

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
      as="form"
      onSubmit={handleSubmit(loginUser)}
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
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <InputGroup>
            <InputLeftElement children={<FaUser />} />
            <Input placeholder="Enter your username" {...field} />
          </InputGroup>
        )}
      ></Controller>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputGroup flexDirection="column" justifyContent="space-between">
            <InputLeftElement children={<LockIcon />} />
            <Input type="icon" placeholder="Enter your password" {...field} />
          </InputGroup>
        )}
      ></Controller>
      <Button
        width="100%"
        height="50px"
        colorScheme={"blue"}
        fontSize="1.3rem"
        type="submit"
      >
        Login
      </Button>
      <ModalRegister />
    </FormControl>
  );
};
