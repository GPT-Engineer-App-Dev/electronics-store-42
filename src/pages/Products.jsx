import { Box, SimpleGrid, Image, Text, Heading, Link as ChakraLink, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Smartwatch", image: "/images/smartwatch.jpg", price: "$199" },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  useEffect(() => {
    setFilteredProducts(
      sampleProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>Products</Heading>
      <InputGroup size="md" mb={6}>
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
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
              <Text fontSize="lg" mb={4}>{product.price}</Text>
              <ChakraLink as={Link} to={`/products/${product.id}`} color="teal.500">View Details</ChakraLink>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;