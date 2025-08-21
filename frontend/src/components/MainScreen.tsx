import { Container, VStack, Text, Button, HStack, Image, Box } from "@chakra-ui/react";

const MainScreen = () => {
  return (
    <Box bg="white">
      <Container maxW="container.xl"
        px={{ base: 4, md: 6 }}
        pt={{ base: 4, md: 0 }}
        pb={{ base: 8, md: 5 }}>
        <HStack
          gap={{ base: 10, md: 48 }}
          align="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <VStack align="start" gap={{ base: 5, md: 6 }} maxW={{ md: "800px" }} pl={{ base: 0, md: 8 }} w="full">
            <Text
              fontFamily="Inter"
              fontWeight="1000"
              lineHeight="1.1"
              color="black"
              userSelect="none"
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl", lg: "7xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Student Powered Overdose-Detection Technology
            </Text>

            <Text
              color="gray.700"
              lineHeight="1.3"
              fontFamily="Inter"
              fontWeight="100"
              fontSize={{ base: "md", sm: "lg", md: "2xl" }}
              maxW={{ base: "60ch", md: "600px" }}
              textAlign={{ base: "center", md: "left" }}
              mx={{ base: "auto", md: "0" }}
            >
              If you're going to use drugs alone, it's essential to have a support plan, like SPOT, in place.
            </Text>

            <Button
              size="lg"
              bg="#102040"
              color="white"
              _hover={{ bg: "blue.900" }}
              px={{ base: 6, md: 8 }}
              h={{ base: "48px", md: "60px" }}
              w={{ base: "full", sm: "320px", md: "300px" }}
              borderRadius="lg"
              fontSize={{ base: "md", md: "xl" }}
              fontWeight="semibold"
              alignSelf={{ base: "center", md: "flex-start" }}
            >
              Learn How SPOT Works
            </Button>
          </VStack>

          <Image
            src="/Phone Mockup.png"
            alt="Phone"
            w={{ base: "70%", sm: "360px", md: "420px" }}
            maxW={{ base: "420px", md: "none" }}
            objectFit="contain"
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default MainScreen;
