import { Box } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import HomePageStructure from "./pages/HomePageStructure"
import AboutUs from "./pages/AboutUs"
import { Route, Routes } from "react-router-dom"
import MissionStatement from "./components/MissionStatement"



function App() {

  return (
    <Box bg="#FFFFFF" minH="100vh" w="100%" pt="90px">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageStructure />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mission" element={<MissionStatement />} />
      </Routes>
    </Box>
  )
}

export default App
