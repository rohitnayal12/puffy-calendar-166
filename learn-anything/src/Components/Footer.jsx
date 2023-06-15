import { Box, Divider, Flex,  HStack, Icon,  Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillApple } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from "react-icons/gr";

function Footer() {
    return (
        <>
         <Box
                bg="lightblue"
                _dark={{
                    bg: "gray.600",
                }}
            >
                <Stack
                    direction={{
                        base: "column",
                        lg: "row",
                    }}
                    w="full"
                    justify="space-between"
                    p={10}
                >

                    <HStack
                        alignItems="start"
                        flex={1}
                        justify="space-around"
                        fontSize={{
                            base: "12px",
                            md: "16px",
                        }}
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                        textAlign={{
                            base: "center",
                            md: "left",
                        }}
                    >
                        <Flex justify="start" direction="column">
                            <h1>Get in touch</h1>
                            <p>stay connected with us</p>
                            <Link><AiFillFacebook size="40px" /></Link>
                            <Link><AiFillInstagram size="40px" /></Link>
                            <Link><AiFillLinkedin size="40px" /></Link>
                            <Link><AiFillTwitterCircle size="40px" /></Link>
                        </Flex>
                        <Flex justify="start" direction="column">

                            <Link>Abot us</Link>
                            <br />
                            <Link>Our Team</Link>
                            <br />
                            <Link>FAQS</Link>
                            <br />
                            <Link>Terms Of Service</Link>
                        </Flex>
                    </HStack>
                    <HStack
                        alignItems="start"
                        flex={1}
                        justify="space-around"
                        fontSize={{
                            base: "12px",
                            md: "16px",
                        }}
                        color="gray.800"
                        _dark={{
                            color: "white",
                        }}
                        textAlign={{
                            base: "center",
                            md: "left",
                        }}
                    >
                        <Flex justify="start" direction="column">
                            <h1>Product</h1>
                            <Link>Terms Of User</Link>
                            <br />
                            <Link>Pribacy Policy</Link>
                            <br />
                            <Link>Login</Link>
                        </Flex>
                        <Flex justify="start" direction="column">
                            <h1>Download App</h1>
                            <Box style={{ width: "50%", margin: "auto" }}>
                                <Link><AiFillApple size="40px" /></Link>
                                <Link><FaGooglePlay size="40px" /></Link>
                            </Box>
                        </Flex>
                    </HStack>
                </Stack>
                <Divider
                    w="95%"
                    mx="auto"
                    color="gray.600"
                    _dark={{
                        color: "#F9FAFB",
                    }}
                    h="3.5px"
                />
                <VStack py={3}>
                    <HStack justify="center">
                        <Link>
                            <Icon
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                                as={FaFacebook}
                            />
                        </Link>
                        <Link>
                            <Icon
                                color="gray.800"
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                                as={AiFillTwitterCircle}
                            />
                        </Link>
                        <Link>
                            <Icon
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                                as={GrInstagram}
                            />
                        </Link>
                        <Link>
                            <Icon
                                _dark={{
                                    color: "white",
                                }}
                                h="20px"
                                w="20px"
                                as={FaLinkedinIn}
                            />
                        </Link>
                    </HStack>

                    <Text
                        textAlign="center"
                        fontSize="smaller"
                        _dark={{
                            color: "white",
                        }}
                    >
                        &copy;Copyright. All rights reserved.
                    </Text>
                </VStack>
            </Box>
        </>
    )
}

export default Footer