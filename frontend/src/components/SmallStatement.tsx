import React from "react";
import {
  Container,
  Stack,
  Image,
  Text,
  Heading,
  Box,
  VStack,
} from "@chakra-ui/react";

const SmallStatement = () => {
  return (
    <Box bg="white">
      <Container maxW="6xl" px={{ base: 4, md: 8 }} py={{ base: 6, md: 8 }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: 8, md: 12 }}
          align="center"
        >
          <Image
            src="/src/assets/SmallBottleGuy.png"
            alt="Overdose detection mascot"
            w={{ base: "200px", md: "240px", lg: "280px" }}
            maxW="40%"         
            flexShrink={0}     
            objectFit="contain"
          />

          <VStack
            gap={{ base: 4, md: 6 }}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
            maxW={{ md: "720px" }}
            w="full"
          >
            <Heading
              as="h2"
              fontFamily="Inter"
              fontWeight="800"
              lineHeight="1.1"
              color="#102040"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              The detection of an overdose is as{" "}
              <Box as="span" display={{ base: "inline", lg: "block" }}>
                crucial as the response.
              </Box>
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="60ch">
              Overdoses can become fatal without a detection system in place.
              This issue is particularly significant in a university setting,
              where students are confined to locked dorm rooms and the stigma
              surrounding drug use is pervasive.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default SmallStatement;
