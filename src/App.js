import React from 'react';
// import { Carbook } from './components/Carbook/Carbook';
// import { Routes, Route } from "react-router-dom";
// import {Reservesection} from "./Pages/Reservesection"
import { Router } from './Routes/Router';

function App() {
  return (
    <div className="App">
      <Router/>
   {/* <Carbook/>
       <Routes>
          <Route path='/carlist' element={<Carbook/>}></Route>
          <Route path='/carReserve' element={<Reservesection/>}></Route>
          </Routes>   */}

    </div>
  );
}

export default App;
