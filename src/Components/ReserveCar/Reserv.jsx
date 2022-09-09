import React from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
const CompleateDiv = styled.div`
width : 80%;
margin : auto;
gap : 20px;
display : flex;
.reserveflex{
    height :147px;
    width : 347px;
    border-radius : 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    line-height : 0.6;
    background-color : white;
    margin-top : 33px;
    
    }
    .payment-div{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; 
        background-color : white;
        padding : 5px;
        margin-top : 20px;
        border-radius : 8px;
    }
`
const ReserveDiv = styled.div`
height :220px;
width : 790px;
margin-top:30px;
border-radius : 8px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;

.top-section{
    display : flex;
    justify-content : space-between;
    line-height: 0.6;
   
}
    
}
`
const ReservFlex = styled.div`
display : flex;

h3{
    margin-left : 10px;
   
}
p{
    margin-left : 20px;  
   
}


`
const Recomand = styled.div`
width : 790px;
height : 92px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
border-radius : 8px;
.recomand{
    display : flex;
    justify-content : space-between;
    line-height: 0.4;
    margin-left : 5px;
    margin-right : 5px;
}
`
const Rental = styled.div`
height : 250px;
width : 790px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
border-radius : 8px;
.rental{
    display : flex;
    justify-content : space-between;
   
}
`
const Cleaning = styled.div`
width : 790px;
height : 130px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color : white;
border-radius : 8px;
line-height : 0.9;
.cleaning{
    display : flex;
    justify-content : space-between;
margin-top : -25px;
}
img{
    height : 30px;
    width : 60px
}
p{
    font-size : 14px;
   
}
`
const Button = styled.button`
 background-color : #2A6EC1;
height : 48px;
width : 337px ;
border : none;
border-radius : 5px;
color : white;
cursor: pointer;
font-size : 18px;
margin-left : 5px;

`
export const Reserv = () => {
    const [loding, setLoding] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [carData, setCarData] = React.useState([]);
    const {carId} = useParams()
   
    React.useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        
    console.log(carId)
        setLoding(true)
        fetch(`https://carapi20.herokuapp.com/Car/${carId}`)
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => setError(true))
            .finally(() => setLoding(false))
    }
// console.log(carData)
    return (
        <div>
            <CompleateDiv>
                <div>
                    <ReservFlex>


                        <ReserveDiv>
                            <button style={{ height: "24px", width: "74px", backgroundColor: "#1f7d57", fontSize: "12px", color: "white", borderRadius: "3px", border: "none", marginTop: "15px", marginLeft: "20px" }}>Great Deal</button>

                            <div className='top-section' style={{ padding: "10px" }}>
                                <div>
                                    <h3>Compact</h3>
                                    <p>Ford Figo</p>
                                    <p>5 Passenger</p>
                                    <p>Air Conditioning</p>
                                    <p>Unlimited mileage</p>
                                    <p style={{ color: "#0D5AB9", marginLeft: "5px", textDecoration: "underline", cursor: "pointer" }}>See more</p>
                                </div>
                                <div>
                                    <p>Ford Figo</p>
                                    <p>5 Passenger</p>
                                    <p>Air Conditioning</p>
                                    <p>Unlimited mileage</p>
                                    <p style={{ color: "#0D5AB9", marginLeft: "5px", textDecoration: "underline", cursor: "pointer" }}>See more</p>
                                </div>
                                <div>
                                    <img src="https://mediaim.expedia.com/cars/40/3a591a6a-3820-47f4-ae4e-569400f1ed87.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165" alt="" />
                                </div>
                            </div>

                        </ReserveDiv >


                    </ReservFlex>
                    <Recomand>
                        <div className='recomand' style={{ marginTop: "20px" }}>
                            <div style={{ padding: "5px" }}>
                                <h3>Customer recommendations</h3>
                                <p>73% recommend</p>
                                <p>Best rated for convenient pick-up location and short wait time</p>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <img src="https://mediaim.expedia.com/cars/logos/ZE.png" alt="" />
                                <p style={{ color: "#0D5AB9", marginLeft: "5px", textDecoration: "underline", cursor: "pointer" }}>452 Rating </p>
                            </div>
                        </div>
                    </Recomand>
                    <Rental>
                        <h3 style={{ padding: "8px", marginTop: "20px" }}>Car Rental Location</h3>
                        <div className='rental' style={{ padding: "8px" }}>
                            <div>
                                <h3>Pick Up</h3>
                                <p>Fri, Sep 23, 10:30am</p>
                                <p>DAL Airport
                                    7212 Dallas Love Field Airport, Cedar <br />
                                    Springs Road, Dallas, Texas, USA 75235-2889</p>
                                {/* <p style={{fontSize : "13px"}}>Counter in terminal,  free shuttle to the car located in the airport.</p> */}
                            </div>
                            <div>
                                <h3>Drop-Off</h3>
                                <p>Sat, Sep 24, 10:30am</p>
                                <p>DAL Airport
                                    7212 Dallas Love Field Airport, <br /> Cedar Springs Road, <br /> Dallas, Texas, USA 75235-2889</p>
                            </div>
                        </div>


                    </Rental>
                    <Cleaning>
                        <h3 style={{ padding: "8px" }}>Cleaning and safety practices</h3>
                        <div className='cleaning' style={{ padding: "5px" }}>
                            <div>
                                <p>Masks are required at the pick-up location
                                </p>
                                <p>High-touch surfaces are sanitized at pick-up locations</p>
                            </div>
                            <div>
                                <p>Car interiors and exteriors cleaned with disinfectant <br /> before pick-up</p>
                                <p>
                                    Social distancing measures</p>
                            </div>
                            <div>
                                <img src="https://c.travel-assets.com/static/cars/cleanliness/Sanitize_Hertz_Zd.png" alt="" />

                            </div>
                        </div>
                    </Cleaning>
                </div>
                <div className='side-div'>
                    <div >
                        <div className='reserveflex'>
                            <h3 style={{ padding: "15px" }}>$58
                            </h3>
                            <p style={{ marginTop: "-10px", marginLeft: "10px" }}>Per day</p>
                            <p style={{ marginLeft: "10px" }}>Non-refundable

                            </p>
                            <p style={{ marginLeft: "10px" }}>No changes or cancellations</p>
                            <p style={{ marginLeft: "10px" }}>Pay now and save</p>
                        </div>
                        <div className='payment-div'>
                            <h3>Price Details</h3>
                            <h3>Pay Now</h3>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p>Car rental fee x 1 day</p>
                                <p>$58</p>
                            </div>
                            <hr />
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h3>Total</h3>
                                <h3>$58</h3>
                            </div>
                            <Button  >Reserve</Button>
                        </div>

                        <div className='great-deal'>

                        </div>
                    </div>
                </div>

            </CompleateDiv>
        </div>
    )
}
