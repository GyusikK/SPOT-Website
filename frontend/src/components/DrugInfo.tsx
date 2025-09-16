import React from "react";
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Heading,
  VStack,
} from "@chakra-ui/react";

type BubbleSpec = {
  label: string;
  w: any;
  h: any;
  top?: string;
  left?: string;
};

const bubbles: BubbleSpec[] = [
  {
    label: "Crack/Cocaine",
    w: { base: "180x", md: "220px" },
    h: { base: "64px", md: "90px" },
    top: "16%",
    left: "4%",
  },
  {
    label: "Fentanyl",
    w: { base: "130px", md: "130px" },
    h: { base: "64px", md: "90px" },
    top: "6%",
    left: "46%",
  },
  {
    label: "MDMA",
    w: { base: "125px", md: "120px" },
    h: { base: "72px", md: "100px" },
    top: "25%",
    left: "70%",
  },
  {
    label: "Methamphetamine",
    w: { base: "260px", md: "300px" },
    h: { base: "96px", md: "130px" },
    top: "40%",
    left: "20%",
  },
  {
    label: "Benzodiazepine",
    w: { base: "220x", md: "300px" },
    h: { base: "72px", md: "110px" },
    top: "72%",
    left: "6%",
  },
  {
    label: "Heroin",
    w: { base: "125px", md: "150px" },
    h: { base: "68px", md: "96px" },
    top: "72%",
    left: "56%",
  },
];

const Bubble = ({ label, w, h, top, left }: BubbleSpec) => (
  <Box
    // 📱 flow naturally on mobile; 💻 absolutely positioned on md+
    position={{ base: "static", md: "absolute" }}
    top={{ md: top }}
    left={{ md: left }}
    h={h}
    w={w}
    display="flex"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    px={{ base: 3, md: 4 }}
    borderRadius="2xl"
    // ⬇️ kept your gradient props exactly as provided
    bg="#83B3F3"
    color="white"
    boxShadow="lg"
  >
    <Text
      fontWeight="300"
      fontFamily="Inter"
      fontSize={{ base: "sm", md: "xl" }}
    >
      {label}
    </Text>
  </Box>
);

const DrugInfo = () => {
  return (
    <Box>
      <Container
        my={{ base: 2, md: 4 }}
        maxW={{ base: "container.sm", md: "container.xl" }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: 2, md: 2 }}
          position="relative"
          py={{ base: 6, md: 10 }}
        >
          <GridItem>
            <Box
              position="relative"
              h={{ base: "auto", md: "500px" }}
              display={{ base: "flex", md: "block" }}
              flexWrap={{ base: "wrap", md: "unset" }}
              gap={{ base: 3, md: 0 }}
              rowGap={{ base: 3, md: 0 }}
            >
              {bubbles.map((b) => (
                <Bubble key={b.label} {...b} />
              ))}
            </Box>
          </GridItem>

          {/* Text Section */}
          <GridItem maxW="85%">
            <VStack
              align="left"
              gap={{ base: 2, md: 5 }}
              py={{ base: 5, md: 10 }}
            >
              <Heading
                color="#102040"
                fontFamily="Inter"
                fontSize={{ base: "3xl", md: "6xl" }}
                fontWeight={{ base: "300", md: "500" }}
                lineHeight={{ base: "1.15", md: "1.05" }}
                maxW={{ base: "100%", md: "85%" }}
              >
                How Does Drug Usage at UBC Affect Students?
              </Heading>
              <Text
                fontFamily="Inter"
                fontSize={{base:"lg" ,md:"2xl"}}
                fontWeight={{sm:"200", md:"250"}}
              >
                Many drugs come from unregulated, tainted supplies, which put
                users at risk of fatality. It is impossible for users to
                identify a tainted supply until the drugs have been consumed,
                making accidental overdoses a severe threat to many.
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default DrugInfo;
