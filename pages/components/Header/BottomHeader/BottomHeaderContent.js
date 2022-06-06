import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import ellipse from '../../../assets/img/ellipse.png'
import youtube from '../../../assets/img/youtube.svg'
import discord from '../../../assets/img/discord.svg'
import twitter from '../../../assets/img/twitter.svg'
import instagram from '../../../assets/img/instagram.svg'
import tiktok from '../../../assets/img/tiktok.svg'
import subtract from '../../../assets/img/subtract.svg'

const BottomHeaderContent = () => {
   return (
      <Box maxW='100%' background={`url(${ellipse.src}) no-repeat top`}>
         <Box
            w='976px'
            margin='0 auto 35px'
            display='flex'
            justifyContent='center'
         >
            <Link
               href='download-sator-app'
            >
               <Text
                  fontFamily='K2D'
                  fontSize='20px'
                  lineHeight='26px'
                  fontWeight='600'
                  cursor='pointer'
                  border='2px solid red'
                  width='361px'
                  borderRadius='8px'
                  widht='361px'
                  height='66px'
                  textAlign='center'
                  paddingTop='19px'
                  marginRight='12px'
                  marginTop='-25px'
                  backgroundColor='white'
               >
                  Download Sator App
               </Text>
            </Link>
            <Link
               href='enter-the-nft-marketplace'
            >
               <Text
                  fontFamily='K2D'
                  fontSize='20px'
                  lineHeight='26px'
                  fontWeight='600'
                  cursor='pointer'
                  border='2px solid red'
                  // border='3px solid'
                  // borderImageSource='linear-gradient(90.29deg, #5E5AFF 0%, #AD28FF 22.92%, #28E5FF 51.56%, #FF8F28 75.52%, #5E5AFF 100%)'
                  // borderImageSlice='1'
                  width='361px'
                  borderRadius='8px'
                  widht='361px'
                  height='66px'
                  textAlign='center'
                  paddingTop='19px'
                  marginLeft='12px'
                  marginTop='-25px'
                  backgroundColor='white'
               >
                  Enter the NFT Marketplace
               </Text>
            </Link>
         </Box>
         <Box
            display='flex'
            justifyContent='space-between'
            maxW='277px'
            margin='0 auto 35px'
         >
            <Image src={youtube} />
            <Image src={discord} />
            <Image src={tiktok} />
            <Image src={twitter} />
            <Image src={instagram} />
            <Image src={subtract} />
         </Box>
         <Box width='796px' margin='0 auto' paddingBottom='40px'>
            <Text
               // fontFamily='Avenir Next'
               fontStyle='normal'
               fontWeight='400'
               fontSize='20px'
               lineHeight='27px'
               textAlign='center'
               color='#000000'
            >
               The Sator platform aligns content ecosystem participants in an open economy that increases value creation and distribution
            </Text>
         </Box>
      </Box>
   )
}

export default BottomHeaderContent