import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Box, Container, Text, VStack, HStack } from "@chakra-ui/react";
import { IPhoneMockup } from "react-device-mockup";

// Motion-enabled Box
const MotionBox = motion(Box);

const DrugBubble = ({ children, top, left }: { children: string; top: string; left: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MotionBox
      ref={ref}
      position="absolute"
      top={top}
      left={left}
      px={4}
      py={2}
      borderRadius="xl"
      color="white"
      bg="gray.400"
      boxShadow="md"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </MotionBox>
  );
};

const DrugInfo = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <HStack gap={16} align="flex-start" flexDir={{ base: "column", lg: "row" }}>
        {/* Left side - Drug bubbles */}
        <Box position="relative" minH="400px" w="100%" maxW="500px">
          <DrugBubble top="30px" left="50px">Crack/Cocaine</DrugBubble>
          <DrugBubble top="80px" left="200px">Fentanyl</DrugBubble>
          <DrugBubble top="120px" left="320px">MDMA</DrugBubble>
          <DrugBubble top="180px" left="100px">Methamphetamine</DrugBubble>
          <DrugBubble top="250px" left="50px">Benzodiazepine</DrugBubble>
          <DrugBubble top="300px" left="280px">Heroin</DrugBubble>
        </Box>

        {/* Right side - Text content */}
        <VStack align="start" gap={6} maxW="600px" flex={1}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            color="gray.800"
            lineHeight="1.2"
          >
            How Does Drug Usage at UBC Affect Students?
          </Text>
          
          <Text
            fontSize="xl"
            color="gray.600"
            lineHeight="1.6"
          >
            Many drugs come from unregulated, tainted supplies, which put users at risk of fatality. It is impossible for users to identify a tainted supply until the drugs have been consumed, making accidental overdoses a severe threat to many.
          </Text>
        </VStack>

        {/* iPhone Mockup on the far right */}
        <Box position="relative" zIndex={1}>
          <IPhoneMockup screenWidth={200} frameColor="black" screenType="notch">
            <div>
              {/* Empty screen content */}
            </div>
          </IPhoneMockup>
        </Box>
      </HStack>
    </Container>
  );
};

export default DrugInfo;
