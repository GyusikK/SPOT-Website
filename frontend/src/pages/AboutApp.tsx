import { Box, Container, Heading, Text, SimpleGrid, VStack, Stack, Button, HStack } from "@chakra-ui/react"
import { MdSecurity, MdInsights, MdChat, MdCheckCircle } from "react-icons/md"
import { FaBolt } from "react-icons/fa"

const AboutApp = () => {
  const features = [
    {
      icon: <MdSecurity size={32} />,
      title: "Confidential First",
      description: "Conversations stay encrypted within SPOT. We only escalate when a safety plan is activated, protecting anonymity throughout.",
    },
    {
      icon: <MdChat size={32} />,
      title: "Guided Conversations",
      description: "Volunteers follow scripted check-ins that keep chats casual while quietly monitoring response signals and intent.",
    },
    {
      icon: <MdInsights size={32} />,
      title: "Smart Monitoring",
      description: "Timers, keyword tracking, and inactivity alerts flag when a volunteer should escalate and dispatch campus responders.",
    },
    {
      icon: <FaBolt size={32} />,
      title: "Rapid Response",
      description: "Once a red flag is triggered, SPOT automatically loops in the duty lead with caller details and a clear action checklist.",
    },
  ]

  const workflow = [
    {
      label: "1",
      heading: "Start a Session",
      copy: "A student texts SPOT and answers a few quick questions about their plan, location, and preferred follow-up method.",
    },
    {
      label: "2",
      heading: "Stay Connected",
      copy: "Volunteers check in periodically. If replies slow down, SPOT nudges the volunteer and tightens monitoring windows.",
    },
    {
      label: "3",
      heading: "Escalate Thoughtfully",
      copy: "If there is no response, SPOT escalates to the on-call lead who sends residence staff, security, or EMS as needed.",
    },
  ]

  return (
    <Box bg="white">
      <Box bg="#EDF3FF" py={{ base: 14, md: 20 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 16 }} align="center">
            <VStack align="flex-start" gap={5} maxW={{ base: "full", md: "550px" }}>
              <Heading fontSize={{ base: "3xl", md: "5xl" }} color="#102040" fontWeight="extrabold">
                About the SPOT App
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} color="gray.700">
                SPOT is a student-built platform that blends peer-to-peer support with structured overdose response. The
                experience is intentionally friendly while the backend keeps track of every safety detail.
              </Text>
              <Button
                size={{ base: "md", md: "lg" }}
                bg="#102040"
                color="white"
                _hover={{ bg: "blue.900" }}
                borderRadius="lg"
                px={{ base: 6, md: 10 }}
              >
                Explore Volunteer Roles
              </Button>
            </VStack>
            <VStack align="flex-start" bg="white" borderRadius="xl" p={{ base: 6, md: 8 }} boxShadow="lg" gap={4}>
              <Heading fontSize="lg" color="#102040">
                Built for Campus Safety
              </Heading>
              <Text color="gray.600" lineHeight="1.6">
                Every feature is co-designed with students, residence life, and harm reduction experts to make sure SPOT
                complements existing campus supports instead of replacing them.
              </Text>
              <Box h="1px" w="full" bg="blue.100" />
              <VStack gap={3} align="flex-start" color="#102040">
                {[
                  "Works with residence and security protocols",
                  "Respects caller anonymity and autonomy",
                  "Tracks actions so no step gets missed",
                ].map((item) => (
                  <HStack key={item} align="flex-start" gap={3}>
                    <Box color="#4A81E0" pt={1}>
                      <MdCheckCircle size={20} />
                    </Box>
                    <Text>{item}</Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <VStack gap={{ base: 10, md: 14 }}>
          <VStack gap={3} textAlign="center">
            <Heading color="#102040" fontSize={{ base: "2xl", md: "4xl" }}>Key Features</Heading>
            <Text color="gray.700" fontSize={{ base: "md", md: "lg" }} maxW={{ base: "60ch", md: "70ch" }}>
              The SPOT app focuses on creating a reliable safety net without overwhelming volunteers. These are the pillars
              every build centers around.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 10 }} w="full">
            {features.map(({ icon, title, description }) => (
              <VStack
                key={title}
                align="flex-start"
                bg="white"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                boxShadow="md"
                border="1px solid"
                borderColor="blue.100"
                gap={4}
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

          <VStack align="stretch" gap={8} w="full">
            <Heading color="#102040" fontSize={{ base: "2xl", md: "4xl" }}>How a Conversation Flows</Heading>
            <Stack gap={{ base: 6, md: 10 }}>
              {workflow.map(({ label, heading, copy }) => (
                <Box
                  key={label}
                  bg="#EDF3FF"
                  borderRadius="xl"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 8 }}
                  boxShadow="sm"
                >
                  <HStack align="flex-start" gap={4}>
                    <Box
                      bg="#102040"
                      color="white"
                      borderRadius="full"
                      w={{ base: "40px", md: "56px" }}
                      h={{ base: "40px", md: "56px" }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                      fontSize={{ base: "lg", md: "2xl" }}
                    >
                      {label}
                    </Box>
                    <VStack align="flex-start" gap={2}>
                      <Heading fontSize={{ base: "xl", md: "2xl" }} color="#102040">
                        {heading}
                      </Heading>
                      <Text color="gray.700" fontSize={{ base: "md", md: "lg" }}>
                        {copy}
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </Stack>
          </VStack>

          <Box bg="#102040" color="white" borderRadius="2xl" p={{ base: 8, md: 12 }} textAlign="center" boxShadow="lg">
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              Built by students, tested in residence, and ready to expand.
            </Heading>
            <Text mt={3} fontSize={{ base: "md", md: "lg" }} opacity={0.85}>
              Want to pilot SPOT in your faculty or campus community? Reach out and we’ll walk through integration steps
              with you.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default AboutApp
