import { Box } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import { Heading } from "@chakra-ui/react"


function App() {

  return (
    <Box bg="#D9D9D9" minH="100vh" w="100vw" >
      <NavBar />
      <Heading>
        SPOT APP
      </Heading>
    </Box>
  )
}

export default App
