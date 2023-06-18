import { Button, Input, Modal, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  useToast,
  ModalOverlay,
  ModalContent,
 
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'


function Register() {

  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  
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
    <div style={{ width: "100%", margin: "auto" }}>




<Button mt={4} onClick={onOpen}>
        click here to Register
    </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>



          
          <ModalCloseButton />
          <ModalBody>
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

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>



        </ModalContent>
      </Modal>

      <Slider slides={[{
        img: "https://img.freepik.com/premium-photo/online-webinars-online-education-elearning-idea_27634-912.jpg",
      },
      {
        img: "https://gs.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/advantage%20online%20learning.jpeg",
      },
      {
        img: "https://www.ice.cam.ac.uk/sites/www.ice.cam.ac.uk/files/styles/leading/public/istock-1220226086.jpg?itok=ihnlFN0h",
      },
      {
        img: "https://e1.pxfuel.com/desktop-wallpaper/343/502/desktop-wallpaper-online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-the-classroom-training-course-library-vector-illustration-flat-1937754-vector-art-at-vecteezy.jpg",
      },
      {
        img: "https://static.vecteezy.com/system/resources/previews/001/937/601/original/online-education-application-learning-worldwide-on-computer-mobile-website-background-social-distance-concept-the-classroom-training-course-library-illustration-flat-vector.jpg",
      },]} />


    <Footer  />


    </div>
  )
}

export default Register