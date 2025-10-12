import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import ubcbackground from "../assets/SpotUbcBackground.png";

interface InfoBulletProps {
  title: string;
  description: string;
}

function InfoBullet({ title, description }: InfoBulletProps) {
  return (
    <VStack align="start" gap={2} m={0} p={0}>
      <Heading
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="extrabold"
        color="white"
        fontFamily="Inter"
        lineHeight="short"
        m={0}
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="white"
        fontFamily="Inter"
        opacity={0.95}
        m={0}
      >
        {description}
      </Text>
    </VStack>
  );
}

export default function MissionStatement() {
  return (
    <Box
      backgroundImage={`linear-gradient(rgba(10,45,90,0.82), rgba(10,45,90,0.82)), url(${ubcbackground})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minH="calc(100vh - 90px)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      overflow="hidden"
      py={{ base: 8, md: 16 }}        // overall top/bottom breathing room
    >
      <Container maxW="container.xl">
        <VStack gap={{ base: 10, md: 16 }} align="center">
          <Heading
            size="4xl"
            fontFamily="Inter"
            fontWeight="extrabold"
            color="white"
            textAlign="center"
            m={0}
          >
            Our Mission
          </Heading>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1px 1fr" }}
            columnGap={{ base: 8, md: 16, lg: 24 }}  // ⬅️ more space between columns
            rowGap={{ base: 10, md: 14 }}            // ⬅️ vertical gap on small screens
            w="full"
            alignItems="start"
          >
            {/* LHS */}
            <GridItem alignSelf="start" pr={{ base: 0, md: 10 }}>  {/* buffer from divider */}
              <VStack align="start" gap={{ base: 6, md: 10 }}>
                <Heading
                  fontSize={{ base: "3xl", md: "5xl" }}
                  fontFamily="Inter"
                  fontWeight="extrabold"
                  color="white"
                  lineHeight="shorter"
                  m={0}
                  maxW={{ base: "100%", md: "760px" }}  // control line length
                >
                  The detection of an overdose is as crucial as the response.
                </Heading>

                <Text
                  fontSize={{ base: "md", md: "xl" }}
                  fontFamily="Inter"
                  fontWeight="light"
                  color="white"
                  opacity={0.95}
                  m={0}
                  maxW={{ base: "100%", md: "760px" }}
                >
                  In the post-secondary environment especially, the risk of
                  using drugs alone is often weighed against the fear of stigma
                  or disciplinary consequences.
                </Text>
              </VStack>
            </GridItem>

            {/* Divider */}
            <GridItem display={{ base: "none", md: "block" }} alignSelf="stretch">
              <Box h="100%" w="1px" bg="whiteAlpha.500" mx="auto" />
            </GridItem>

            {/* RHS */}
            <GridItem alignSelf="start" pl={{ base: 0, md: 10 }}>  {/* buffer from divider */}
              <VStack align="start" gap={{ base: 8, md: 10 }}>
                <InfoBullet
                  title="Prevent Drug-Related Harms"
                  description="SPOT detects overdoses and supports students through a student-operated mutual-aid platform."
                />
                <InfoBullet
                  title="Accelerate Emergency Response"
                  description="Volunteers monitor for non-responsiveness, quickly responding to reduce the critical time period between overdose detection and response."
                />
                <InfoBullet
                  title="Promote Safer Drug-Use"
                  description="Never Use Alone."
                />
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}
