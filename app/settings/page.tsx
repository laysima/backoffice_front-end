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
        <Flex>
          <Navbar />
        </Flex>
        <Flex direction={"column"} p={"30px"} w={"100%"}>
          <Flex p={3} bg={"white"}  justify={"center"} align={"center"}>
            <Flex gap={3} align={"center"} flexGrow={1}>
              <Text>Personal Details</Text>
            </Flex>
            <Button
              flexShrink={0}
              p={2}
              colorScheme="blue"
              borderRadius={0}
            >
              Save
            </Button>
          </Flex>

          <Flex justify={"center"} bg={"white"} h={'100dvh'} mt={7}>
            <Flex direction={"column"}>
              <Flex justify={"center"}>
                <Flex>
                  <Box width={"full"} objectFit={"cover"} mt={5}>
                    <Icon
                      as={GoPerson}
                      p={3}
                      borderRadius={"full"}
                      fontSize={"80px"}
                      bg={'#EEEEEE'}
                    />
                  </Box>

                  <Flex position={"absolute"}>
                    <Box
                      width={"full"}
                      objectFit={"cover"}
                      mt={"60px"}
                      ml={"45px"}
                    >
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
                <FormControl w={"20rem"}>
                  <Flex direction={"column"} w={"full"} align={"center"}>
                    <Flex direction={"column"} align={"start"} w={"full"}>
                      <FormLabel>Name</FormLabel>
                      <Input
                      borderRadius={0}
                        type="email"
                      />
                    </Flex>
                  </Flex>

                  <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
                    <Flex direction={"column"} align={"start"} w={"full"}>
                      <FormLabel>Email</FormLabel>
                      <Input
                       borderRadius={0}
                        type="email"
                      />
                    </Flex>
                  </Flex>

                  <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
                    <Flex direction={"column"} align={"start"} w={"full"}>
                      <FormLabel>Username</FormLabel>
                      <Input
                       borderRadius={0}
                        type="email"
                      />
                    </Flex>
                  </Flex>

                  <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
                    <Flex direction={"column"} align={"start"} w={"full"}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                         borderRadius={0}
                          pr="4.5rem"
                          type={show ? "text" : "password"}
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
