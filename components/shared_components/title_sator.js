import React from 'react'
import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'
import rhombusSmall from '../../assets/img/rhombus-small.svg'
import rhombusBig from '../../assets/img/rhombus-big.svg'

const TitleSator = () => {
   return (
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
   )
}

export default TitleSator