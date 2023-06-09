import { DeleteIcon } from "@chakra-ui/icons";
import { Center, Flex, WrapItem } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/system";
import { useUserContext } from "../../hooks/user/useUserContext.hook";
import { ModalContactRetrieve } from "../ModalContactRetrieve";
import { ModalUpdate } from "../ModalContactUpdate";

export const CardContact = ({ fullName, email, id, telephone }: any) => {
  const CardHover = (props: any) => {
    const { variants, ...rest } = props;

    const styles = useStyleConfig("BoxHoverCard", { variants });

    return <Flex __css={styles} {...rest} />;
  };

  const { deleteContact } = useUserContext();

  return (
    <WrapItem
      bg="#2A2E70"
      color="white"
      width="100%"
      height="100%"
      padding="1.5rem"
      borderRadius="20px"
      display="flex"
      flexDirection="column"
      position="relative"
      cursor="pointer"
    >
      <CardHover
        display="flex"
        position="absolute"
        alignItems="center"
        justifyContent="flex-end"
        top="0"
        left="0"
        paddingRight="1rem"
        gap="3"
        width="100%"
        height="100%"
        transition="ease 0.3s"
        _hover={{ opacity: "1" }}
      >
        <ModalContactRetrieve
          id={id}
          fullName={fullName}
          email={email}
          telephone={telephone}
        />
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
          icon={<DeleteIcon padding={2} w={10} h={10} />}
          onClick={() => deleteContact(id)}
        />
        <ModalUpdate
          fullName={fullName}
          email={email}
          telephone={telephone}
          id={id}
        />
      </CardHover>
      <Center>{fullName}</Center>
      <Center color="#6c6f9c">{email}</Center>
    </WrapItem>
  );
};
