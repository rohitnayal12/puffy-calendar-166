import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

function AuthContextProvider({ children }) {

  const [Authstate, setAuthstate] = useState({
    isAuth: false,
    token: null
  })

  
  const loginUser=()=>{
   return setAuthstate({
      isAuth:true,
      token:localStorage.getItem('token')
    })
  }

  const logoutUser=()=>{
   return setAuthstate({
      isAuth:false,
      token:null
    })
  }




  return (
    <AuthContext.Provider value={{ Authstate, setAuthstate ,loginUser,logoutUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider