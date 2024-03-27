import React from "react";
import LogoSVG from "../../assets/logoooo.svg";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

import { Box, Text, HStack, Link, Icon, VStack } from "@chakra-ui/react";
const Aboutme = () => {
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
        <Box style={{ justifyContent: "", alignContent: "center" }}>
          <center>
            <Image width={{ base: 260, md: 410 }} src={LogoSVG} alt="dev" />
          </center>
        </Box>
      </Box>
    </>
  );
};

export default Aboutme;
