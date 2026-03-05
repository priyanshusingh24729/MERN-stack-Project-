// import { useState } from 'react'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./navbar";
import Explore from "./Explore";
import CreateGig from "./CreateGig";
import Order from "./Order";
function App() {
  return (
    <div>
      
  
      <BrowserRouter>
       <Navbar />
      
      <Routes>
        <Route path ='/register' element={<Signup/>}></Route>
        <Route path ='/login' element={<Login/>}></Route>
        <Route path ='/explore' element={<Explore/>}></Route>
          <Route path ='/' element={<Home/>}></Route>
        
<Route path="/CreateGig" element={<CreateGig />} />  

<Route path="/order" element={<Order />} />

      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
