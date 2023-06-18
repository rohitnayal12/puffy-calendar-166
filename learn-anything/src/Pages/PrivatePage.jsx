import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivatePage({ children }) {

    const { authState, loginUser, logoutUser } = useContext(AuthContext)

    console.log(authState);


    if (!authState.isAuth) {
        return <Navigate to="/login" />
    }
    else {
        return children
    }
}

export default PrivatePage