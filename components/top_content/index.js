import React from 'react'
import { Box } from '@chakra-ui/react'
import Title from './title'
import Content from './content'

const TopContent = () => {
   return (
      <Box width='100%' paddingRight='20px' >
         <Title />
         <Content />
      </Box>
   )
}

export default TopContent
