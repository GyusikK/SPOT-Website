import { Box, Container, Heading, Text, Stack, VStack, SimpleGrid, Button, Link, HStack } from "@chakra-ui/react"
import { FaApple, FaGooglePlay, FaCheckCircle } from "react-icons/fa"

const DownloadApp = () => {
  const platforms = [
    {
      name: "iOS (Beta TestFlight)",
      icon: <FaApple size={32} />,
      description: "Join our TestFlight to preview new features and help us fine-tune the iPhone experience before public launch.",
      actions: [
        "Download the TestFlight app from the App Store",
        "Open the invitation link emailed to beta volunteers",
        "Install SPOT and enable notifications",
      ],
      cta: {
        label: "Request TestFlight Invite",
        href: "#",
      },
    },
    {
      name: "Android (Closed Pilot)",
      icon: <FaGooglePlay size={32} />,
      description: "Our Android build is currently piloting in select residences. We’ll expand access as soon as onboarding is ready.",
      actions: [
        "Complete the volunteer onboarding form",
        "Verify your UBC email for authentication",
        "Join the pre-release channel for updates",
      ],
      cta: {
        label: "Join the Android Waitlist",
        href: "#",
      },
    },
  ]

  return (
    <Box bg="white">
      <Box bg="#102040" color="white" py={{ base: 14, md: 20 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} gap={{ base: 8, md: 14 }} align="center">
            <VStack align="flex-start" gap={5} maxW={{ base: "full", md: "540px" }}>
              <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold" lineHeight="1.1">
                Download the SPOT App
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} opacity={0.9}>
                Access SPOT when you need judgment-free support. We’re rolling out mobile access in phases to ensure
                volunteers and safety teams are ready for real-time response.
              </Text>
            </VStack>
            <VStack align="stretch" gap={4} bg="whiteAlpha.200" borderRadius="xl" px={{ base: 6, md: 10 }} py={{ base: 6, md: 8 }}>
              <Heading fontSize="lg">Need the desktop flow?</Heading>
              <Text opacity={0.8}>
                You can still reach SPOT through our secure web interface. Just log in with your UBC email and a volunteer
                will connect with you.
              </Text>
              <Button alignSelf="flex-start" size="md" bg="white" color="#102040" _hover={{ bg: "blue.100" }}>
                Open Web App
              </Button>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <VStack gap={{ base: 10, md: 14 }}>
          <VStack gap={3} textAlign="center">
            <Heading color="#102040" fontSize={{ base: "2xl", md: "4xl" }}>Choose Your Platform</Heading>
            <Text color="gray.700" fontSize={{ base: "md", md: "lg" }} maxW={{ base: "60ch", md: "70ch" }}>
              We maintain a staggered rollout to guarantee that volunteer coverage matches demand. Follow the steps below to
              get the right version for you.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 6, md: 8 }} w="full">
            {platforms.map(({ name, icon, description, actions, cta }) => (
              <VStack
                key={name}
                align="flex-start"
                bg="#EDF3FF"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                boxShadow="md"
                gap={5}
              >
                <Box
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="white"
                  color="#102040"
                  borderRadius="full"
                  px={4}
                  py={2}
                  fontWeight="600"
                  boxShadow="sm"
                >
                  {icon}
                </Box>
                <Heading fontSize={{ base: "xl", md: "2xl" }} color="#102040">
                  {name}
                </Heading>
                <Text color="gray.700" fontSize={{ base: "md", md: "lg" }}>
                  {description}
                </Text>
                <VStack align="flex-start" gap={3} color="#102040">
                  {actions.map((item) => (
                    <HStack key={item} align="flex-start" gap={3}>
                      <Box color="#4A81E0" pt={1}>
                        <FaCheckCircle size={18} />
                      </Box>
                      <Text fontSize={{ base: "sm", md: "md" }}>{item}</Text>
                    </HStack>
                  ))}
                </VStack>
                <Link
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    size="md"
                    bg="#102040"
                    color="white"
                    _hover={{ bg: "blue.900" }}
                    borderRadius="lg"
                    w="full"
                  >
                    {cta.label}
                  </Button>
                </Link>
              </VStack>
            ))}
          </SimpleGrid>

          <Box bg="white" borderRadius="2xl" boxShadow="lg" p={{ base: 8, md: 12 }} w="full">
            <Heading color="#102040" fontSize={{ base: "2xl", md: "3xl" }}>
              Staying Safe with SPOT
            </Heading>
            <Text mt={3} color="gray.700" fontSize={{ base: "md", md: "lg" }}>
              Keep the app in your favorites, enable notifications, and set your safety plan template before a night out.
              That way you can start a session in seconds and focus on having support when it matters most.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default DownloadApp
