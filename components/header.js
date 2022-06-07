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
         maxW='100%'
         height='102px'
         border='1px solid red'
      >
         <MainLogo />
         <MainMenu />

         <Box
            display='flex'
            px='74px'
            marginRight='42px'
            border='1px solid red'
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