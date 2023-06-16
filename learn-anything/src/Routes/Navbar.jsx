import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div style={{display:"flex" ,justifyContent:"space-around", backgroundColor:"skyblue"}}> 
       <img src="" alt="" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/price">Pricing</Link>
        <Button><Link to="/login">Login</Link></Button>
        <Button><Link to="/register">Register</Link></Button>
        
    </div>
  )
}

export default Navbar