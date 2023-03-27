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
} from "@chakra-ui/react";
import { EmailIcon, InfoIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { IUserRegister } from "../../interfaces/user/user.interface";
import { useUserContext } from "../../hooks/user/useUserContext.hook";

export const ModalRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit } = useForm<IUserRegister>({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      telephone: "",
    },
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
      <Modal size="xs" isOpen={isOpen} onClose={onClose} motionPreset="none">
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
                  <InputGroup>
                    <InputLeftElement children={<InfoIcon />} />
                    <Input placeholder="Enter your full name" {...field} />
                  </InputGroup>
                )}
              />
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
                name="email"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<EmailIcon />} />
                    <Input placeholder="Enter your email" {...field} />
                  </InputGroup>
                )}
              ></Controller>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<LockIcon />} />
                    <Input placeholder="Enter you password" {...field} />
                  </InputGroup>
                )}
              ></Controller>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<LockIcon />} />
                    <Input placeholder="Confirm your password" {...field} />
                  </InputGroup>
                )}
              ></Controller>
              <Controller
                name="telephone"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<PhoneIcon />} />
                    <Input placeholder="Enter your telephone" {...field} />
                  </InputGroup>
                )}
              ></Controller>
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
