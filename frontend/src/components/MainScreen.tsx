import { Container, VStack, Text, Button, HStack, Image } from "@chakra-ui/react";

const MainScreen = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <HStack gap={48} align="center" flexDir={{ base: "column", md: "row" }}>
        <VStack align="start" gap={6} maxW="800px" pl={8}>
          <Text
            fontSize="7xl"
            fontWeight="1000"
            fontFamily="Inter"
            lineHeight="1.1"
            color="black"
            userSelect="none"
          >
            Student Powered Overdose-Detection Technology
          </Text>

          <Text
            fontSize="2xl"
            color="gray.700"
            lineHeight="1.3"
            maxW="600px"
            fontFamily="Inter"
            fontWeight="100"
          >
            If you're going to use drugs alone, it's essential to have a support plan, like SPOT, in place.
          </Text>
          
          <Button
            size="2xl"
            bg="#102040"
            color="white"
            _hover={{ bg: "blue.900" }}
            px={8}
            h="60px"
            w="300px"
            borderRadius="lg"
            fontSize="xl"
            fontWeight="semibold"
          >
            Learn How SPOT Works
          </Button>
        </VStack>

        <Image src="/Phone Mockup.png" alt="Phone" />
      </HStack>
    </Container>
  ); 
};

export default MainScreen;
