import React from "react";
import Aboutme from "../components/Aboutme/Aboutme";
import { Image } from "@chakra-ui/react";
import Principal from "../components/Principal/Principal";
import { Box, Text, HStack, Link, Icon, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box mt={20} width={"100%"} maxW={"1100px"} px={4}>
      <Principal />
      <Aboutme />
    </Box>
  );
};

export default Home;
