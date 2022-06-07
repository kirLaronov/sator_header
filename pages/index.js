import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../components/header'
import TopContent from '../components/top_content'

export default function Home() {
   return (
      <Box
         maxWidth='1440px'
         margin='0 auto'
         background='linear-gradient(136.71deg, rgba(119, 162, 227, 0.14) 13.48%, rgba(186, 158, 244, 0.14) 85.14%), #FFFFFF'
         >
         <Header />
         <TopContent />
      </Box>
   )
}
