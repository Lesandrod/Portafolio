import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";
import { Box, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { Link as ReachLink, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const href = useLocation().pathname.slice(0);
  const links = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <Box
      className="boxygradient animate-fade-down"
      w={"100%"}
      position={"fixed"}
      fontSize={{ base: "14px", md: "15px", lg: "17px" }}
      alignItems={"center"}
      zIndex={9999}
    >
      <center>
        <HStack
          m={3}
          py={2}
          px={7}
          maxW={"1100px"}
          bg={"#092635"}
          color={"#FFEAA7"}
          borderRadius={24}
          boxShadow={"md"}
          justifyContent={{ base: "space-between", md: "none" }}
          // Esto alinea los elementos a los lados
        >
          {/* HStack para los iconos */}

          <HStack gap={3} w={{ base: "none", md: "33.33%" }}>
            <Link href="https://github.com/Lesandrod" isExternal>
              <Icon mt={1} as={FaGithub} boxSize={6} />
            </Link>
          </HStack>

          <HStack
            gap={3}
            w={"33.33%"}
            display={{ base: "none", md: "flex", lg: "flex" }}
            justifyContent={"center"}
          >
            <Link href="mailto:lentrix12345@gmail.com" isExternal>
              <Icon mt={1} as={MdEmail} boxSize={6} />
            </Link>
            <Link href="https://www.linkedin.com/in/lennardidone/" isExternal>
              <Icon mt={1} as={FaLinkedin} boxSize={5} />
            </Link>
            <Link href="https://www.instagram.com/lesandrod/" isExternal>
              <Icon mt={1} as={FaInstagram} boxSize={6} />
            </Link>
          </HStack>

          {/* HStack para los enlaces */}
          <HStack
            gap={4}
            w={{ base: "none", md: "33.33%" }}
            justifyContent={"end"}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                as={ReachLink}
                _hover={{
                  textDecoration: "none",
                }}
                fontFamily={"Russo One"}
                style={{
                  borderBottom: `3px solid ${
                    link.path === href ? "#FFEAA7" : "#092635"
                  }`,
                  color: "#E2F4C5",
                }}
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </HStack>
      </center>
    </Box>
  );
};

export default Navbar;
