import React from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/header'
import TopContent from '../components/top_content'

export default function Home() {
   return (
      <Box >
         <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <Box
            maxWidth={['480px', '767px', '992px', '1440px']}
            margin='0 auto'
            background='linear-gradient(136.71deg, rgba(119, 162, 227, 0.14) 13.48%, rgba(186, 158, 244, 0.14) 85.14%), #FFFFFF'
         >
            <Header />
            <TopContent />
         </Box>
      </Box>
   )
}
