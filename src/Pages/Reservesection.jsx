import React from 'react'
import { Grid1 } from '../components/CarReserve/Grid1'
import Grid2 from '../components/CarReserve/Grid2'
import TopSection from '../components/CarReserve/topsection'
import { ChakraProvider } from '@chakra-ui/react';
export const Reservesection = () => {
  return (
 <ChakraProvider>
    <div>
        <TopSection/>
        <Grid1/>
        <Grid2/>
    </div>
    </ChakraProvider>
  )
}
