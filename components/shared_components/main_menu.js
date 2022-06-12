import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'

const MainMenu = () => {
   return (
      <Box
         display='flex'
         alignItems='center'
         color='#4D4D4D'
         fontFamily='K2D'
         fontWeight='700'
         fontSize='18px'
         lineHeight='23px'
         maxWidth='491px'
         letterSpacing='0.09px'
      >
         <Box>
            <Link href='/about'>About</Link>
         </Box>
         <Box marginLeft='34px'>
            <Link href='/metaverse'>Metaverse</Link>
         </Box>
         <Box marginLeft='34px'>
            <Link href='/ambassators'>AmbasSators </Link>
         </Box>
         <Box marginLeft='34px'>
            <Link href='/news'>News</Link>
         </Box>
         <Box marginLeft='34px'>
            <Link href='/careers'>Careers</Link>
         </Box>
      </Box>
   )
}

export default MainMenu