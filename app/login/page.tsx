"use client";
import {Text, Input, Box, Grid, GridItem, FormControl, FormLabel, FormHelperText, Link , Flex , InputRightElement, InputGroup,Image,
  useToast} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import NextLink from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, LoginType } from "@/Schemas";
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import { LoginUser } from "../api";



const dashboard = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast()
  const router = useRouter();
  const session  = getCookie('session');

  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    if (session) {
      router.replace('/')
    }
  },[]) 

    const { control, handleSubmit, formState: { errors },} = useForm<LoginType>
    (
      {
        resolver:zodResolver(LoginSchema)
      }
    )
  

    const onSubmit = async (payload:LoginType) => {
      setLoading(true)
  
  
      console.log('payload', payload)
      
      try {
      const data = await LoginUser(payload)
      if (data) {
        setCookie('session', JSON.stringify(data))
        router.replace('/')
      }
       toast({
        title: 'Success',
        status: 'success',
        isClosable: true,
      })
      setLoading(false)
      } 
      catch (e:any) {
        toast({
          title: e.message,
          status: 'error',
          isClosable: true,
        })
      }
    }



  return (
    <Grid templateColumns="1fr 4fr">
      <GridItem h={"100vh"} bgImage={"url('./hexagon.jpg')"} bgSize={"cover"} bgPos={"center"}>
        <Flex justify={"center"} w={"full"} mt={"100%"}>
          <Text color={"white"} fontSize={"4xl"}>
            ADMIN
          </Text>
        </Flex>
      </GridItem>

      <GridItem h={"100vh"} bg={"white"}>
        <Flex justify={"center"} w={"full"}>
          <Box w={"300px"} mt={"60px"}>
            <Image objectFit={"cover"} src="pharmainc.svg"></Image>
          </Box>
        </Flex>

        <Flex justify={"center"} w={"full"} mb={10}>
          <FormControl w={"30rem"} p={"62px 28px"} borderRadius={7}>
            <Flex direction={"column"} gap={1}>
              <Text fontWeight={500} fontFamily={'"Outfit", sans-serif'} fontSize={"4xl"}>
                LOGIN
              </Text>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
              <Controller control={control} name={"username"} render={({ field }) => (
                <Input borderRadius={0} boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"} h={"7vh"} border={"1px solid #EAEFF2"}
                  type="email"
                />
              )}
              />
                <FormHelperText color={errors.username? 'red' : ''}>
                  { errors.username ? errors.username.message: 'Please Enter Your Username'}
                </FormHelperText>
              </Flex>
            </Flex>

            <Flex mt={8} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <InputGroup size="md">
                  <Input borderRadius={0} boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"} h={"7vh"} pr="4.5rem"
                    type={show ? "text" : "password"} 
                  />
                  <InputRightElement width="4.5rem" mt={2} justifyContent={"center"}>
                    <button
                      style={{
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

            <Flex justify={"center"} mt={10}>
            <button
              onClick={handleSubmit(onSubmit)}
                style={{
                  background: "#0881DE",
                  padding: "10px",
                  borderRadius: "7px",
                  color: "white",
                  width: "60%",
                }}
              >
                {loading? 'Signing In.....':  "Sign In"}
              </button>
            </Flex>
          </FormControl>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default dashboard;
