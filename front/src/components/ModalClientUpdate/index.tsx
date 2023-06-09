import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { useUserContext } from "../../hooks/user/useUserContext.hook";

export const ModalClientUpdate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, reset } = useForm<any>({});

  const { user, updateUser } = useUserContext();
  return (
    <>
      <Text onClick={onOpen}>My profile</Text>
      <Modal size="xs" isOpen={isOpen} onClose={onClose} motionPreset="none">
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent zIndex="5000">
          <ModalHeader
            alignSelf="center"
            color="#5693A1"
            fontWeight="700"
            fontSize="1.5rem"
          >
            Update user
          </ModalHeader>
          <ModalBody paddingBottom="2rem">
            <FormControl
              onSubmit={handleSubmit((data) => {
                updateUser(data, user.id);
                reset({
                  username: "",
                  fullName: "",
                  email: "",
                  telephone: "",
                });
              })}
              display="flex"
              flexDirection="column"
              gap="2rem"
              as="form"
            >
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<FaUserPlus />} />
                    <Input placeholder="username" {...field} />
                  </InputGroup>
                )}
              />
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<InfoIcon />} />
                    <Input placeholder="full name" {...field} />
                  </InputGroup>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<EmailIcon />} />
                    <Input placeholder="email" {...field} />
                  </InputGroup>
                )}
              ></Controller>
              <Controller
                name="telephone"
                control={control}
                render={({ field }) => (
                  <InputGroup>
                    <InputLeftElement children={<PhoneIcon />} />
                    <Input placeholder="telephone" {...field} />
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
                onClick={onClose}
              >
                To create
              </Button>
            </FormControl>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};
