"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Flex, Box, Text, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { MdOutlineListAlt } from "react-icons/md";
import { TbShoppingBagX } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";

const dashboard = () => {
  return (
    <>
        <Flex p={5} gap={900} alignItems={"center"}>
            <Text fontSize={"l"} fontWeight={500}>
              Dashboard
            </Text>

            <Flex alignItems={"center"}>
              <Box w={"40px"} >
                <Image
                  borderRadius={"50px"}
                  objectFit={"cover"}
                  src="m1.jpg"
                ></Image>
              </Box>
              <Flex direction={"column"} >
                <Text fontWeight={500} >Shakur</Text>
                <Text fontSize={'12px'}>Admin</Text>
              </Flex>
            </Flex>  
          </Flex>
        <Grid
          w={"100%"}
          p={"20px"}
          mt={-5}
          templateAreas={`
                "header2 header3 header4 header1"
                "main main main nav"
                "main main main subNav"
                "footer footer footer subNavs"
            `}
          gridTemplateRows={"1fr 1fr 1fr 1fr"} 
          gridTemplateColumns={"1fr 1fr 1fr 2fr"} 
          h="650px" width={'1150px'} 
          gap="3"
          color="blackAlpha.700"
        >
          <GridItem p={3} bg={'#05A1F8'} color={"white"} borderRadius={20} area={"header1"} justifyContent={"center"} alignContent={"center"}>
            <Flex alignItems={"center"}>
                <Flex borderRadius={58} bg={"white"} p={3} alignItems={"center"} justifyContent={"center"}> 
                <Icon fontSize={'25px'} color={'green'} as={MdOutlineListAlt} />
                </Flex>
             <Flex ml={2} direction={"column"}>
                <Text fontWeight={500} fontSize={"2xl"}>
                Orders
                </Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>Purchased transactions Recorded</Text>
            </Flex>   
            </Flex>
            <Flex  mt={3} gap={1} alignItems={"center"}>
                <Text fontWeight={500} fontSize={"2xl"}>12</Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>Unsuccessful</Text>
            </Flex>
          </GridItem>

          <GridItem  p={3} bg={'#05A1F8'} color={"white"} borderRadius={20} area={"header2"} justifyContent={"center"} alignContent={"center"}>
            <Text fontSize={'15px'}>Total Sales</Text>
            <Text fontSize={'20px'} fontWeight={500}>$122</Text>
            <Text fontSize={'15px'}>Sales Per Month</Text>
          </GridItem>

          <GridItem p={3} bg={'#05A1F8'} color={"white"} borderRadius={20} area={"header3"} justifyContent={"center"} alignContent={"center"}>
          <Text fontSize={'15px'}>Average Order Per Month</Text>
            <Text fontSize={'20px'} fontWeight={500}>$5,000</Text>
            <Text fontSize={'15px'}>Average Order Monthly</Text>
          </GridItem>

          <GridItem p={3} bg={'#05A1F8'} color={"white"} borderRadius={20} area={"header4"} justifyContent={"center"} alignContent={"center"}  >
          <Text fontSize={'15px'}>Total Orders</Text>
            <Text fontSize={'20px'} fontWeight={500}>458</Text>
            <Text fontSize={'15px'}> Orders Received</Text>
          </GridItem>

          <GridItem area={"nav"} p={3} bg={'#05A1F8'} color={"white"} justifyContent={"center"} alignContent={"center"} borderRadius={20} >
          <Flex alignItems={"center"}>
                <Flex borderRadius={58} bg={"white"} p={3} alignItems={"center"} justifyContent={"center"}> 
                <Icon fontSize={'25px'} color={'red'} as={TbShoppingBagX} />
                </Flex>
             <Flex ml={2} direction={"column"}>
                <Text fontWeight={500} fontSize={"2xl"}>
                Out Of Stock
                </Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>Sold Items</Text>
            </Flex>   
            </Flex>
            <Flex  mt={3} gap={1} alignItems={"center"}>
                <Text fontWeight={500} fontSize={"2xl"}>6</Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>Products</Text>
            </Flex>
          </GridItem>

          <GridItem area={"subNav"} p={3} bg={'#05A1F8'} color={"white"} justifyContent={"center"} alignContent={"center"} borderRadius={20} >
          <Flex alignItems={"center"}>
                <Flex borderRadius={58} bg={"white"} p={3} alignItems={"center"} justifyContent={"center"}> 
                <Icon fontSize={'25px'} color={'#9747FF'} as={TiMessages} />
                </Flex>
             <Flex ml={2} direction={"column"}>
                <Text fontWeight={500} fontSize={"2xl"}>
                Chats
                </Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>New Chats</Text>
            </Flex>   
            </Flex>
            <Flex  mt={3} gap={1} alignItems={"center"}>
                <Text fontWeight={500} fontSize={"2xl"}>20</Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>New Chats</Text>
            </Flex>
          </GridItem>

          <GridItem  bgImage={"url('./dashboard1.jpg')"}
          bgSize={"cover"}
          bgPos={"center"} area={"main"}  p={3} color={"white"} justifyContent={"center"} textAlign={"center"} alignContent={"center"} borderRadius={20} >
            Main
          </GridItem>

          <GridItem area={"footer"} p={3} bg={'#F9F9F8'} color={"black"} justifyContent={"center"} textAlign={"center"} alignContent={"center"} borderRadius={20} >
            <Text fontSize={'4xl'}>REVENUE ANALYTICS</Text>
          </GridItem>

          <GridItem  area={"subNavs"} p={3} bg={'#05A1F8'} color={"white"} justifyContent={"center"} alignContent={"center"} borderRadius={20} >
          <Flex alignItems={"center"}>
                <Flex borderRadius={58} bg={"white"} p={3} alignItems={"center"} justifyContent={"center"}> 
                <Icon fontSize={'25px'} color={'green'} as={MdOutlineListAlt} />
                </Flex>
             <Flex ml={2} direction={"column"}>
                <Text fontWeight={500} fontSize={"2xl"}>
                Store Review
                </Text>
                <Text color={'#C9C8C8'} fontSize={"l"}>List Of Reviews</Text>
            </Flex>   
            </Flex>
            <Flex  mt={3} gap={1} alignItems={"center"}>
                <Text fontWeight={500} fontSize={"2xl"}>4.5/</Text>
                <Text fontSize={"l"}>5</Text>
                <Text fontSize={"l"}>(1,200 new) reviews</Text>
            </Flex>
          </GridItem>

        </Grid>




        {/* <Flex p={"20px"} direction={"column"} w={1150} >
          <Flex mb={5} gap={900} alignItems={"center"}>
            <Text fontSize={"l"} fontWeight={500}>
              Dashboard
            </Text>

            <Flex alignItems={"center"}>
              <Box w={"40px"} >
                <Image
                  borderRadius={"50px"}
                  objectFit={"cover"}
                  src="m1.jpg"
                ></Image>
              </Box>
              <Flex direction={"column"} >
                <Text fontWeight={500} >Shakur</Text>
                <Text fontSize={'12px'}>Admin</Text>
              </Flex>
            </Flex>  
          </Flex>

        <Flex gap={7}>
        <Box w={250} h={'12vh'} p={3} bg={'#05A1F8'} color={"white"} borderRadius={20}>
            <Text fontSize={'15px'}>Total Sales</Text>
            <Text fontSize={'20px'} fontWeight={500}>$122</Text>
            <Text fontSize={'15px'}>Number of sales in a month</Text>
        </Box>

        <Box w={250} h={'12vh'}  p={3} bg={'#05A1F8'} color={"white"} borderRadius={20}>
            <Text fontSize={'15px'}>Average Order Per Month</Text>
            <Text fontSize={'20px'} fontWeight={500}>$5,000</Text>
            <Text fontSize={'15px'}>Average Order Monthly</Text>
        </Box>

        <Box w={250} h={'12vh'} p={3} bg={'#05A1F8'} color={"white"} borderRadius={20}>
            <Text fontSize={'15px'}>Total Orders</Text>
            <Text fontSize={'20px'} fontWeight={500}>458</Text>
            <Text fontSize={'15px'}>Number of orders received</Text>
        </Box>

        <Box w={330}  p={4} bg={'#05A1F8'} color={"white"} borderRadius={20}>
            <Text>Total Orders</Text>
            <Text fontSize={'25px'} fontWeight={500}>458</Text>
            <Text>Number of orders received</Text>
        </Box>
        </Flex>

        <Flex gap={7}>
        <Flex borderRadius={20} w={800} h={250} p={10} bg={'red'} align={"center"} justify={"center"}> 
            <Text textAlign={"center"}>
                Some text
            </Text>
        </Flex>
        <Box h={'15vh'}  w={330} mt={3}  p={4} bg={'#05A1F8'} color={"white"} borderRadius={20}>
            <Text>Total Orders</Text>
            <Text fontSize={'25px'} fontWeight={500}>458</Text>
            <Text>Number of orders received</Text>
        </Box>
        </Flex>

        <Flex gap={7} mt={5}>
        <Flex borderRadius={20} w={800} h={250} p={10} bg={'red'} align={"center"} justify={"center"}> 
            <Text textAlign={"center"}>
                Some text
            </Text>
        </Flex>
        <Box h={'15vh'}  w={330} mt={-30} p={4} bg={'#05A1F8'} color={"white"} borderRadius={20}>
            <Text>Total Orders</Text>
            <Text fontSize={'25px'} fontWeight={500}>458</Text>
            <Text>Number of orders received</Text>
        </Box>
        </Flex>
      
        </Flex> */}

    </>
  );
};

export default dashboard;
