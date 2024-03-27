import React from "react";
import LogoSVG from "../../assets/logoooo.svg";
import { Image } from "@chakra-ui/react";

import { Box, Text, HStack, Link, Icon, VStack } from "@chakra-ui/react";
const Principal = () => {
  return (
    <>
      <Box
        py={3}
        color={"#092635"}
        m={4}
        display={{ md: "flex" }}
        bg={"#092635"}
        justi
        borderRadius={20}
      >
        <Box
          mt={{ base: 0, md: 150 }}
          m={{ base: 3 }}
          pr={5}
          mr={{ base: 10 }}
          ml={{ base: 10, md: 10 }}
        >
          <Text
            fontFamily={"Russo One"}
            color="#FFBB64"
            textAlign={{ base: "center", md: "initial" }}
            fontSize={{ base: "3xl", md: "5xl" }}
            pt={0}
            display="inline-block"
          >
            LENNARD IDONE{" "}
            <Text
              as="b"
              fontFamily={"Russo One "}
              fontSize={{ base: "3xl", md: "5xl" }}
              color="#9EC8B9"
              fontWeight="bold"
            >
              Developer
            </Text>
          </Text>
          <br />

          {/* <Text
            mt={2}
            fontSize={{ base: "10px", md: "xl" }}
            color="gray.500"
            fontFamily={"Russo One "}
          >
            Estudiante de la carrera de Diseño y Desarrollo de Software. <br />
          </Text> */}
        </Box>

        <Box flexShrink={0} m={4} ml={10}>
          <img width={430} src={LogoSVG} />
        </Box>
      </Box>
    </>
    // <HStack m={3} py={3} px={10} bg={"#242424"}
    //     color={"#e4e1e1"}
    //     borderRadius={20}
    //     justify='space-between'
    //     display={'flex'}
    //     boxShadow={'md'}
    // >
    //     <VStack>
    //         <Text fontSize={'5xl'} ml={6} pt={9}>LENNARD IDONE <br /><Text color={'#106065'} as='b' >Developer</Text></Text>

    //     </VStack>
    //     <Image boxSize='400px'
    //         src='https://i.ibb.co/D1Dy250/doodles-mixed-round.png' />

    // </HStack>
  );
};

export default Principal;
