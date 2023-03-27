import { EmailIcon, InfoIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Icon,
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
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import { useUserContext } from "../../hooks/user/useUserContext.hook";
import { IContactRegister } from "../../interfaces/contacts/contacts.interface";

export const ModalContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, reset } = useForm<IContactRegister>({
    defaultValues: {
      fullName: "",
      email: "",
      telephone: "",
    },
  });

  const { registerContact } = useUserContext();
  return (
    <>
      <IconButton
        aria-label="Added contact"
        bg="transparent"
        _hover={{ bg: "none" }}
        icon={
          <Icon
            as={FaUserPlus}
            w={50}
            h={50}
            bg="#4200D8"
            borderRadius="50%"
            color="white"
            padding={3}
            transition="ease 0.5s"
            _hover={{ bg: "#240177" }}
            onClick={onOpen}
          />
        }
      />
      <Modal size="xs" isOpen={isOpen} onClose={onClose} motionPreset="none">
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent zIndex="5000">
          <ModalHeader
            alignSelf="center"
            color="#5693A1"
            fontWeight="700"
            fontSize="1.5rem"
          >
            Create a contact
          </ModalHeader>
          <ModalBody paddingBottom="2rem">
            <FormControl
              onSubmit={handleSubmit((data) => {
                registerContact(data);
                reset({
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
                onClick={() => {
                  onClose();
                }}
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
