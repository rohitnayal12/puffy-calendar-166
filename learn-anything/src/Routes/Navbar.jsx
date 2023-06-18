import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import image from "../Components/image/REACT_PROJECT_LOGO.png"


function Navbar() {
  const navigate = useNavigate()
  const { authState, logoutUser } = useContext(AuthContext)

  const logout = () => {
    console.log("logout")
    logoutUser()
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "skyblue" }}>
      <Link to="/"> <img src={image} alt="" width={100} /></Link>
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/price">Pricing</Link>
      {authState.isAuth ? <Button onClick={logout} >Logout</Button> : <Button><Link to="/login">Login</Link></Button>}
      {authState.isAuth ? <></> :  <Button><Link to="/register">Register</Link></Button>}
    </div>
  )
}

export default Navbar