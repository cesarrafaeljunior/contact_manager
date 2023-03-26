import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

export const ModalRegister = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <ModalBody
            display="flex"
            flexDirection="column"
            gap="2rem"
            paddingBottom="2rem"
          >
            <Input placeholder="Enter your full name" />
            <Input placeholder="Enter username" />
            <Input placeholder="Enter email" />
            <Input placeholder="Enter password" />
            <Input placeholder="Enter telephone" />
            <Button
              width="80%"
              alignSelf="center"
              padding="1.5rem"
              colorScheme={"blue"}
              fontSize="1.2rem"
              borderRadius="0.2rem"
            >
              Sign up
            </Button>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};
