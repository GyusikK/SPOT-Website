import MainScreen from '../components/MainScreen'
import SpotInfo from '../components/SpotInfo'
import { Box } from '@chakra-ui/react'
import SmallStatement from '../components/SmallStatement'

const HomePageStructure = () => {
  return (
    <Box>
      <MainScreen />
      <SpotInfo />
      <SmallStatement />
    </Box>
  )
}

export default HomePageStructure
