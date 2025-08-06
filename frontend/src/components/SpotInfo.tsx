import React from 'react'
import { VStack, Heading, Box, Image, Text, HStack, Center } from '@chakra-ui/react'

const SpotInfo = () => {
  return (
    <VStack py={20} align="center">
      <Heading size="5xl" fontWeight="bold" fontFamily="Inter" color="#102040">
        What Is SPOT?
      </Heading>
      
      <Box position="relative" w="fit-content" mx="auto" mt={20} mb={8}>
        <Image
          src="/src/assets/disclaimerguy.png"
          alt="Disclaimer"
          width="200px"
          objectFit="contain"
          mx="auto"
          position="absolute"   
          left="50%"
          top="-80px"
          transform="translateX(-50%)"
          zIndex={2}
        />
        <Box
          px={8}
          py={10}
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          minW={{ base: "90vw", md: "600px" }}
          border="2px solid"
          borderColor="blue.100"
          zIndex={1}
          position="relative"
        >
          <Text fontSize="xl" fontFamily="Inter" color="#102040" textAlign="center" fontWeight="extralight">
          SPOT is not focused on preventing drug use; we aim to make drug usage a safer 
          <br />
          experience and provide callers with a safety net in the case of an overdose.
          </Text>
        </Box>
      </Box>

      {/* Now time for the small text bubbles */}
      <HStack gap={20}>
        <Box bg="#C8DDFA" px={10} py={10} boxShadow="md" borderRadius="xl">
          <Text fontFamily="Inter" fontSize="xl" fontWeight="light" color="#102040" textAlign="center">
          SPOT connects students using drugs 
          <br />
          with trained volunteers, offering real-
          <br />
          time 
          support and monitoring.
          </Text>
        </Box>

        <Box bg="#C8DDFA" px={10} py={10} boxShadow="md" borderRadius="xl">
          <Text fontFamily="Inter" fontSize="xl" fontWeight="light" color="#102040" textAlign="center"  >
          Reduce the crucial time period between 
          <br />
          an overdose detection and an overdose 
          <br />
          response.
          </Text>
        </Box>
      </HStack>
    </VStack>
  )
}

export default SpotInfo
