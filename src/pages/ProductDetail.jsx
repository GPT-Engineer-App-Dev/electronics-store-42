import { Box, Image, Text, Heading, Button } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699", description: "Latest smartphone with amazing features." },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999", description: "High-performance laptop for all your needs." },
  { id: 3, name: "Smartwatch", image: "/images/smartwatch.jpg", price: "$199", description: "Smartwatch with health tracking features." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} mb={4} />
      <Heading as="h2" size="xl" mb={2}>{product.name}</Heading>
      <Text fontSize="lg" mb={4}>{product.price}</Text>
      <Text mb={6}>{product.description}</Text>
      <Button as={Link} to="/products" colorScheme="teal">Back to Products</Button>
    </Box>
  );
};

export default ProductDetail;