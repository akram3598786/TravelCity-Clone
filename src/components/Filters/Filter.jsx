import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import styled from '@emotion/styled'

const Wraper = styled.div`

display :flex;
FormControlLabel{
    line-height: 1;
    margin-right: 100px;
    color : #505c66;
    
}
.fromgrp{
    color : #505c66;
    font-size : 2px
}
.p-tag{
    line-height: 1.6;
    margin-top: 31px;
    margin-left: 80px;
    color : #505c66;
    
}
.h4-tag{
    margin-left: 80px;
}

`
const Wraper1 = styled.div`
    display : flex;
    justify-content: space-between;
    width : 18%;
    p{
        color : #505c66
    }
    `

export const Filter = () => {


    return (
        <div className='filter-div'>


            <Wraper>
                <div>
                    <h4>Car Type</h4>
                    <FormGroup className='fromgrp'>
                        <FormControlLabel control={<Checkbox />} label="Economy (12)" />
                        <FormControlLabel control={<Checkbox />} label="Compact (12)" />
                        <FormControlLabel control={<Checkbox />} label="Midsize (13)" />
                        <FormControlLabel control={<Checkbox />} label="Standard (12)" />
                        <FormControlLabel control={<Checkbox />} label="Full-size (18)" />
                        <FormControlLabel control={<Checkbox />} label="
Premium (22)" />
                        <FormControlLabel control={<Checkbox />} label="Luxury (10)" />
                        <FormControlLabel control={<Checkbox />} label="Convertible (2)" />
                        <FormControlLabel control={<Checkbox />} label="
Minivan (10)" />
                        <FormControlLabel control={<Checkbox />} label="SUV (50)" />
                        <FormControlLabel control={<Checkbox />} label="Pickup (16)" />
                        <FormControlLabel control={<Checkbox />} label="Sports Car (6" />
                        <FormControlLabel control={<Checkbox />} label="Other (24)" />

                    </FormGroup>
                </div>

                <div >
                    <h4 className='h4-tag'>From</h4>
                    <div className='p-tag'>

                        <p>$59</p>
                        <p>$60</p>
                        <p>$62</p>
                        <p>$61</p>
                        <p>$61</p>
                        <p>$115</p>
                        <p>$143</p>
                        <p>$122</p>
                        <p>$125</p>
                        <p>$94</p>
                        <p>$125</p>
                        <p>$88</p>
                        <p>$104</p>
                    </div>

                </div>
            </Wraper>

            {/* <Wraper1>


                <FormGroup>
                    <h4>Capacity</h4>
                    <FormControlLabel control={<Checkbox />} label="2-5 passengers (30)" />
                    <FormControlLabel control={<Checkbox />} label="
6 or more passengers (6)" />
                </FormGroup>

                <div>
                    <div className='p-tag'>
                        <h4>From</h4>
                        <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$59</p>
                        <p>$60</p>
                    </div>
                </div>
            </Wraper1>

            <Wraper1>


                <FormGroup>
                    <h4>Cancellation policy</h4>
                    <FormControlLabel control={<Checkbox />} label="Free cancellation (139)" />

                </FormGroup>

                <div>
                    <div className='p-tag'>
                        <h4>From</h4>
                        <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$59</p>

                    </div>
                </div>
            </Wraper1>

            <Wraper1>


                <FormGroup>
                    <h4>Save time during pick-up</h4>
                    <FormControlLabel control={<Checkbox />} label="Online check-in (78)" />

                </FormGroup>

                <div>
                    <div className='p-tag'>
                        <h4 style={{ marginLeft: "0px" }}>From</h4>
                        <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$59</p>

                    </div>
                </div>
            </Wraper1>

            <Wraper1>


                <FormGroup>
                    <h4>Customer recommendation</h4>
                    <FormControlLabel control={<Checkbox />} label="70% & up (31)" />
                    <FormControlLabel control={<Checkbox />} label="
40% & up (199)" />
                </FormGroup>

                <div>
                    <div className='p-tag'>
                        <h4>From</h4>
                        <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$78</p>
                        <p>$59</p>
                    </div>
                </div>
            </Wraper1>

            <Wraper1>


                <FormGroup>
                    <h4>Payment option</h4>
                    <FormControlLabel control={<Checkbox />} label="Pay now (60)" />
                    <FormControlLabel control={<Checkbox />} label="
Pay later (139)" />
                </FormGroup>

                <div>
                    <div className='p-tag'>
                        <h4>From</h4>
                        <p style={{ marginTop: "30px", lineHeight: "1.6" }}>$62</p>
                        <p>$59</p>
                    </div>
                </div>
            </Wraper1> */}
        </div>
    )
}
