import MainScreen from '../components/MainScreen'
import SpotInfo from '../components/SpotInfo'
import { Box } from '@chakra-ui/react'
import SmallStatement from '../components/SmallStatement'
import DrugInfo from '../components/DrugInfo'

const HomePageStructure = () => {
  return (
    <Box>
      <MainScreen />
      <SpotInfo />
      <SmallStatement />
      <DrugInfo />
    </Box>
  )
}

export default HomePageStructure
