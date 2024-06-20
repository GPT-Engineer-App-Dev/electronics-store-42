import { Box, Flex, Link as ChakraLink, Spacer, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">Electronics Store</Heading>
        <Spacer />
        <ChakraLink as={Link} to="/" color="white" mr={4}>Home</ChakraLink>
        <ChakraLink as={Link} to="/products" color="white">Products</ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;