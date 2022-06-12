import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import MainMenu from './shared_components/main_menu'
import MainLogo from './shared_components/main_logo'

const Header = () => {
   return (
      <Box
         display='flex'
         justifyContent='space-between'
         maxW='1440px'
         margin='0 auto'
         height='102px'
         border='1px solid blue'
         background='linear-gradient(136.71deg, rgba(119, 162, 227, 0.14) 13.48%, rgba(186, 158, 244, 0.14) 85.14%), #FFFFFF'
      >
         <MainLogo />
         <MainMenu />

         <Box
            display='flex'
            padding='0 72px'
            marginRight='42px'
            border='1px solid blue'
            background='linear-gradient(100.96deg, #FF36EB -41.47%, #1BA2EE 104.91%)'
            backgroundClip='text'
            justifyContent='center'
            alignItems='center'
            fontFamily='Inter'
            fontSize='20px'
            lineHeight='24px'
            fontWeight='600'
         >
            <Link href='/download-sator-app'>Download</Link>
         </Box>
      </Box >
   )
}

export default Header