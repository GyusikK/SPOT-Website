import { Box, Container, Flex, VStack, HStack, Text, Button, Image } from "@chakra-ui/react";

const MainScreen = () => {
  return (
    <Container maxW="container.xl" py={32}>
      <VStack align="start" gap={8} maxW="600px">
        <Text
          fontSize="6xl"
          fontWeight="900"
          fontFamily="Inter"
          lineHeight="1.1"
          color="black"
        >
          Student Powered Overdose-Detection Technology
        </Text>
        
        <Text
          fontSize="xl"
          color="gray.700"
          lineHeight="1.6"
          maxW="500px"
        >
          If you're going to use drugs alone, it's essential to have a support plan, like SPOT, in place.
        </Text>
        
        <Button
          size="xl"
          bg="#102040"
          color="white"
          _hover={{ bg: "blue.900" }}
          px={8}
          h="50px"
          borderRadius="lg"
          fontSize="lg"
          fontWeight="semibold"
        >
          Learn How SPOT Works
        </Button>
      </VStack>
    </Container>
  );
};

export default MainScreen;
