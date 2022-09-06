import styled from '@emotion/styled'
import React from 'react'
import { Filter } from '../Filters/Filter'
import { Ads } from './Ads'
import { MidCar } from './MidCar'
const CardetailsSection = styled.div`
display : flex;
width : 80%;
margin : auto;
justify-content : space-between;
`
export const Carbook = () => {
  return (
    <div>
       
        <CardetailsSection>
             <div id='left'><Filter/></div>
             <div id='mid'>
              <MidCar/>
             </div>
             <div id='right'>
              <Ads/>
             </div>
        </CardetailsSection>
        
    </div>
  )
}
