import { Box, Flex } from "@chakra-ui/react";

const Footer = () => (
  <Flex justifyContent="space-between" borderTop="1px">
    <Box textAlign="center" p="5" color="gray.600" borderColor="gray.100">
      2021 House , Inc
    </Box>
    <Box p="5" color="gray.600" borderColor="gray.100">
      Bennett Designs
    </Box>
  </Flex>
);

export default Footer;
