import React from 'react'
import { Box } from '@chakra-ui/react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader/BottomHeaderTitle'

const Header = () => {
   return (
      <Box
         background='linear-gradient(136.71deg, rgba(119, 162, 227, 0.14) 13.48%, rgba(186, 158, 244, 0.14) 85.14%), #FFFFFF'
      >
         <TopHeader />
         <BottomHeader />
      </Box>
   )
}

export default Header