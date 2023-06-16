import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
 
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {
  return (
    <div style={{width:"50%",margin:"auto"}}> 
     <form >   
    <FormControl>
       
     <FormLabel>Name</FormLabel>
     <Input type='text' />
     <FormLabel>Email</FormLabel>
     <Input type='email' />
     <FormLabel>Password</FormLabel>
     <Input type='password' />
     <FormLabel>Age</FormLabel>
     <Input type='number' />
     <FormLabel>Ethinicity</FormLabel>
     <Input type='text' />
     <FormLabel>Occupation</FormLabel>
     <Input type='text' />
     <FormLabel>Family Status</FormLabel>
     <Input type='text' />
     <FormLabel>Education</FormLabel>
     <Input type='text' />
     <FormLabel>Behaviour</FormLabel>
     <Input type='text' />
     <FormLabel>Blog</FormLabel>
     <Input type='text' />
     <FormLabel>NeedsandGoal</FormLabel>
     <Input type='text' />
     <FormLabel>UseStory</FormLabel>
     <Input type='text' />
     <Button>Submit</Button>
     
     
   </FormControl>
   </form>
   
       </div>
  )
}

export default Register