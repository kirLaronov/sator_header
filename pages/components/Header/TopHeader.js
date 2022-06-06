import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'
import logo from '../../assets/img/sator-logo.svg'

const TopHeader = () => {
   return (
      <Box
         display='flex'
         justifyContent='space-between'
         maxW='100%'
         height='102px'
         border='1px solid red'
         // borderImageSource='linear-gradient(90.29deg, #5E5AFF 0%, #AD28FF 22.92%, #28E5FF 51.56%, #FF8F28 75.52%, #5E5AFF 100%)'
         // borderImageSlice='1'
      >
         <Box
            display='flex'
            alignItems='center'
            marginLeft='42px'
            w='244px'
         >
            <Image src={logo} />
            <Heading
               fontFamily='Inter'
               fontStyle='normal'
               fontWeight='400'
               fontSize='32px'
               lineHeight='39px'
               background='linear-gradient(100.96deg, #FF36EB -41.47%, #1BA2EE 104.91%)'
               backgroundClip='text'
               marginLeft='20px'
            >
               Sator
            </Heading>
         </Box>

         <Box
            display='flex'
            alignItems='center'
            color='#4D4D4D'
            fontFamily='K2D'
            fontWeight='700'
            fontSize='18px'
            lineHeight='23px'
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

export default TopHeader