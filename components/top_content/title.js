import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import TitleSator from "../shared_components/title_sator"

const Title = () => {
   const [isLessThan1280, isLessThan767, isLessThan480] = useMediaQuery(
      [
         '(max-width: 1280px)',
         '(max-width: 767px)',
         '(max-width: 480px)'
      ]
   )

   const subTitleText = (
      isLessThan767 ? 'Comprehensive web3 platform expanding linear content to metaverse'
         : 'Web3 entertainment network'
   )

   return (
      <Box>
         <Box
            width='980px'
            margin='0 auto'
         >
            <Box
               marginBottom='84px'
               paddingRight={['26px', '54px', '0', '0']}
               paddingLeft={['26px', '54px', '0', '0']}>
               <TitleSator />
               <Text
                  fontFamily='K2D'
                  fontSize={['18px', '36px', '48px', '48px']}
                  fontWeight='700'
                  lineHeight='62px'
                  color='#000000'
                  textAlign='center'
               >
                  {subTitleText}
               </Text>
            </Box>
         </Box>
      </Box>
   )
}

export default Title