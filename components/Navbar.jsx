import NextLink from "next/link";
import {
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontFamily="" fontWeight="bold">
      <NextLink href="/" paddingLeft="2">
        House
      </NextLink>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
        />
        <MenuList>
          <NextLink href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </NextLink>
          <NextLink href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </NextLink>
          <NextLink href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </NextLink>
          <NextLink href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
