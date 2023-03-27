import {
  EditIcon,
  EmailIcon,
  InfoIcon,
  LockIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
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
import { IContactUpdate } from "../../interfaces/contacts/contacts.interface";

export const ModalUpdate = ({ fullName, email, telephone, id }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { control, handleSubmit, reset } = useForm<IContactUpdate>({});

  const { updateContact } = useUserContext();
  return (
    <>
      <IconButton
        aria-label="Icon Click"
        border="solid 1px white"
        borderRadius="100%"
        transition="ease-in 0.3s"
        bg="transparent"
        _hover={{
          bg: "#DBE3FF",
          color: "black",
        }}
        icon={<EditIcon padding={2} w={10} h={10} />}
        onClick={onOpen}
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
            Update a contact
          </ModalHeader>
          <ModalBody paddingBottom="2rem">
            <FormControl
              onSubmit={handleSubmit((data) => {
                updateContact(data, id);
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
                To update
              </Button>
            </FormControl>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};
