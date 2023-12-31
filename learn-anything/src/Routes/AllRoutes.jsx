import React from 'react'

import Home from '../Pages/Home';
import About from '../Pages/About';
import Pricing from '../Pages/Pricing';
import Login from '../Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Register';
import PrivatePage from '../Pages/PrivatePage';

function AllRoutes() {
  return (
  
        <Routes>
            <Route path="/" element={<Home  />}/>
            <Route path="/about" element={
            <PrivatePage>
              <About   />
            </PrivatePage>}/>
            <Route path="/price" element={<Pricing   />}/>
            <Route path="/login" element={<Login   />}/>
            <Route path="/register" element={<Register   />}/>
        </Routes>
  
  )
}

export default AllRoutes