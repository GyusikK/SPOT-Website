import { Box, Container, Stack, Heading, Text, Button, HStack } from '@chakra-ui/react';
import bg from '../assets/SpotUbcBackground.png';

const MissionStatement = () => {
  return (
    <Box
      position="relative"
      bgImage={`url(${bg})`}
      bgSize="cover"
      bgPos={{ base: 'center', md: 'center 25%' }}
      bgRepeat="no-repeat"
      w="100%"
      minH="85vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign={{ base: 'center', md: 'left' }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-t, rgba(10,18,36,0.85) 0%, rgba(10,18,36,0.5) 50%, rgba(10,18,36,0.2) 100%)"
        zIndex={0}
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Stack>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            textTransform="uppercase"
            letterSpacing="widest"
            opacity={0.9}
          >
            University of British Columbia
          </Text>
          <Heading
            as="h2"
            size={{ base: 'xl', md: '2xl' }}
            lineHeight={1.2}
            fontWeight="extrabold"
            textShadow="0 4px 12px rgba(0,0,0,0.6)"
          >
            Detect. Respond. Save Lives.
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            opacity={0.95}
            textShadow="0 2px 8px rgba(0,0,0,0.7)"
          >
            SPOT is a confidential text-based safety line that provides real-time overdose
            detection and response coordination for students. When a conversation goes quiet,
            our system triggers a structured response plan to close the critical gap between
            recognition and help.
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            opacity={0.95}
            textShadow="0 2px 8px rgba(0,0,0,0.7)"
          >
            Built for residence and campus life, SPOT connects people who use drugs with
            trained student volunteers and campus resources. The goal is simple: reduce harm,
            protect privacy, and make it easy to get help fast—without judgment.
          </Text>
          <HStack
            pt={{ base: 2, md: 4 }}
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Button as="a"  size={{ base: 'md', md: 'lg' }}>
              Download App
            </Button>
            <Button
              as="a"
              
              variant="outline"
              size={{ base: 'md', md: 'lg' }}
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              Become a Volunteer
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MissionStatement;