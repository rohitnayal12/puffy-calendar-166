import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  useToast
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {

  const toast = useToast()
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    ethnicity: "",
    occupation: "",
    familyStatus: "",
    Education: "",
    Behaviour: "",
    Blog: "",
    NeedsandGoal: "",
    UserStory: ""
  })
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://puzzled-fawn-sweatsuit.cyclic.app/api/signup', data)

      toast({
        title: "Registration Successes",
        description: `Please Login to proceed`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      navigate('/login')


    } catch (error) {
      console.log(error)
      toast({
        title: "Something Really went  wrong",
        description: `Please Try again`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      navigate('/register')

    }
  }

  const handlechange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <form >
        <FormControl>

          <FormLabel>Name</FormLabel>
          <Input type='text' name='name' value={data.name} onChange={handlechange} />
          <FormLabel>Email</FormLabel>
          <Input type='email' name='email' value={data.email} onChange={handlechange} />
          <FormLabel>Password</FormLabel>
          <Input type='password' name="password" value={data.password} onChange={handlechange} />
          <FormLabel>Age</FormLabel>
          <Input type='number' name="age" value={data.age} onChange={handlechange} />
          <FormLabel>Ethinicity</FormLabel>
          <Input type='text' name="ethnicity" value={data.ethnicity} onChange={handlechange} />
          <FormLabel>Occupation</FormLabel>
          <Input type='text' name="occupation" value={data.occupation} onChange={handlechange} />
          <FormLabel>Family Status</FormLabel>
          <Input type='text' name="familyStatus" value={data.familyStatus} onChange={handlechange} />
          <FormLabel>Education</FormLabel>
          <Input type='text' name="Education" value={data.Education} onChange={handlechange} />
          <FormLabel>Behaviour</FormLabel>
          <Input type='text' name="Behaviour" value={data.Behaviour} onChange={handlechange} />
          <FormLabel>Blog</FormLabel>
          <Input type='text' name="Blog" value={data.Blog} onChange={handlechange} />
          <FormLabel>NeedsandGoal</FormLabel>
          <Input type='text' name="NeedsandGoal" value={data.NeedsandGoal} onChange={handlechange} />
          <FormLabel>UseStory</FormLabel>
          <Input type='text' name="UserStory" value={data.UserStory} onChange={handlechange} />
          <Button onClick={handleSubmit}>Submit</Button>


        </FormControl>
      </form>

    </div>
  )
}

export default Register