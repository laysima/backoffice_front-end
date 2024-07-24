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
  Input
} from "@chakra-ui/react";
import NextLink from "next/link";
import Navbar from "../components/Navbar";
import { GoPerson } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { PiHandWaving } from "react-icons/pi";
import { useState } from "react";

import ReactDOM from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example1: string,
  example2: string,
  example3: string,
  example4: string,
};

const settings = () => {
  const inputRef = useRef<HTMLInputElement>(null);



  const [show, setShow] = React.useState(false)
  const handleClickShow = () => setShow(!show)

  const handleClick = () => {
    inputRef.current?.click();
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example1"))
  console.log(watch("example2")) 
  console.log(watch("example3"))  
  console.log(watch("example4")) 
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
    
              {/*/////////////////////////////////////// reacthook forms form /////////////////////////////////*/}

              <form style={{width:'20rem'}}  onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>Name</FormLabel>
                <Input borderRadius={0} {...register("example1", { required: true })} />
                {errors.example1 && <Text color={'red'}>This field is required</Text>}

                <FormLabel mt={5}>Email</FormLabel>            
                <Input borderRadius={0} {...register("example2", { required: true })} />
                {errors.example2 && <Text color={'red'}>This field is required</Text>}

                <FormLabel mt={5}>Username</FormLabel>            
                <Input borderRadius={0} {...register("example3", { required: true })} />
                {errors.example3 && <Text color={'red'}>This field is required</Text>}

                <FormLabel mt={5}>Password</FormLabel>            
                    <InputGroup size='md'>
                    <Input borderRadius={0}
                      pr='4.5rem'
                      {...register("example4", { required: true })} 
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClickShow}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                {errors.example4 && <Text color={'red'}>This field is required</Text>}

             <Flex pt={8}>
                <Button colorScheme="blue" cursor={"pointer"} type="submit">Submit</Button>
              </Flex>
              </form>
              
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default settings;
