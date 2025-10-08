import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import shield from "../assets/Spot-shield-bullet.png";
import warn from "../assets/Spot-warn-bullet.png";
import handshake from "../assets/Spot-handshake-bullet.png";

interface InfoBulletProps {
  icon: string;
  title: string;
  description: string;
}

function InfoBullet({ icon, title, description }: InfoBulletProps) {
  return (
    <Box p={4}>
      <HStack align="start" gap={4}>
        <Box
          bg="transparent"
          w="48px"
          h="48px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          mt={1.5}
        >
          <Image
            src={icon}
            alt={`${title} icon`}
            boxSize="28px"
            objectFit="contain"
          />
        </Box>

        <VStack align="left" gap={1}>
          <Heading
            fontSize="lg"
            fontWeight="bold"
            color="gray.700"
            fontFamily="Inter"
          >
            {title}
          </Heading>
          <Text fontSize="md" color="gray.600" fontFamily="Inter">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default function MissionStatement() {
  return (
    <Box bg="white">
      <Container maxW="container.xl" py={16}>
        <VStack gap={12} align="center">
          <Heading
            size="4xl"
            fontFamily="Inter"
            fontWeight="extrabold"
            color="gray.800"
            textAlign="center"
          >
            Our Mission
          </Heading>

          {/* Grid with vertical line in the middle */}
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1px 1fr" }}
            gap={12}
            w="full"
          >
            {/* LHS Text */}
            <GridItem>
              <VStack align="left" gap={6}>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontFamily="Inter"
                  fontWeight="bold"
                  color="gray.700"
                  lineHeight="shorter"
                >
                  The detection of an overdose is as crucial as the response.
                </Heading>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontFamily="Inter"
                  fontWeight="light"
                  color="gray.600"
                >
                  Overdoses can become fatal without a detection system in
                  place. This issue is particularly significant in a university
                  setting, where students are confined to locked dorm rooms and
                  the stigma surrounding drug use is pervasive.
                </Text>
              </VStack>
            </GridItem>

            {/* Divider Line */}
            <GridItem display={{ base: "none", md: "block" }}>
              <Box
                height="100%"
                width="1px"
                bg="gray.300"
                mx="auto"
              />
            </GridItem>

            {/* RHS Bullets */}
            <GridItem>
              <VStack align="left" gap={6}>
                <InfoBullet
                  icon={shield}
                  title="Prevent overdose fatalities"
                  description="SPOT detects overdoses and supports students through a mutual-aid text platform."
                />
                <InfoBullet
                  icon={warn}
                  title="Ensure fast emergency response"
                  description="Volunteers monitor for non-responsiveness quickly, reducing critical time between detection and help."
                />
                <InfoBullet
                  icon={handshake}
                  title="Promote safer drug-use"
                  description="We aim to reduce harm by addressing the drug crisis on campus and encouraging responsible support."
                />
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
