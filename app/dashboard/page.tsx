"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Flex, Box, Text, Image, Grid, GridItem, Icon, Button, StatGroup, Stat, StatLabel, StatNumber, StatArrow, StatHelpText } from "@chakra-ui/react";
import { MdOutlineListAlt, MdSearch } from "react-icons/md";
import { TbShoppingBagX } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import WeekChart from "../components/WeekChart";
import PieChart from  "../components/PieChart";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";
import LineChart from "../components/LineChart";
import { IoPersonCircleOutline } from "react-icons/io5";
import DataTableDemo from "../components/DataTableDemo";


const dashboard = () => {
  
  const router = useRouter();

  const session = getCookie("session");
  const nSession = session && JSON.parse(session);

  const handleLogout = () => {
    deleteCookie("session");
    router.replace("/");
  };

  return (
    <>
    <Flex bg={"#F9F9F8"} w={"100%"} h={"100dvh"}>
      <Flex >
      <Navbar/>
      </Flex>
      <Flex direction={"column"} p={"20px"} w={"100%"} overflowY="scroll" h={'100dvh'}>
      <Flex p={2} bg={"white"}  justify={"center"} align={"center"} gap={4}>
        <Flex gap={3} align={"center"} flexGrow={1}>
          <Text>Dashboard</Text>
        </Flex>

        <Flex align={"center"}>
          <Icon as={IoPersonCircleOutline} boxSize={10} />
          <Text flexShrink={0} fontWeight={500} ml={2} fontSize={"17px"}>
            {nSession ? nSession?.username : "/"}
          </Text>
        </Flex>

        {/* {nSession && (
          <Button colorScheme="red" leftIcon={<BiLogOut />} onClick={handleLogout}  type="submit">
            Log Out
          </Button>
        )} */}
      </Flex>

      <Grid
        w={"100%"}
        pt={"20px"}
        templateAreas={`
                "header2 header3 header4 header1"
                "main main main nav"
                "main main main subNav"
                "main main main subNavi"  
                "mains mains mains mains" 
                "footer footer footer subnavi" 
          `}
        gridTemplateRows={"1fr 1fr 1fr 1fr"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        h="200px"
        width={'full'}
        gap="3"
        color="blackAlpha.700"
      >
        <GridItem  border={'0.5px solid #C5C5C5'} h={130} p={3} bg={"white"} color={"black"} borderRadius={5} area={"header1"}
          justifyContent={"center"} alignContent={"center"}>
          <Flex alignItems={"center"}>
            <Flex ml={2} direction={"column"}>
              <Text fontWeight={500} fontSize={"xl"}>
                Orders
              </Text>
              <Text color={"#04295d"} fontSize={"l"}>
                Purchased transactions Recorded
              </Text>
            </Flex>
          </Flex>
          <Flex mt={3} gap={1} alignItems={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              12
            </Text>
            <Text color={"#04295d"} fontSize={"l"}>
              Unsuccessful
            </Text>
          </Flex>
        </GridItem>

        <GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"header2"} justifyContent={"center"}
          alignContent={"center"} >
         <StatGroup>
          <Stat>
            <StatLabel>Total Sales</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
            </StatHelpText>
          </Stat>
          </StatGroup>
        </GridItem>

        <GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"header3"} justifyContent={"center"}
          alignContent={"center"}>
             <StatGroup>
          <Stat>
            <StatLabel>Order Per Month</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type='decrease' />
              23.36%
            </StatHelpText>
          </Stat>
          </StatGroup>
        </GridItem>

        <GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"header4"}justifyContent={"center"}
          alignContent={"center"}>
          <StatGroup>
            <Stat>
              <StatLabel>Total Orders</StatLabel>
              <StatNumber>670</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                4.36%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </GridItem>

        <GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"nav"} justifyContent={"center"}
          alignContent={"center"}>
          <Flex alignItems={"center"}>
            <Flex ml={2} direction={"column"}>
              <Text fontWeight={500} fontSize={"xl"}>
                Out Of Stock
              </Text>
              <Text color={"#041E42"} fontSize={"l"}>
                Sold Items
              </Text>
            </Flex>
          </Flex>
          <Flex mt={3} gap={1} alignItems={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              6
            </Text>
            <Text color={"#041E42"} fontSize={"l"}>
              Products
            </Text>
          </Flex>
        </GridItem>

        <GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"subNav"} justifyContent={"center"}
          alignContent={"center"}>
          <Flex alignItems={"center"}>
            <Flex ml={2} direction={"column"}>
              <Text fontWeight={500} fontSize={"xl"}>
                Chats
              </Text>
              <Text color={"#04295d"} fontSize={"l"}>
                New Chats
              </Text>
            </Flex>
          </Flex>
          <Flex mt={3} gap={1} alignItems={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              20
            </Text>
            <Text color={"#04295d"} fontSize={"l"}>
              New Chats
            </Text>
          </Flex>
        </GridItem>

        <GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"main"} justifyContent={"center"}
          alignContent={"center"}>
         <WeekChart></WeekChart>
        </GridItem>


         {/* <GridItem
          mt={10}
          area={"footer"}
          h={400}
          bg={"white"}
          color={"black"}
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          borderRadius={5}
        >
        <LineChart/>
        </GridItem> */}


<GridItem border={'0.5px solid #C5C5C5'} p={3} bg={"white"} color={"black"} borderRadius={5} area={"subNavi"} justifyContent={"center"}
          alignContent={"center"}>
          <Flex alignItems={"center"}>
            <Flex direction={"column"}>
              <Text fontWeight={500} fontSize={"xl"}>
                Store Review
              </Text>
              <Text color={"#04295d"} fontSize={"l"}>
                List Of Reviews
              </Text>
            </Flex>
          </Flex>
          <Flex mt={3} gap={1} alignItems={"center"}>
            <Text fontWeight={500} fontSize={"xl"}>
              4.5/
            </Text>
            <Text fontSize={"l"}>5</Text>
            <Text fontSize={"l"}>(1,200 new) reviews</Text>
          </Flex>
        </GridItem>  

        <GridItem mt={5} border={'0.5px solid #C5C5C5'}  area={"mains"} p={3} bg={"white"} color={"black"} borderRadius={5}>
            <Box>Top Selling Products</Box>
            <Box >
            <DataTableDemo/>
            </Box>
        </GridItem> 
      </Grid>
      </Flex>
        </Flex>

    </>
  );
};

export default dashboard;
