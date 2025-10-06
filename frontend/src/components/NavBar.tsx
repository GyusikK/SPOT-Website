import { Box, Container, Flex, HStack, Image, Text, Link, Button, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/spotlog 1.png"; // Replace with your actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Volunteer & Events", to: "/volunteer" },
    { label: "About the App", to: "/about-app" },
    { label: "About Us", to: "/about" },
    { label: "Download App", to: "/download" },
    { label: "Mission", to: "/mission" },
  ] as const;

  const linkStyles = {
    fontWeight: "600",
    fontSize: { base: "md", lg: "lg" },
    color: "gray.800",
    letterSpacing: "0.02em",
    _hover: { color: "#1A365D", textDecoration: "none" },
  } as const;

  const renderNavLink = (
    { label, to, href }: { label: string; to?: string; href?: string },
    onClick?: () => void
  ) => (
    to ? (
      <Link
        key={label}
        as={RouterLink as any}
        to={to}
        {...(linkStyles as any)}
        onClick={onClick}
      >
        {label}
      </Link>
    ) : (
      <Link
        key={label}
        href={href}
        {...linkStyles}
        onClick={onClick}
      >
        {label}
      </Link>
    )
  );

  return (
    <Box 
      bg="rgba(255, 255, 255, 0.94)"
      borderBottom="1px solid rgba(226, 232, 240, 0.9)"
      boxShadow="sm"
      backdropFilter="saturate(180%) blur(12px)"
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
              color="#1A365D"
            >
              SPOT
            </Text>
          </HStack> 

          {/* Desktop Menu */}
          <HStack gap={{ base: 4, md: 8, lg: 12 }} display={{ base: "none", lg: "flex" }}>
            {navItems.map((item) => renderNavLink(item))}
          </HStack>

          {/* Mobile Menu Button */}
          <Button
            display={{ base: "flex", lg: "none" }}
            onClick={toggleMenu}
            variant="ghost"
            size="md"
            px={2}
            color="gray.700"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </Button>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ lg: "none" }}>
            <VStack gap={3} align="start" pt={2}>
              {navItems.map((item) => (
                renderNavLink(item, toggleMenu)
              ))}
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
