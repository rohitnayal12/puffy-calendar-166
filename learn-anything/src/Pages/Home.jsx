import { Box, Grid, Heading, Image} from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'

import Card from '../Components/Card';
function Home() {
  return (
    <div>
        
        

        
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <Box>
        <p >
            Learn now
            </p>
          <Heading as='h1' size='lg'>
            Learn English and Improve Your Skills
            </Heading> 
            <p as='h1' size='sm'>
           Fast ,effective and innovative method of learning
            </p>
         </Box>
        <Box boxSize='sm'>
                <Image src='https://as2.ftcdn.net/v2/jpg/02/73/68/65/1000_F_273686501_1f1C8aHm6t1b1yIhdflMfNvH3vCzcMJU.jpg' alt='Dan Abramov' />
         </Box>
         </Grid>

         <Grid templateColumns='repeat(3, 1fr)' style={{width:"60%",margin:"auto"}}>
            <div>
                <Heading size="lg">700+ </Heading>
                <Heading size="md">Mentors</Heading>
            </div>
            <div>
                <Heading size="lg">100+ </Heading>
                <Heading  size="md">Country Coverage</Heading>
            </div>
            <div>
                <Heading size="lg">400K+ </Heading>
                <Heading  size="md">Students</Heading>
            </div>
            </Grid>

           <br />


         <Box>
            <Heading size="lg">Our English Learning Platform</Heading>

            <Grid templateColumns="repeat(3,1fr)" >
             
              <Card {...{image:"https://www.shutterstock.com/image-vector/open-book-vector-clipart-silhouette-260nw-795305758.jpg",heading:"Behind the  Program",text:"hello"}}  />
             
               <Card {...{image:"https://www.shutterstock.com/image-photo/computer-mouse-isolated-on-white-260nw-1501408907.jpg",heading:"Why Online",text:"hello"}}  />
             
               <Card {...{image:"https://media.istockphoto.com/id/635974362/photo/building-a-network-towards-success.jpg?s=612x612&w=0&k=20&c=cwxRzaKQdvMJZ1FapI7qgGpbQCtSBf9PLQ2FMk0Tu0M=",heading:"Science Of ONIT",text:"hello"}}  />
             

          </Grid>
         </Box>

         <Box>
            <Heading>Why Study With Us</Heading>
         </Box>
         <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <div>
            <Image src='https://media.istockphoto.com/id/637874086/photo/we-have-everything-we-need-to-pass.jpg?s=612x612&w=is&k=20&c=vA1GYKE_Uc0h-c6mWEw1--oxvBFBLg14_j0ysGgYIw0=' alt='Dan Abramov' width={400} />
            <Heading size="md">Different Learning Techniques</Heading>
            </div>
            <div>
            <Image src='https://media.istockphoto.com/id/1250479244/photo/asian-boy-student-video-conference-e-learning-with-teacher-and-classmates-on-computer-in.jpg?s=612x612&w=is&k=20&c=aaAp8-R-oc2wK2wdbPyfjqCbz3gL4qpCLOHHzyqc33Y=' alt='Dan Abramov' width={400} />
            <Heading size="md">Why Online</Heading>
            </div>
            <div>
            <Image src='https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Dan Abramov' width={400} />
            <Heading size="md">Earn Your Certificate</Heading>
            </div>
            </Grid>

            <Box>
                <Heading>  Meet Some Of Our Teachers</Heading>
                <p>Our Teacher come from all over the world</p>
                <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <div>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrrbU1lPaMZ7kSjKpSMoBh2U_qc48SJdZcg&usqp=CAU' alt='Dan Abramov'  width={400} />
            <Heading size="md">Guy Hawkings</Heading>
            <h5>Instructor</h5>
            </div>
            <div>
            <Image src='https://thedig.howard.edu/sites/thedig.howard.edu/files/newsroom/field/image/JKnight_200821_6000_Easy-Resize.com_.jpg' alt='Dan Abramov' width={400} />
            <Heading size="md">Dany Wilson</Heading>
            <h5>Instructor</h5>
            </div>
            <div>
            <Image src='https://thedig.howard.edu/sites/thedig.howard.edu/files/newsroom/JKnight_200821_5947_Easy-Resize.com_.jpg' alt='Dan Abramov' width={400} />
            <Heading size="md">Jacks Night</Heading>
            <h5>Instructor</h5>
            </div>
            </Grid>
            </Box>


        <Footer  />

    </div>
  )
}

export default Home