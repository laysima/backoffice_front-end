import React from "react";
import {
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Link,
  Divider,
  Box,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";
import Navbar from "../components/Navbar";

const orders = () => {
  return (
    <>
      <Flex bg={"#F9F9F8"} w={'100%'} h={'100vh'}>
        <Flex mt={5}>
          <Navbar />
        </Flex>
        <Flex direction={"column"} p={"30px"} w={'100%'}>

          <Flex p={3} bg={"white"} justify={"center"} align={"center"}>
            <Flex gap={3} align={"center"} flexGrow={1}>
            <button style={{padding:'7px', background:'#05A1F8', color:'white'}} >
                <Link href={`/orders/$`}>
                Order Details
                </Link>
            </button>
            </Flex>
            <Button flexShrink={0} p={2} bg={"#05A1F8"} color={"white"} borderRadius={0}>
              + Add Orders
            </Button>
          </Flex>

          <Grid
          bg={'white'}
          fontWeight={500}
            mt={70}
            templateColumns="repeat(7, 1fr)"
            gap={6}
            justifyContent={"center"}
            alignContent={"center"}
            textAlign={"center"}
            fontSize={"12px"}
          >
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              ID
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              DATE
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              CUSTOMER NAME
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              CUSTOMER ADDRESS
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              PAYMENT STATUS
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              ORDER STATUS
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              ITEMS
            </GridItem>
          </Grid>

          <Grid
            mt={6}
            templateColumns="repeat(7, 1fr)"
            gap={6}
            justifyContent={"center"}
            alignContent={"center"}
            textAlign={"center"}
            fontSize={"12px"}
          >
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              1086
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              12, Aug 2024
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              Shakur 
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              PLanners Avenue, Spintex
            </GridItem>
            
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              <Box bg={'#C3EEB8'} >
                  <Flex gap={3} alignItems={"center"} justifyContent={"center"} p={2}>
                    <Box borderRadius={'full'} w={'15px'} h={'15px'} bg={'#63B96C'}>
                    </Box>
                    <Text color={"black"}>
                      paid
                    </Text>
                  </Flex>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
            <Flex gap={3} alignItems={"center"} justifyContent={"center"} p={2}>
                    <Box borderRadius={'full'} w={'15px'} h={'15px'} bg={'#63B96C'}>
                    </Box>
                    <Text color={"black"}>
                      Delivered
                    </Text>
                  </Flex>
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              10 items
            </GridItem>
          </Grid>
          <Divider border={"0.5px solid black"} orientation="horizontal" />

          <Grid
            mt={6}
            templateColumns="repeat(7, 1fr)"
            gap={6}
            justifyContent={"center"}
            alignContent={"center"}
            textAlign={"center"}
            fontSize={"12px"}
          >
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              ID
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              DATE
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              CUSTOMER NAME
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              CUSTOMER ADDRESS
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              PAYMENT STATUS
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              ORDER STATUS
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              ITEMS
            </GridItem>
          </Grid>
          <Divider border={"0.5px solid black"} orientation="horizontal" />
  
        </Flex>
      </Flex>
    </>
  );
};

export default orders;
