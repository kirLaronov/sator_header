import React from 'react'
import { Box } from '@chakra-ui/react'
import BottomHeaderTitle from './BottomHeaderTitle'
//import BottomHeaderContent from './BottomHeaderContent'


const BottomHeader = () => {
   return (
      <Box maxW='100%' >
         <BottomHeaderTitle />
         {/* <BottomHeaderContent /> */}
      </Box>
   )
}

export default BottomHeader