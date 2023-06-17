import { Grid, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        <Heading>WelCome to About Page</Heading> 
      
        
  
        

        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {data.map((user)=>(
         
          <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
          <p>{user.occupation}</p>
          <p>{user.ethnicity}</p>
          <p>{user.Education}</p>
          <p>{user.NeedsandGoal}</p>
          </div>
         
        ))}
        </Grid>
        

        
    </div>
  )
}

export default About