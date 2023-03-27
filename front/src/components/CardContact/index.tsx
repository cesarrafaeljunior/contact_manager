import { ArrowForwardIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Center, Flex, WrapItem } from "@chakra-ui/layout";
import { useStyleConfig } from "@chakra-ui/system";

export const CardContact = () => {
  const CardHover = (props: any) => {
    const { variants, ...rest } = props;

    const styles = useStyleConfig("BoxHoverCard", { variants });

    return <Flex __css={styles} {...rest} />;
  };

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
        zIndex="2000"
        transition="ease 0.3s"
        _hover={{ opacity: "1" }}
      >
        <ArrowForwardIcon
          padding={2}
          w={10}
          h={10}
          border="solid 1px white"
          borderRadius="100%"
          transition="ease-in 0.3s"
          _hover={{ bg: "#DBE3FF", color: "black", transform: { scale: 1.1 } }}
        />
        <DeleteIcon
          padding={2}
          w={10}
          h={10}
          border="solid 1px white"
          borderRadius="100%"
          transition="ease-in 0.3s"
          _hover={{
            bg: "#DBE3FF",
            color: "black",
          }}
        />
        <EditIcon
          padding={2}
          w={10}
          h={10}
          border="solid 1px white"
          borderRadius="100%"
          transition="ease-in 0.3s"
          _hover={{ bg: "#DBE3FF", color: "black", transform: { scale: 1.1 } }}
        />
      </CardHover>
      <Center>Martin</Center>
      <Center color="#6c6f9c">martin@gmai.com</Center>
    </WrapItem>
  );
};
