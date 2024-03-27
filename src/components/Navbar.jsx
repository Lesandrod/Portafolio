import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from 'react';
import { Box, Text, HStack, Link, Icon } from "@chakra-ui/react";
import { Link as ReachLink, useLocation } from "react-router-dom"

const Navbar = () => {
    const href = useLocation().pathname.slice(0)
    const links = [
        { path: "/", name: 'Home' },
        { path: "/projects", name: 'Projects' },


    ];



    return (

        <Box
            w={'100%'}
            maxW={'1100px'}
            position={'absolute'}
            fontSize={{ base: '14px', md: '15px', lg: '17px' }}
        >
            <HStack m={3} py={3} px={7} bg={"#092635"}
                color={"#FFEAA7"}
                borderRadius={24}
                justify='space-between'
                alignItems='center'
                boxShadow={'md'}
            >
                <Text as='b' mr={5} fontFamily={'Russo One'} >Lesan.dev</Text>
                <center>
                    <HStack gap={3} >
                        <Link href='https://github.com/Lesandrod' isExternal>
                            <Icon mt={1} as={FaGithub} boxSize={5} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/lennardidone/' isExternal>
                            <Icon mt={1} as={FaLinkedin} boxSize={5} />
                        </Link>
                        <Link href='https://www.instagram.com/lesandrod/' isExternal>
                            <Icon mt={1} as={FaInstagram} boxSize={5} />
                        </Link>
                    </HStack>
                </center>

                <HStack gap={4}>
                    {links.map((link, index) => (

                        <Link

                            key={index}
                            to={link.path}
                            as={ReachLink}
                            _hover={{
                                textDecoration: 'none'
                            }}
                            fontFamily={'Russo One'}
                            style={{
                                borderBottom: `3px solid ${link.path === href ? '#FFEAA7' : '#092635'}`,
                                color: '#E2F4C5',

                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </HStack>
            </HStack>
        </Box>




    )
}

export default Navbar;
