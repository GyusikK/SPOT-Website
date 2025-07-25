import { Box, Container, Flex, HStack, Image, Text, Link } from "@chakra-ui/react";
import logo from "../assets/spotlog 1.png"; // Replace with your actual logo path

const Navbar = () => (
  <Box bg="white" borderBottom="1px solid #e2e2e2">
    <Container maxW="container.xl" px={6}>
      <Flex h="90px" align="center" justify="space-between">
        {/* Logo and Title */}
        <HStack gap={4}>
          <Image src={logo} alt="SPOT Logo" boxSize="64px" borderRadius="full" bg="#D9EAFE" alignItems="left"/>
          <Text fontSize="3xl" fontWeight="bold" fontFamily="inherit">SPOT</Text>
        </HStack>

        {/* Centered Menu */}

        <HStack gap={16}>
          <Link href="#" fontWeight="medium">Home</Link>
          <Link href="#" fontWeight="medium">Volunteer & Events</Link>
          <Link href="#" fontWeight="medium">About the App</Link>
          <Link href="#" fontWeight="medium">About Us</Link>
          <Link href="#" fontWeight="medium">Download App</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;