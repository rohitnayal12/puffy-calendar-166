import { Box, Flex, Image,Link } from '@chakra-ui/react'
import React from 'react'


function Whywithuscard(props) {
  return (
    <div>
        <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
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
  >
    <Image
      w="full"
      h={56}
      fit="cover"
      src={props.image}
      alt="avatar"
    />

    <Box py={5} textAlign="center">
      <Link
        display="block"
        fontSize="2xl"
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        {props.heading}
      </Link>
     
    </Box>
  </Box>
</Flex>;
    </div>
  )
}

export default Whywithuscard