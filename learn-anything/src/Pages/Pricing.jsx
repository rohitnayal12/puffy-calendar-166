import { Heading } from '@chakra-ui/react'
import React from 'react'
import PriceCard from '../Components/PriceCard'
import Happytohelp from '../Components/Happytohelp'
import Footer from '../Components/Footer'

function Pricing() {
  return (
    <div>
        <Heading style={{color:"blue", size:"sm"}} >Simple and straight Farward Pricing</Heading>
        <PriceCard   />
        <Happytohelp  />
        <Footer  />
    </div>
  )
}

export default Pricing