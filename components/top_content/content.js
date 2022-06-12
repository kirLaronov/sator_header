import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import MainButton from '../shared_components/main_button'
import SocialIcons from '../shared_components/social_icons'
import ellipse from '../../assets/img/ellipse.png'

const Content = () => (
   <Box width='100%' background={`url(${ellipse.src}) no-repeat top`}>
      <Box
         width='745px'
         margin='0 auto 30px'
         display='flex'
         // flexDirection={['column', 'column', 'row', 'row']}
         justifyContent='space-between'
      >
         <MainButton
            href='download-sator-app'
            text='Download Sator App'
            marginTop='-25px'
         />
         <MainButton
            href='enter-the-nft-marketplace'
            text='Enter The NFT Marketplace'
            marginTop='-25px'
         />
      </Box>
      <SocialIcons margin='0 auto 30px' />
      <Box width='796px' margin='0 auto' paddingBottom='40px'>
         <Text
            // fontFamily='Avenir Next'
            fontStyle='normal'
            fontWeight='400'
            fontSize='20px'
            lineHeight='27px'
            textAlign='center'
            color='#000000'
            letterSpacing='0.24px'
         >
            The Sator platform aligns content ecosystem participants in an open economy that increases value creation and distribution
         </Text>
      </Box>
   </Box>
)

export default Content