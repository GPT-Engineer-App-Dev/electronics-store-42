import { Box, Flex, Link as ChakraLink, Spacer, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="teal.500" p={4}>
      <Flex align="center">
        <Heading as="h1" size="lg" color="white">Electronics Store</Heading>
        <InputGroup size="md" width="300px" mr={4}>
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setSearchQuery("")}>
              Clear
            </Button>
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <ChakraLink as={Link} to="/" color="white" mr={4}>Home</ChakraLink>
        <ChakraLink as={Link} to="/products" color="white">Products</ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;