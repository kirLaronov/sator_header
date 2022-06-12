import React from 'react'
import Image from 'next/image'
import { Box, Heading } from '@chakra-ui/react'
import logo from '../../assets/img/sator-logo.svg'

const MainLogo = () => {
   return (
      <Box
         display='flex'
         alignItems='center'
         marginLeft='42px'
         width='244px'
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
   )
}
export default MainLogo