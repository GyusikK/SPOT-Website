import { Box } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import HomePageStructure from "./pages/HomePageStructure"
import { Route, Routes } from "react-router-dom"



function App() {

  return (
    <Box bg="#D9D9D9" minH="100vh" w="100%" pt="90px">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageStructure />} />
      </Routes>
    </Box>
  )
}

export default App
