import { Box, Container, Flex, HStack, Image, Text, Link, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/spotlog 1.png"; // Replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
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
        <Flex h="90px" align="center" justify="space-between" pl={{ base: 4, md: 9 }}>
          {/* Logo and Title */}
          <HStack gap={{ base: 3, md: 6 }}>
            <Image 
              src={logo} 
              alt="SPOT Logo" 
              boxSize={{ base: "48px", md: "64px" }} 
              borderRadius="full" 
              bg="#D9EAFE" 
              alignItems="left"
            />
            <Text 
              fontFamily="Inter" 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
              fontWeight="900"
            >
              SPOT
            </Text>
          </HStack> 

          {/* Desktop Menu */}
          <HStack gap={{ base: 4, md: 8, lg: 28 }} display={{ base: "none", lg: "flex" }}>
            <RouterLink to="/"><Text fontWeight="medium">Home</Text></RouterLink>
            <Link href="#" fontWeight="medium">Volunteer & Events</Link>
            <Link href="#" fontWeight="medium">About the App</Link>
            <Link href="about" fontWeight="medium">About Us</Link>
            <Link href="#" fontWeight="medium">Download App</Link>
            <Link href="mission" fontWeight="medium">Mission</Link>
          </HStack>

          {/* Mobile Menu Button */}
          <Button
            display={{ base: "flex", lg: "none" }}
            onClick={toggleMenu}
            variant="ghost"
            size="md"
            px={2}
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ lg: "none" }}>
            <VStack gap={4} align="start">
              <RouterLink to="/" onClick={toggleMenu}>
                <Text fontWeight="medium">Home</Text>
              </RouterLink>
              <Link href="#" fontWeight="medium" onClick={toggleMenu}>
                Volunteer & Events
              </Link>
              <Link href="#" fontWeight="medium" onClick={toggleMenu}>
                About the App
              </Link>
              <Link href="about" fontWeight="medium" onClick={toggleMenu}>
                About Us
              </Link>
              <Link href="#" fontWeight="medium" onClick={toggleMenu}>
                Download App
              </Link>
              <Link href="mission" fontWeight="medium" onClick={toggleMenu}>
                Mission
              </Link>
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;