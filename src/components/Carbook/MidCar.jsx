import React from 'react'
import styled from '@emotion/styled'

const CarDiv = styled.div`
 display : flex;
 width : 761px;
 height : 242px;
 justify-content : space-between;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
 border-radius : 12px;

.greatdeal{
    line-height: 0.6;
    color : #333333;
}
.non-refund{
    line-height: 0.6;
    margin-top : 50px;
    margin-left : -50px
}
.price{
    line-height: 0.5;
    margin-right: 20px
}
 `
const Button = styled.button`
 background-color : #2A6EC1;
height : 36px;
width : 91px ;
border : none;
border-radius : 5px;
color : white;
 `
export const MidCar = () => {
    const [loding, setLoding] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [carData, setCarData] = React.useState([]);
    const [totalItem, setTotalItem] = React.useState(0)



    React.useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        setLoding(true)
        fetch(`https://carapi20.herokuapp.com/Car`)
            .then((res) => res.json())
            .then((res) => setCarData(res))
            .catch((err) => setError(true))
            .finally(() => setLoding(false))
    }




    return (

        <div>
            {
                loding ? <div>loding....</div> : error ? <div>somthing Went wrong</div> : carData.map((data) => {
                    return <CarDiv>
                        <div>
                            <img src={data.url} alt="" />
                        </div>
                        <div className='greatdeal'>
                            <p style={{ height: "24px", width: "74px", backgroundColor: "#1f7d57", fontSize: "12px", color: "white", borderRadius: "3px", display: "flex", alignItems: 'center' }}>Great Deal</p>
                            <h3>{data.car_type}</h3>
                            <p>Manager's Special 2 or 4 door or <br /><br /> similar</p>
                            <p>4 Automatic</p>
                            <p>Unlimited mileage</p>
                            <p>Enhanced cleaning</p>
                            <p>Counter in terminal, shuttle to car</p>
                        </div>
                        <div className='non-refund'>
                            <p style={{ color: '#505c66' }}>Non-refundable</p>
                            <p style={{ color: '#1f7d57' }}>Pay now and save</p>
                            <p style={{ color: '#505c66', fontSize: "14px" }}>73% recommend</p>
                        </div>
                        <div className='price'>
                            <p>80$</p>
                            <p>per day </p>
                            <p> $80total</p>
                            <Button>Reserve</Button>
                        </div>
                    </CarDiv>
                })

            }
        </div>
    )
}
