import {
  VStack,
  Heading,
  Box,
  Image,
  Text,
  HStack,
  Stack,
  Container,   
} from '@chakra-ui/react';
import { TfiSearch } from 'react-icons/tfi';
import { PiTarget } from 'react-icons/pi';
import disclaimerguy from '../assets/disclaimerguy.png';

const SpotInfo = () => {
  return (
    <Container maxW="container.xl">   
      <VStack
        py={{ base: 12, md: 20 }}
        align="center"
        px={{ base: 4, md: 0 }}
        w="full"
        gap={{ base: 8, md: 12 }}
      >
        <Heading
          fontFamily="Inter"
          fontWeight="bold"
          color="#102040"
          fontSize={{ base: '3xl', md: '5xl' }}
          textAlign="center"
        >
          What Is SPOT?
        </Heading>

        <Box
          position="relative"
          w="fit-content"
          mx="auto"
          mt={{ base: 12, md: 16 }}
          mb={0}
        >
          <Image
            src={disclaimerguy}
            alt="Disclaimer"
            width={{ base: '140px', md: '200px' }}
            objectFit="contain"
            mx="auto"
            position="absolute"
            left="50%"
            top={{ base: '-60px', md: '-80px' }}
            transform="translateX(-50%)"
            zIndex={2}
          />

          <Box
            px={{ base: 6, md: 8 }}
            py={{ base: 8, md: 10 }}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            minW={{ base: '90vw', md: '600px' }}
            maxW={{ base: '92vw', md: 'unset' }}
            border="2px solid"
            borderColor="blue.100"
            zIndex={1}
            position="relative"
          >
            <Text
              fontFamily="Inter"
              color="#102040"
              textAlign="center"
              fontWeight="extralight"
              fontSize={{ base: 'md', md: 'xl' }}
              maxW="70ch"
            >
              SPOT is not focused on preventing drug use; we aim to make drug
              usage a safer experience and provide callers with a safety net in
              the case of an overdose.
            </Text>
          </Box>
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 4, md: 20 }}
          w={{ base: 'full', md: '80%' }}
          justify="center"
          align="stretch"
        >
          <Box
            bg="#C8DDFA"
            px={{ base: 6, md: 10 }}
            py={{ base: 6, md: 10 }}
            boxShadow="md"
            borderRadius="xl"
            maxW={{ base: 'full', md: '620px' }}
            mx="auto"
          >
            <HStack align="center" gap={2} mb={4} justifyContent="center">
              <TfiSearch size={28} color="#102040" />
              <Heading
                fontFamily="Inter"
                color="#102040"
                fontWeight="light"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                fontSize={{ base: 'xl', md: '2xl' }}
              >
                Purpose
              </Heading>
            </HStack>

            <Text
              fontFamily="Inter"
              fontWeight="light"
              color="#102040"
              textAlign="center"
              fontSize={{ base: 'md', md: 'xl' }}
              maxW="30ch"
            >
              SPOT connects students using drugs with trained volunteers,
              offering real-time support and monitoring.
            </Text>
          </Box>

          <Box
            bg="#C8DDFA"
            px={{ base: 6, md: 10 }}
            py={{ base: 6, md: 10 }}
            boxShadow="md"
            borderRadius="xl"
            maxW={{ base: 'full', md: '620px' }}
            mx="auto"
          >
            <HStack align="center" gap={2} mb={4} justifyContent="center">
              <PiTarget size={28} color="#102040" />
              <Heading
                fontFamily="Inter"
                color="#102040"
                fontWeight="light"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                fontSize={{ base: 'xl', md: '2xl' }}
              >
                Goals
              </Heading>
            </HStack>

            <Text
              fontFamily="Inter"
              fontWeight="light"
              color="#102040"
              textAlign="center"
              fontSize={{ base: 'md', md: 'xl' }}
              maxW="30ch"
            >
              Reduce the crucial time period between an overdose detection and
              an overdose response.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </Container>
  );
};

export default SpotInfo;
