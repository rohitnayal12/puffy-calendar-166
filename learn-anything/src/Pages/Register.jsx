import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
 
  } from '@chakra-ui/react'


function Register() {
  return (
    <div style={{width:"50%",margin:"auto"}}> 
        
    <FormControl>
       <form >
     <FormLabel>Name</FormLabel>
     <Input type='text' />
     <FormLabel>Age</FormLabel>
     <Input type='number' />
     <FormLabel>Occupation</FormLabel>
     <Input type='text' />
     <FormLabel>Family Status</FormLabel>
     <Input type='text' />
     <FormLabel>Education</FormLabel>
     <Input type='text' />
     <Button>Submit</Button>
     </form>
     
   </FormControl>
   
       </div>
  )
}

export default Register