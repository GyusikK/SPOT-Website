import MainScreen from '../components/MainScreen'
import DrugInfo from '../components/DrugInfo'
import { Box } from '@chakra-ui/react'

const HomePageStructure = () => {
  return (
    <Box>
      <MainScreen />
      <DrugInfo />
    </Box>
  )
}

export default HomePageStructure
