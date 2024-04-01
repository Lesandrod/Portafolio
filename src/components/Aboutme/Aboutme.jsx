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
        <Box
          style={{
            justifyContent: "",
            alignContent: "center",
            color: "#042035",
          }}
        >
          <center>
            <iframe
              id="online-alarm-kur-iframe"
              src="https://embed-countdown.onlinealarmkur.com/es/#2024-04-06T20:00:00@America%2FLima"
              scrolling="no"
              className=" w-[300px] h-[200px]  md:w-[500px] md:h-[300px]"
              style={{
                display: "block",
                margin: "0px auto",
                border: "0px",
              }}
              bis_size={{
                x: 569,
                y: 455,
                w: 360,
                h: 80,
                abs_x: 569,
                abs_y: 455,
              }}
            ></iframe>
          </center>
        </Box>
      </Box>
    </>
  );
};

export default Aboutme;
