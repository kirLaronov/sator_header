import React from 'react'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'

const Button = ({ href, text, ...props }) => (
      <Box>
         <Link
            href={href}
         >
            <Text
               fontFamily='K2D'
               fontSize='20px'
               lineHeight='26px'
               fontWeight='600'
               cursor='pointer'
               border='2px solid blue'
               width='361px'
               borderRadius='8px'
               widht='361px'
               height='66px'
               textAlign='center'
               backgroundColor='white'
               {...props}
            >
               {text}
            </Text>
         </Link>
      </Box>
   )

export default Button