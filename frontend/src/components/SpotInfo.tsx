import React from 'react'
import { VStack, Heading, Box, Image, Text } from '@chakra-ui/react'

const SpotInfo = () => {
  return (
    <VStack py={16} align="center">
      <Heading size="5xl" fontWeight="bold" fontFamily="Inter" color="#102040">
        What Is SPOT?
      </Heading>
      
      <Box position="relative" w="fit-content" mx="auto" mt={6} mb={8}>
        <Image
          src="/src/assets/disclaimerguy.png"
          alt="Disclaimer"
          width="200px"
          objectFit="contain"
          mx="auto"   
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
    </VStack>
  )
}

export default SpotInfo
