import { Button, Input, Modal, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
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
import { AuthContext } from '../Context/AuthContextProvider'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'



function Login() {

  const { authState, loginUser ,logoutUser} = useContext(AuthContext)
  console.log(authState)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const toast = useToast()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  // console.log(email,password)?
  const handleSubmit = async () => {

    const data = { email, password }
    //console.log(data)



    try {
      const res = await axios.post('https://puzzled-fawn-sweatsuit.cyclic.app/api/login', data)
      // console.log(res)
      if (res) {
        if (res.status == 200) {
          toast({
            title: "Login Successes",
            description: `You are Welcome here! `,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          localStorage.setItem("token", res.data.data.token)
          loginUser(res.data.data.token)
          console.log(authState)
          navigate('/')
        } else if (res.status == 400) {
          toast({
            title: "Wrong Password",
            description: `Please write correct password and try again`,
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

  // console.log(authState)




  return (
    <div style={{ width: "100%", margin: "auto" }} >





        

 <Button mt={4} onClick={onOpen}>
        click here to login
    </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>



          
          <ModalCloseButton />
          <ModalBody>
          <form  >
        <FormControl>

          <FormLabel>Email address</FormLabel>
          <Input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <FormLabel>Password</FormLabel>
          <Input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <Button onClick={handleSubmit} >Login</Button>


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
        img: "https://wallpaperaccess.com/full/6819816.jpg",
      },
      {
        img: "https://gs.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/advantage%20online%20learning.jpeg",
      },
      {
        img: "https://etimg.etb2bimg.com/photo/78567223.cms",
      },
      {
        img: "https://i0.wp.com/onlinecourseing.com/wp-content/uploads/2022/09/Best-Websites-for-Learning-to-Code-for-FREE.jpg",
      },
      {
        img: "https://www.babbelforbusiness.com/wp-content/uploads/2022/10/Employee_using_Babbel_Live_from_home.jpg",
      },]} />


<Footer   />
   
    </div>
  )
}

export default Login