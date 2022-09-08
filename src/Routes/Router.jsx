import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Carbook } from '../components/Carbook/Carbook'
import {Reservesection} from "../Pages/Reservesection"
export const Router = () => {
  return (
    <div>
         <Routes>
          <Route path='/carlist' element={<Carbook/>}></Route>
          <Route path='/carReserve' element={<Reservesection/>}></Route>
          </Routes>   
    </div>
  )
}
