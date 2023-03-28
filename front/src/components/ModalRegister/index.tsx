import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { EmailIcon, InfoIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { IUserRegister } from "../../interfaces/user/user.interface";
import { useUserContext } from "../../hooks/user/useUserContext.hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas/register.schema";

export const ModalRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      telephone: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const { signUpUser } = useUserContext();

  return (
    <>
      <Button
        bg="none"
        border="solid 1px transparent"
        color="blue.400"
        _hover={{ color: "blue.200" }}
        width="max-content"
        height="max-content"
        onClick={onOpen}
        alignSelf="flex-end"
      >
        New user? Register now
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose} motionPreset="none">
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader
            alignSelf="center"
            color="#5693A1"
            fontWeight="700"
            fontSize="1.5rem"
          >
            Sign up Panel
          </ModalHeader>
          <ModalBody paddingBottom="2rem">
            <FormControl
              onSubmit={handleSubmit(signUpUser)}
              display="flex"
              flexDirection="column"
              gap="2rem"
              as="form"
            >
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <InputGroup flexDirection="column" alignItems="center">
                    <InputLeftElement children={<InfoIcon />} />
                    <Input placeholder="Enter your full name" {...field} />
                    <Text color={"red.500"} fontWeight="600">
                      {errors.fullName?.message}
                    </Text>
                  </InputGroup>
                )}
              />
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <InputGroup flexDirection="column" alignItems="center">
                    <InputLeftElement children={<FaUser />} />
                    <Input placeholder="Enter your username" {...field} />
                    <Text color={"red.500"} fontWeight="600">
                      {errors.username?.message}
                    </Text>
                  </InputGroup>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputGroup flexDirection="column" alignItems="center">
                    <InputLeftElement children={<EmailIcon />} />
                    <Input placeholder="Enter your email" {...field} />
                    <Text color={"red.500"} fontWeight="600">
                      {errors.email?.message}
                    </Text>
                  </InputGroup>
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputGroup flexDirection="column" alignItems="center">
                    <InputLeftElement children={<LockIcon />} />
                    <Input
                      type="password"
                      placeholder="Enter you password"
                      {...field}
                    />
                    <Text color={"red.500"} fontWeight="600">
                      {errors.password?.message}
                    </Text>
                  </InputGroup>
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <InputGroup flexDirection="column" alignItems="center">
                    <InputLeftElement children={<LockIcon />} />
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                    <Text color={"red.500"} fontWeight="600">
                      {errors.confirmPassword?.message}
                    </Text>
                  </InputGroup>
                )}
              />
              <Controller
                name="telephone"
                control={control}
                render={({ field }) => (
                  <InputGroup flexDirection="column" alignItems="center">
                    <InputLeftElement children={<PhoneIcon />} />
                    <Input placeholder="Enter your telephone" {...field} />
                    <Text color={"red.500"} fontWeight="600">
                      {errors.telephone?.message}
                    </Text>
                  </InputGroup>
                )}
              />
              <Button
                type="submit"
                width="80%"
                alignSelf="center"
                padding="1.5rem"
                colorScheme={"blue"}
                fontSize="1.2rem"
                borderRadius="0.2rem"
              >
                Sign up
              </Button>
            </FormControl>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};
