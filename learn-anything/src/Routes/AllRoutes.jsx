import React from 'react'

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Register';

function AllRoutes() {
  return (
  
        <Routes>
            <Route path="/" element={<Home  />}/>
            <Route path="/about" element={<About   />}/>
            <Route path="/contact" element={<Contact   />}/>
            <Route path="/login" element={<Login   />}/>
            <Route path="/register" element={<Register   />}/>
        </Routes>
  
  )
}

export default AllRoutes