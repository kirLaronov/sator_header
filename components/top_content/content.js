import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import SocialIcons from '../shared_components/social_icons'
import ellipse from '../../assets/img/ellipse.png'

const Content = () => {
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
         <SocialIcons />
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

export default Content