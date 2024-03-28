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
        w={"100%"}
        display={{ md: "flex" }}
        bg={"#092635"}
        my={4}
        borderRadius={20}
        justifyContent={"space-evenly"}
      >
        <Box
          pt={{ base: 7, lg: 0 }}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Text
            className="animate-fade-right animate-once animate-duration-[2000ms]"
            fontFamily={"Russo One"}
            color="#FFBB64"
            fontSize={{ base: "3xl", lg: "5xl" }}
            textAlign={"center"}
          >
            Hey, I'm Lennard
          </Text>
          <Text
            className="animate-fade-right animate-once animate-duration-[2000ms]"
            fontFamily={"Russo One "}
            fontSize={{ base: "2xl", lg: "4xl" }}
            color="#9EC8B9"
            fontWeight="bold"
            textAlign={{ base: "center", lg: "left" }}
          >
            Developer
          </Text>
          <br />
          <HStack justifyContent={{ base: "center", lg: "flex-start" }}>
            <Button
              bg="#5C8374"
              color="#FFEAA7"
              variant="ghost"
              fontSize="sm"
              _hover={{
                bg: "#9EA974",
                color: "#5C8374",
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
                bg: "#9EA974",
                color: "#5C8374",
              }}
            >
              <HStack spacing={2}>
                <Icon as={MdEmail} boxSize={6} />
                <Text>Contáctame</Text>
              </HStack>
            </Button>
          </HStack>
        </Box>

        <Box style={{ justifyContent: "", alignContent: "center" }}>
          <center>
            <Image
              className="animate-pulse animate-rotate-y animate-infinite animate-duration-[6000ms] animate-delay-4000"
              width={{ base: 260, md: 410 }}
              src={LogoSVG}
              alt="dev"
            />
          </center>
        </Box>
      </Box>
    </>
  );
};

export default Principal;
