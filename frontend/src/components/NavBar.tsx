import { Box, Container, Flex, HStack, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/spotlog 1.png"; // Replace with your actual logo path

const Navbar = () => (
  <Box 
    bg="white" 
    borderBottom="1px solid #e2e2e2"
    position="fixed"
    top={0}
    left={0}
    right={0}
    zIndex={1000}
  >
    <Container maxW="container.xl" px={6}>
      <Flex h="90px" align="center" justify="space-between" pl={9}>
        {/* Logo and Title */}
        <HStack gap={6}>
          <Image src={logo} alt="SPOT Logo" boxSize="64px" borderRadius="full" bg="#D9EAFE" alignItems="left"/>
          <Text fontFamily="Inter" fontSize="3xl" fontWeight="900">SPOT</Text>
        </HStack> 

        {/* Centered Menu */}

        <HStack gap={28}>
          <RouterLink to="/"><Text fontWeight="medium">Home</Text></RouterLink>
          <Link href="#" fontWeight="medium">Volunteer & Events</Link>
          <Link href="#" fontWeight="medium">About the App</Link>
          <RouterLink to="/about"><Text fontWeight="medium">About Us</Text></RouterLink>
          <Link href="#" fontWeight="medium">Download App</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;