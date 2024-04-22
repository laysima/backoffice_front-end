'use client'
import React from 'react'
import {
    Flex,
    Text,
    Button,
    Grid,
    GridItem,
    IconButton,
    Divider,
    Icon
  } from "@chakra-ui/react";
  import { MdOutlineDelete } from "react-icons/md";
  import { useRouter } from 'next/navigation';
  import { IoIosArrowRoundBack } from "react-icons/io";

const orderDetails = () => {
  const router = useRouter();

  const handleBackButton = () => {
    router.back(); // Navigates to the previous page
  }
    return (
        <>
        <Flex ml={10}>
          <Icon fontSize={'50px'} cursor={'pointer'} onClick={handleBackButton} as={IoIosArrowRoundBack} />
        </Flex>
        <Flex bg={'#F9F9F8'} h={'100vh'} justify={'center'}>
            <Flex direction={"column"} p={"30px"}>
              <Flex
                p={5}
                bg={"white"}
              >
                <Text>Orders</Text>
                </Flex>
                

            <Flex mt={10} direction={'column'} p={10} justify={'center'} bg={'white'}>
              <Grid
              bg={'#F9F9F8'}
              fontWeight={500}
                templateColumns="repeat(4, 1fr)"
                gap={6}
                justifyContent={"center"}
                alignContent={"center"}
                textAlign={"center"}
                fontSize={"12px"}
              >
                <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
                  PRODUCT
                </GridItem>
                <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
                  PRICE
                </GridItem>
                <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
                  QUANTITY 
                </GridItem>
                <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
                  TOTAL
                </GridItem>
              </Grid>
    
              <Grid
                mt={6}
                templateColumns="repeat(4, 1fr)"
                gap={6}
                justifyContent={"center"}
                alignContent={"center"}
                fontSize={"12px"}
              >
                <GridItem w="100%" h="10" bg='transparent' alignContent={"center"}  textAlign={"center"} >
                Waakye and Egg
                </GridItem>
                <GridItem w="100%" h="10" bg='transparent' alignContent={"center"}  textAlign={"center"} >
                $200
                </GridItem>
                <GridItem w="100%" h="10" bg='transparent' alignContent={"center"}  textAlign={"center"} >
                  1 
                </GridItem>
                <GridItem w="100%" h="10" bg='transparent'>
                    <Flex alignItems={'center'} gap={5} ml={'100px'} >
                        <Text textAlign={'right'} align={'right'} justifyContent={'right'}>
                            200
                        </Text>
                        <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
                    </Flex>
                </GridItem>
              </Grid>
              <Divider border={"0.5px solid black"} mt={2}  orientation="horizontal" />
    
              <Grid
                mt={6}
                templateColumns="repeat(4, 1fr)"
                gap={6}
                justifyContent={"center"}
                alignContent={"center"}
                fontSize={"12px"}
              >
                <GridItem w="100%" h="10" bg='transparent' alignContent={"center"}  textAlign={"center"} >
                Waakye and Egg
                </GridItem>
                <GridItem w="100%" h="10" bg='transparent' alignContent={"center"}  textAlign={"center"} >
                $200
                </GridItem>
                <GridItem w="100%" h="10" bg='transparent' alignContent={"center"}  textAlign={"center"} >
                  1 
                </GridItem>
                <GridItem w="100%" h="10" bg='transparent'>
                    <Flex alignItems={'center'} gap={5} ml={'100px'} >
                        <Text textAlign={'right'} align={'right'} justifyContent={'right'}>
                            200
                        </Text>
                        <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
                    </Flex>
                </GridItem>
              </Grid>
              <Divider border={"0.5px solid black"} mt={2} orientation="horizontal" />

              <Flex mt={5} justify={'right'} align={'right'} gap={5}>
                <Text>
                    TOTAL
                </Text>
                <Text>
                    $400
                </Text>
              </Flex>
              </Flex>

              <Flex mt={5}  justify={'right'} align={'right'} gap={5}>
              <Button p={2} bg={"white"} color={"#F54F4F"} borderRadius={0}>
                    CANCEL ORDER
                </Button>
                <Button p={2} bg={"#05A1F8"} color={"white"} borderRadius={0}>
                    ACCEPT ORDER
                </Button>
              </Flex>
            </Flex>

            </Flex>
        </>
      )
}

export default orderDetails