import { Box, Container, Heading, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react"
import joonPhoto from "../assets/members/joonphoto.png"
import nathanPhoto from "../assets/members/NathanPhoto.jpg"
import emmaPhoto from "../assets/members/emmaphoto.jpg"
import anshPhoto from "../assets/members/anshphoto.png"
import louisPhoto from "../assets/members/louisphoto.jpg"
// import willPhoto from "../assets/members/willphoto.jpg"
// import aureliaPhoto from "../assets/members/aureliaphoto.jpg"
// import johnPhoto from "../assets/members/johnphoto.jpg"

type Member = {
  id: string
  name: string
  department: string
  faculty: string
  photo?: string
}

const PLACEHOLDER_MEMBERS: Member[] = [
  { id: "1", name: "Joon Lee", department: "Co-Founder", faculty: "Science", photo: joonPhoto },
  { id: "2", name: "Nathan Millward", department: "Co-Founder", faculty: "Science", photo: nathanPhoto },
  { id: "3", name: "Emma Millward", department: "Co-Founder", faculty: "Commerce", photo: emmaPhoto },
  { id: "4", name: "Ansh Sharma", department: "Tech Lead", faculty: "Science", photo: anshPhoto },
  { id: "5", name: "Will Lee", department: "Developer Executive", faculty: "Science" },
  { id: "6", name: "Louis Ryu", department: "Product Management Executive", faculty: "Commerce", photo: louisPhoto },
  { id: "7", name: "Aurelia Dominique", department: "Marketing Executive", faculty: "Commerce" },
  { id: "8", name: "John Lee", department: "Developer Executive", faculty: "Science" },
]

const Card = ({ member }: { member: Member }) => {
  return (
    <VStack bg="#EDF3FF" borderRadius="md" p={6} gap={4} minW="260px">
      <Image 
        src={member.photo || "https://via.placeholder.com/200x200?text=Photo"} 
        alt={`${member.name} photo`} 
        w="full" 
        h="180px" 
        borderRadius="md"
        objectFit="cover"
        objectPosition={member.name === "Emma Millward" || member.name === "Louis Ryu" ? "center 20%" : "center"}
      />
      <VStack gap={1} w="full">
        <Text fontSize="sm" fontWeight="semibold" textAlign="center">{member.name}</Text>
        <Text fontSize="xs" color="gray.700" textAlign="center">{member.department}</Text>
        <Text fontSize="xs" color="gray.700" textAlign="center">{member.faculty}</Text>
      </VStack>
    </VStack>
  )
}

const AboutUs = () => {
  return (
    <Box>
      <Container maxW="container.xl" py={12}>
        <VStack gap={10}>
          <Heading as="h1" size="2xl" color="#122341">Meet the SPOT Team</Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
            {PLACEHOLDER_MEMBERS.map((member) => (
              <Card key={member.id} member={member} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default AboutUs


