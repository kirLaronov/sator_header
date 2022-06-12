import React from 'react'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

const MainButton = ({ href, text, ...props }) => {
   const [isLessThan1280, isLessThan992, isLessThan767, isLessThan480] = useMediaQuery(
      [
         '(max-width: 1280px)',
         '(max-width: 992px)',
         '(max-width: 767px)',
         '(max-width: 480px)'
      ]
   )

   return (
      < Box >
         <Link
            href={href}
         >
            <Text
               display='flex'
               justifyContent='center'
               alignItems='center'
               fontFamily='K2D'
               fontSize='20px'
               lineHeight='26px'
               fontWeight='600'
               cursor='pointer'
               border='2px solid blue'
               width='361px'
               borderRadius='8px'
               height='66px'
               backgroundColor={['red', 'blue', 'green', 'orange']}
               {...props}
            >
               {text}
            </Text>
         </Link>
      </ Box>
   )
}


export default MainButton