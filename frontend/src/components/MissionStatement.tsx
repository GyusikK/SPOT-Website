import React from 'react';
import {
  VStack,
  HStack,
  Icon,
  Heading,
  Box,
  Container,
  Text,
} from '@chakra-ui/react';
import bg from '../assets/SpotUbcBackground.png';

// Ok so this is a helper function for the bullet points in the mission statement
const Bullet = ({
  icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) => {
  return (
    <VStack align="start" gap={2}>
      <HStack align="start" gap={3}>
        <Icon as={icon} boxSize={6} />
        <Heading as="h3" size="md">
          {title}
        </Heading>
      </HStack>
    </VStack>
  );
};

const MissionStatement = () => {
  return (
    <Box
      bgImage={`linear-gradient(rgba(16,32,64,.70), rgba(16,32,64,.70)), url(${bg})`}
      bgSize="cover"                 
      bgPos={{ base: 'center', md: 'center 25%' }} 
      bgRepeat="no-repeat"
      w="100%"
      minH="80vh"                   
      display="flex"                 
      alignItems="center"
      color="white"
    >
      <Container maxW="container.xl">
        <Text>
          Hn
        </Text>
      </Container>
    </Box>
  )
}

export default MissionStatement
