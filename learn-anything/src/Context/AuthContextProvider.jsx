import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

function AuthContextProvider({ children }) {

  const [Authstate, setAuthstate] = useState({
    isAuth: false,
    token: null
  })


  const loginUser = (token) => {
    return setAuthstate({
      ...Authstate,
      isAuth: true,
      token
    })
  }

  const logoutUser = () => {
    
    return setAuthstate({
      ...Authstate,
      isAuth: false,
      token: null,
    })
  }

  return (
    <AuthContext.Provider value={{ authState: Authstate, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider