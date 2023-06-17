import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  useToast

} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function Login() {
  const toast = useToast()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // console.log(email,password)?
  const handleSubmit = async () => {

    const data = { email, password }
    console.log(data)



    try {
      const res = await axios.post('https://puzzled-fawn-sweatsuit.cyclic.app/api/login', data)
      console.log(res)
      if (res) {
        if (res.status == 200) {
          toast({
            title: "Login Successes",
            description: `Welcome to Jungle`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          localStorage.setItem("token", res.data.data.token)
          navigate('/')
        } else if (res.status == 400) {
          toast({
            title: "Wrong Password",
            description: `Sahi  password dal bhai`,
            status: 'error',
            duration: 4000,
            isClosable: true,
          })
          navigate('/login')
        } else if (res.status == 401) {
          toast({
            title: "User  Not Foundd",
            description: `Please Register  first`,
            status: 'warning',
            duration: 4000,
            isClosable: true,
          })
          navigate('/register')
        } else {
          toast({
            title: "Something Really went  wrong",
            description: `Please Try again`,
            status: 'warning',
            duration: 4000,
            isClosable: true,
          })
          navigate('/login')
        }
      } else {
        toast({
          title: "Something Really went  wrong",
          description: `Please Try again`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        navigate('/login')
      }

    } catch (error) {
      console.log(error)
      toast({
        title: "Something Really went  wrong",
        description: `Please Try again`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      navigate('/login')
    }
   

  }






  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <form  >
        <FormControl>

          <FormLabel>Email address</FormLabel>
          <Input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <FormLabel>Password</FormLabel>
          <Input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <Button onClick={handleSubmit} >Login</Button>


        </FormControl>
      </form>

    </div>
  )
}

export default Login