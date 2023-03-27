import { Avatar } from "@chakra-ui/avatar";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Box, Flex, Text, Wrap } from "@chakra-ui/layout";
import { CardContact } from "../../components/CardContact";
import { useUserContext } from "../../hooks/user/useUserContext.hook";
import { IContactsResponse } from "../../interfaces/contacts/contacts.interface";
import { ModalContact } from "../../components/ModalContactRegister";
import { Link, useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const { user, contacts, deleteUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    function verifyToken() {
      const token = localStorage.getItem("contactsM: token");
      if (!token) {
        navigate(`/login`, { replace: true });
      }
    }

    verifyToken();
  }, []);

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
        <Menu>
          <MenuButton
            aria-label="Options"
            as={IconButton}
            icon={<HamburgerIcon color="white" w={8} h={8} />}
            bg="none"
            _hover={{ brightness: "1.5" }}
            _expanded={{ bg: "none" }}
            _focus={{ bg: "none" }}
          />
          <MenuList
            bg="#050134"
            display="flex"
            flexDirection="column"
            gap="1rem"
          >
            <MenuItem
              bg="#232151"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              My profile
            </MenuItem>
            <MenuItem
              bg="#232151"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link
                onClick={() => {
                  window.localStorage.removeItem("contactsM: token");
                }}
                to="/login"
              >
                Logout
              </Link>
            </MenuItem>
            <MenuItem
              bg="#232151"
              color="red.500"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button onClick={() => deleteUser(user.id)}>
                Delete account
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
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
