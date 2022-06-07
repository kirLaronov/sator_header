import React from 'react'
import Image from 'next/image'
import { Box, Heading, Text } from '@chakra-ui/react'
import rhombusSmall from '../../../assets/img/rhombus-small.svg'
import rhombusBig from '../../../assets/img/rhombus-big.svg'
import BottomHeaderContent from './BottomHeaderContent'

const BottomHeaderTitle = () => {
   return (
      <Box>
         <Box
            w='976px'
            margin='0 auto'
         >
            <Box marginBottom='76px'>
               <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  marginTop='89px'
                  position='relative'
               >
                  <Heading
                     fontFamily='Inter'
                     fontSize='128px'
                     fontWeight='400'
                     lineHeight='155px'
                     background='linear-gradient(100.96deg, #FF36EB -41.47%, #1BA2EE 104.91%)'
                     backgroundClip='text'
                     textAlign='center'
                  >
                     sator
                  </Heading>
                  <Box position='absolute' left='720px' top='75px'>
                     <Image
                        src={rhombusSmall}
                        alt='Rhombus-Small'
                     />
                  </Box>
                  <Box position='absolute' left='750px' top='5px'>
                     <Image
                        src={rhombusBig}
                        alt='Rhombus-Big'
                     />
                  </Box>
               </Box>
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

         <BottomHeaderContent />
      </Box>
   )
}

export default BottomHeaderTitle