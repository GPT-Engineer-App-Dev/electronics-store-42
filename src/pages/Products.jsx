import { Box, SimpleGrid, Image, Text, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Smartwatch", image: "/images/smartwatch.jpg", price: "$199" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map(product => (
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