import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Slider = ({slides} ) => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };
    const SLIDES_INTERVAL_TIME = 3000;
    const ANIMATION_DIRECTION = "right";
    useEffect(() => {
        const prevSlide = () => {
            setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
        };

        const nextSlide = () => {
            setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
        };

        const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
    }, [slidesCount]);
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={10}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden">
                <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                            <Text
                                color="black"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                                whiteSpace="nowrap"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image
                                src={slide.img}
                                alt="carousel image"
                                boxSize="full"
                                backgroundSize="full"
                                objectFit="full"
                                objectPosition="50% 50%"
                            />
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Slider;