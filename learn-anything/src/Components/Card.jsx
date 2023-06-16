import { Box, Flex, Image } from '@chakra-ui/react'

import { chakra } from '@chakra-ui/react'
import React from 'react'

function Card(props) {
   // console.log(props)
    return (
        <>
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
                    maxW="xs"
                    mx="auto"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    shadow="lg"
                    rounded="lg"
                >
                    <Image
                        h="100%"
                        w="full"
                        fit="cover"
                        mt={2}
                        src={props.image}
                        alt="NIKE AIR"
                    />
                    
                    <Box px={4} py={2}>
                        <chakra.h1
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="bold"
                            fontSize="3xl"
                            textTransform="uppercase"
                        >
                           {props.heading}
                        </chakra.h1>
                        <chakra.p
                            mt={1}
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                           
                        </chakra.p>
                    </Box>

                    

                
                </Box>
            </Flex>;

        </>
    )
}

export default Card