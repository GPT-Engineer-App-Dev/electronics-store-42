import { Box, SimpleGrid, Image, Text, Heading, Link as ChakraLink, Input, InputGroup, InputRightElement, Button, Select, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699", category: "Electronics", rating: 4.5 },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999", category: "Electronics", rating: 4.7 },
  { id: 3, name: "Smartwatch", image: "/images/smartwatch.jpg", price: "$199", category: "Wearables", rating: 4.2 },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    let filtered = sampleProducts;

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      filtered = filtered.filter(product => {
        const price = parseInt(product.price.replace("$", ""));
        if (priceRange === "0-500") return price <= 500;
        if (priceRange === "500-1000") return price > 500 && price <= 1000;
        if (priceRange === "1000+") return price > 1000;
        return true;
      });
    }

    if (rating) {
      filtered = filtered.filter(product => product.rating >= parseFloat(rating));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, category, priceRange, rating]);

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={6}>Products</Heading>
      <VStack spacing={4} mb={6}>
        <InputGroup size="md">
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
        <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
        </Select>
        <Select placeholder="Select price range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="0-500">$0 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000+">$1000+</option>
        </Select>
        <Select placeholder="Select rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="4">4 stars & up</option>
          <option value="3">3 stars & up</option>
          <option value="2">2 stars & up</option>
          <option value="1">1 star & up</option>
        </Select>
      </VStack>
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