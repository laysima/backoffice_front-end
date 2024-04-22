"use client";
import React, { useRef } from "react";
import {
  Flex,
  Text,
  Link,
  Button,
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Icon,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Navbar from "../components/Navbar";
import { GoPerson } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";
import { useState } from "react";

const settings = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    inputRef.current?.click();
  };
  return (
    <>
      <Flex bg={"#F9F9F8"} w={"100%"} h={"100vh"}>
        <Flex mt={5}>
          <Navbar />
        </Flex>
        <Flex direction={"column"} p={"30px"} w={"100%"}>
          <Flex p={3} bg={"white"} justify={"center"} align={"center"}>
            <Flex gap={3} align={"center"} flexGrow={1}>
              <Text>Personal Details</Text>
            </Flex>
            <Button
              flexShrink={0}
              p={2}
              bg={"#C3EEB8"}
              color={"white"}
              borderRadius={"full"}
            >
              Saved
            </Button>
          </Flex>

          <Flex justify={"center"} bg={"white"} mt={7}>
            <Flex direction={"column"} >
              <Flex justify={"center"}>
              <Flex>
                <Box width={"full"} objectFit={"cover"} mt={5}>
                  <Icon
                    as={GoPerson}
                    p={3}
                    borderRadius={"full"}
                    bg={"#C3EEB8"}
                    fontSize={"80px"}
                  />
                </Box>

              <Flex position={"absolute"}>
                <Box width={"full"} objectFit={"cover"} mt={"60px"} ml={"45px"}>
                  <input
                    ref={inputRef}
                    type="file"
                    hidden
                    onChange={(e) => {
                      console.log(e.target.files);
                    }}
                    style={{ display: "none" }}
                  />
                  <Icon
                    cursor={"pointer"}
                    p={3}
                    borderRadius={"full"}
                    bg={"#D9D9D9"}
                    fontSize={"40px"}
                    as={RiEditLine}
                    onClick={handleClick}
                  />
                </Box>
              </Flex>
              </Flex>
              </Flex>

              <Flex justify={"center"}>
                  <FormControl
                    w={"20rem"}
                  >
                    <Flex
                      direction={"column"}
                      w={"full"}
                      align={"center"}
                    >
                      <Flex direction={"column"} align={"start"} w={"full"}>
                        <FormLabel>Name</FormLabel>
                        <Input
                          border={"1px solid black"}
                          placeholder="First Name"
                          type="email"
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      mt={5}
                      direction={"column"}
                      w={"full"}
                      align={"center"}
                    >
                      <Flex direction={"column"} align={"start"} w={"full"}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          border={"1px solid black"}
                          type="email"
                          placeholder="Please Enter Your email"
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      mt={5}
                      direction={"column"}
                      w={"full"}
                      align={"center"}
                    >
                      <Flex direction={"column"} align={"start"} w={"full"}>
                        <FormLabel>Username</FormLabel>
                        <Input
                          border={"1px solid black"}
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      mt={5}
                      direction={"column"}
                      w={"full"}
                      align={"center"}
                    >
                      <Flex direction={"column"} align={"start"} w={"full"}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                          <Input
                           border={"1px solid black"}
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                          />
                          <InputRightElement width="4.5rem">
                            <button
                              style={{
                                height: "1.75rem",
                                fontSize: "m",
                                backgroundColor: "none",
                              }}
                              onClick={handleClick}
                            >
                              {show ? <BsEye /> : <BsEyeSlash />}
                            </button>
                          </InputRightElement>
                        </InputGroup>
                      </Flex>
                    </Flex>
                    <Flex justify={"center"} mt={10} alignItems={"center"} bg={'#C9C8C8'} borderRadius={'full'}>
                      <Icon fontSize={'30px'} as={PiHandWaving}/>
                      <Text p={5} borderRadius={'full'}>     
                          Connect your social media accounts for smoother experience!   
                      </Text>
                    </Flex>
                  </FormControl>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

    </>
  );
};

export default settings;
