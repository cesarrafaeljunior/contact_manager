import {
  ArrowForwardIcon,
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
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

export const ModalContactRetrieve = ({ fullName, email, telephone }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        icon={<ArrowForwardIcon w={10} h={10} padding={2} />}
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
            Contact Info
          </ModalHeader>
          <ModalBody paddingBottom="2rem">
            <Text>{fullName}</Text>
            <Text>{email}</Text>
            <Text>{telephone}</Text>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};
