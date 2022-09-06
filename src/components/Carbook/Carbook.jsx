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

@media (max-width: 600px) {
  width : 100%;
}
#left{
  @media (max-width: 600px) {
    display:none
    
  }

}
#right{
  @media (max-width: 600px) {
    display:none
    
  }
}
`



export const Carbook = () => {
  return (
    <div style={{backgroundColor : "#F5F5F5"}}>
       
        <CardetailsSection>
             <div id='left'><Filter/></div>
             <div className='mid' >
              <MidCar/>
             </div>
             <div id='right'>
              <Ads/>
             </div>
        </CardetailsSection>
        
    </div>
  )
}
