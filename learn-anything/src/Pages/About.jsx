import { Grid, Heading,Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

function About() {

const[data,setData]=useState([])

const fetchdata=()=>{

  axios.get(`https://puzzled-fawn-sweatsuit.cyclic.app/api/getdata`)
  .then((res)=>{
    console.log(res)
    setData(res.data.data)
  })
  .then((err)=>{
    console.log(err)
  })

}


useEffect(()=>{
fetchdata()
},[])



console.log(data)
  return (
    <div>
        <Heading>These are some Of our Users</Heading> 
      
        
  
        

        <Grid templateColumns='repeat(3, 1fr)' gap={6}
              bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        
        
        
        
        
        >
        {data.map((user)=>(
         
          <Box
    w="xs"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    mx="auto"
    key={user.id}
  >
          <Box py={5} textAlign="center"  key={user.id}>
      <Heading
        display="block"
        fontSize="2xl"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
       {user.name}
      </Heading>
          <Heading size="sm">{user.email}</Heading>
          <p>{user.age}</p>
          <p>{user.occupation}</p>
          <p>{user.ethnicity}</p>
          <p>{user.Education}</p>
          <p>{user.NeedsandGoal}</p>
          </Box>
          </Box>
         
        ))}
        </Grid>
        
      <Footer   />
        
    </div>
  )
}

export default About



