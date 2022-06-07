import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Content from './content'
import TitleSator from "../shared_components/title_sator";

const Title = () => {
   return (
      <Box>
         <Box
            w='976px'
            margin='0 auto'
         >
            <Box marginBottom='76px'>
               <TitleSator/>
               <Text
                  fontFamily='K2D'
                  fontSize='48px'
                  fontWeight='700'
                  lineHeight='62px'
                  color='#000000'
                  textAlign='center'
               >
                  Web3 entertainment network
               </Text>
            </Box>
         </Box>

         <Content />
      </Box>
   )
}

export default Title