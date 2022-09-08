import styled from '@emotion/styled'
import React from 'react'
import { Filter } from '../Filters/CarFilter'
import { Ads } from './Ads'
import { MidCar } from './MidCar';
import BarcodeSection from "../../Resources/Barcodesection.PNG";
import "./Carbook.scss";


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
  const [carData, setCarData] = React.useState([])
  console.log(carData)
  return (

    <div style={{ backgroundColor: "#F5F5F5" }}>

      <CardetailsSection>
        <div id='left'><Filter /></div>
        <div className='mid' >
          <MidCar />
        </div>
        <div id='right'>
          <Ads />
        </div>
      </CardetailsSection>

      <div className="BarcodeSection">
        <p>The makes/models shown are examples only. We are unable to guarantee a specific make/model. Actual makes/models are subject to availability and vary by rental car company</p>
        <img src={BarcodeSection} alt="" />
      </div>
    </div>
  )
}
