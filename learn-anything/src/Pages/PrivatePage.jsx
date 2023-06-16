import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivatePage({children}) {
 
    const {Authstate}=useContext(AuthContext)


    if(!Authstate.isAuth){
       return <Navigate to="/login"  />
    }
    else{
        return children
    }
}

export default PrivatePage