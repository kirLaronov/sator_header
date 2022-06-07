import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Button from '../shared_components/button'
import SocialIcons from '../shared_components/social_icons'
import ellipse from '../../assets/img/ellipse.png'

const Content = () => (
      <Box maxW='100%' background={`url(${ellipse.src}) no-repeat top`}>
         <Box
            w='976px'
            margin='0 auto 35px'
            display='flex'
            justifyContent='center'
         >
            <Button
               href='download-sator-app'
               text='Download Sator App'
               paddingTop='19px'
               marginTop='-25px'
               marginRight='12px'
            />
            <Button
               href='enter-the-nft-marketplace'
               text='Enter the NFT Marketplace'
               paddingTop='19px'
               marginTop='-25px'
               marginLeft='12px'
            />
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

export default Content