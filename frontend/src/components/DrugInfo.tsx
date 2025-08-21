import React from "react";
import { Box, Container, Text, Grid, GridItem } from "@chakra-ui/react";

type BubbleSpec = {
  label: string;
  w: any;
  h: any;
  top?: string;
  left?: string;
};

const bubbles: BubbleSpec[] = [
  { label: "Crack/Cocaine",   w: { base: "150px", md: "220px" }, h: { base: "48px", md: "70px" },  top: "18%", left: "6%"  },
  { label: "Fentanyl",        w: { base: "120px", md: "130px" }, h: { base: "48px", md: "70px" },  top: "10%", left: "42%" },
  { label: "MDMA",            w: { base: "110px", md: "120px" }, h: { base: "56px", md: "90px"  }, top: "34%", left: "58%" },
  { label: "Methamphetamine", w: { base: "220px", md: "310px" }, h: { base: "64px", md: "120px" }, top: "40%", left: "22%" },
  { label: "Benzodiazepine",  w: { base: "200px", md: "280px" }, h: { base: "56px", md: "90px"  }, top: "68%", left: "8%"  },
  { label: "Heroin",          w: { base: "110px", md: "110px" }, h: { base: "52px", md: "80px"  }, top: "68%", left: "52%" },
];

const Bubble = ({ label, w, h, top, left }: BubbleSpec) => (
  <Box
    // 📱 flow naturally on mobile; 💻 absolutely positioned on md+
    position={{ base: "static", md: "absolute" }}
    top={{ md: top }}
    left={{ md: left }}
    w={w}
    h={h}
    display="flex"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    px={{ base: 3, md: 4 }}
    borderRadius="2xl"
    // ⬇️ kept your gradient props exactly as provided
    bgGradient="to-b"
    gradientFrom="#83B3F3"
    gradientTo="#5E83CD"
    color="white"
    boxShadow="lg"
  >
    <Text fontWeight="light" fontFamily="Inter" fontSize={{ base: "sm", md: "lg" }}>
      {label}
    </Text>
  </Box>
);

const DrugInfo = () => {
  return (
    <Box>
      <Container my={{ base: 2, md: 4 }} maxW={{ base: "container.sm", md: "container.xl" }}>
        {/* Left bubbles (and your right side later) */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={{ base: 4, md: 6 }}
          position="relative"
          py={{ base: 6, md: 10 }}
        >
          <GridItem>
            <Box
              // 📱 flex-wrap so bubbles wrap into rows; 💻 fixed-height canvas for absolute layout
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

          {/* Add your right column content here as another GridItem when ready */}
        </Grid>
      </Container>
    </Box>
  );
};

export default DrugInfo;
