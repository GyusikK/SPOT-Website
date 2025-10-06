import { Box, Container, Heading, Text, Stack, SimpleGrid, VStack, Button } from "@chakra-ui/react"
import { FaHandsHelping, FaCalendarAlt, FaUserFriends } from "react-icons/fa"

const VolunteerEvents = () => {
  const opportunities = [
    {
      icon: <FaHandsHelping size={28} />,
      title: "On-Call Volunteers",
      description: "Answer SPOT check-ins, monitor conversations, and dispatch support when something feels off.",
    },
    {
      icon: <FaCalendarAlt size={28} />,
      title: "Campus Outreach",
      description: "Lead residence workshops, naloxone trainings, and pop-up booths to build overdose awareness.",
    },
    {
      icon: <FaUserFriends size={28} />,
      title: "Peer Support Team",
      description: "Hold weekly drop-ins where students can ask questions about using SPOT and accessing safer-use resources.",
    },
  ]

  return (
    <Box bg="white">
      <Box bg="#102040" color="white" py={{ base: 14, md: 20 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 16 }} align="center">
            <VStack align="flex-start" gap={5} maxW={{ base: "full", md: "520px" }}>
              <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold" lineHeight="1.1">
                Volunteer & Events
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} opacity={0.9}>
                SPOT is powered by students who care deeply about harm reduction. Whether you have ten hours a
                week or want to help during campus-wide events, there’s a place for you on the team.
              </Text>
              <Button
                size={{ base: "md", md: "lg" }}
                bg="white"
                color="#102040"
                _hover={{ bg: "blue.100" }}
                borderRadius="lg"
                px={{ base: 6, md: 8 }}
              >
                Apply to Volunteer
              </Button>
            </VStack>
            <VStack
              align="stretch"
              gap={4}
              bg="whiteAlpha.200"
              borderRadius="xl"
              px={{ base: 6, md: 10 }}
              py={{ base: 6, md: 8 }}
              boxShadow="0 16px 40px rgba(0, 0, 0, 0.25)"
            >
              <Text textTransform="uppercase" letterSpacing="widest" fontSize="sm" opacity={0.7}>
                Why Volunteer?
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" lineHeight="1.3">
                Every conversation we monitor is a chance to prevent an overdose and give students judgment-free support.
              </Text>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <VStack gap={{ base: 10, md: 14 }}>
          <VStack gap={3} textAlign="center">
            <Heading color="#102040" fontSize={{ base: "2xl", md: "4xl" }}>How You Can Help</Heading>
            <Text color="gray.700" fontSize={{ base: "md", md: "lg" }} maxW={{ base: "60ch", md: "70ch" }}>
              Training is provided by student leaders and campus health professionals. Pick a stream below that fits your
              schedule and comfort level—no prior experience required.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 8 }} w="full">
            {opportunities.map(({ icon, title, description }) => (
              <VStack
                key={title}
                align="flex-start"
                bg="#EDF3FF"
                borderRadius="lg"
                p={{ base: 6, md: 8 }}
                gap={4}
                boxShadow="md"
                h="full"
              >
                <Box color="#102040">{icon}</Box>
                <Heading fontSize={{ base: "xl", md: "2xl" }} color="#102040">
                  {title}
                </Heading>
                <Text color="gray.700" fontSize={{ base: "md", md: "lg" }}>
                  {description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>

          <VStack align="stretch" gap={6} w="full">
            <Heading color="#102040" fontSize={{ base: "2xl", md: "4xl" }}>
              Upcoming Events
            </Heading>
            <Box
              border="1px solid"
              borderColor="blue.100"
              borderRadius="xl"
              px={{ base: 6, md: 8 }}
              py={{ base: 8, md: 10 }}
              boxShadow="sm"
              textAlign="center"
            >
              <Text color="#102040" fontWeight="600" fontSize={{ base: "lg", md: "xl" }}>
                There are no upcoming events right now.
              </Text>
              <Text color="gray.600" mt={2}>
                Check back soon or join our volunteer list to be the first to know about new training sessions and community events.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default VolunteerEvents
