import { Box } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import HomePageStructure from "./pages/HomePageStructure"
import AboutUs from "./pages/AboutUs"
import VolunteerEvents from "./pages/VolunteerEvents"
import AboutApp from "./pages/AboutApp"
import DownloadApp from "./pages/DownloadApp"
import Mission from "./pages/Mission"
import { Route, Routes } from "react-router-dom"



function App() {

  return (
    <Box bg="#FFFFFF" minH="100vh" w="100%" pt="90px">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageStructure />} />
        <Route path="/volunteer" element={<VolunteerEvents />} />
        <Route path="/about-app" element={<AboutApp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/mission" element={<Mission />} />
      </Routes>
    </Box>
  )
}

export default App
