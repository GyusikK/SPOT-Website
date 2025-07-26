import MainScreen from '../components/MainScreen'
import Temp from '../components/Temp'
import { Box } from '@chakra-ui/react'

const HomePageStructure = () => {
  return (
    <Box>
      <MainScreen />
      <Temp />
    </Box>
  )
}

export default HomePageStructure
