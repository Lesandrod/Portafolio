import React from "react";
import LogoSVG from "../../assets/logoooo.svg";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

import { Box, Text, HStack, Link, Icon, VStack } from "@chakra-ui/react";
const Principal = () => {
  return (
    <>
      <Box
        color={"#092635"}
        m={4}
        display={{ md: "flex" }}
        bg={"#092635"}
        borderRadius={20}
        justifyContent={"space-evenly"}
      >
        <Box
          pt={{ base: 7, md: 0 }}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Text
            fontFamily={"Russo One"}
            color="#FFBB64"
            fontSize={{ base: "3xl", md: "5xl" }}
            textAlign={"center"}
          >
            Hey, I'm Lennard
          </Text>
          <Text
            fontFamily={"Russo One "}
            fontSize={{ base: "2xl", md: "4xl" }}
            color="#9EC8B9"
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            Developer
          </Text>
          <br />
          <Button
            bg="#5C8374"
            color="#FFEAA7"
            variant="ghost"
            fontSize="sm"
            _hover={{
              bg: "#9EA974", // Cambia el color de fondo al pasar el mouse
              color: "#5C8374", // Cambia el color del texto al pasar el mouse
            }}
          >
            <HStack spacing={2}>
              <Icon as={MdEmail} boxSize={6} />
              <Text>Contáctame</Text>
            </HStack>
          </Button>{" "}
          <Button
            bg="#5C8374"
            color="#FFEAA7"
            variant="ghost"
            fontSize="sm"
            _hover={{
              bg: "#9EA974", // Cambia el color de fondo al pasar el mouse
              color: "#5C8374", // Cambia el color del texto al pasar el mouse
            }}
          >
            Contáctame
          </Button>
        </Box>

        <Box style={{ justifyContent: "", alignContent: "center" }}>
          <center>
            <Image width={{ base: 260, md: 410 }} src={LogoSVG} alt="dev" />
          </center>
        </Box>
      </Box>
    </>
  );
};

export default Principal;
