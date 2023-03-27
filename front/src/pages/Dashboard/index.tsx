import { Avatar } from "@chakra-ui/avatar";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Box, Flex, Text, Wrap } from "@chakra-ui/layout";
import { CardContact } from "../../components/CardContact";
import { useUserContext } from "../../hooks/user/useUserContext.hook";
import { IContactsResponse } from "../../interfaces/contacts/contacts.interface";
import { ModalContact } from "../../components/ModalContactRegister";

export const DashboardPage = () => {
  const { user, contacts } = useUserContext();

  return (
    <Box
      as="section"
      width="100%"
      minHeight="100vh"
      bg="#050134"
      padding="1rem"
    >
      <Flex as="section" justify="space-between" alignItems="center">
        <Flex
          alignItems="center"
          gap="0.5rem"
          bg="#232151"
          borderRadius="20px"
          padding="0.2rem 0.8rem 0.2rem 0.3rem"
        >
          <Avatar boxSize={8} />
          <Text color="white" fontSize="1rem">
            {user.fullName}
          </Text>
        </Flex>
        <SettingsIcon color="white" w={6} h={6} />
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" marginTop="3rem">
        <Text as="h1" color="white" fontSize="2rem">
          Contacts
        </Text>
        <ModalContact />
      </Flex>
      <Box marginTop={10}>
        <InputGroup size="lg">
          <InputRightElement
            children={<SearchIcon color="white" w={5} h={5} />}
          />
          <Input placeholder="Type to find" borderRadius={50} />
        </InputGroup>
      </Box>
      <Box display="flex" flexDirection="column" gap="0.5rem">
        <Text color="white" marginTop="2rem">
          Aa
        </Text>
        <Wrap>
          {contacts.map((elem: IContactsResponse) => {
            return (
              <CardContact
                key={elem.id}
                id={elem.id}
                fullName={elem.fullName}
                email={elem.email}
                telephone={elem.telephone}
              />
            );
          })}
        </Wrap>
      </Box>
    </Box>
  );
};
