import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
 
  } from '@chakra-ui/react'

function Login() {
  return (
    <div style={{width:"50%",margin:"auto"}}> 
        
 <FormControl>
    <form >
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <Button>Login</Button>
  </form>
  
</FormControl>

    </div>
  )
}

export default Login