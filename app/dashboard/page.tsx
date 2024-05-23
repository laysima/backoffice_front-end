"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Flex, Box, Text, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { MdOutlineListAlt } from "react-icons/md";
import { TbShoppingBagX } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import WeekChart from "../components/WeekChart";
import PieChart from  "../components/PieChart";

const dashboard = () => {
  return (
    <>
    <Flex>
      <Flex >
      <Navbar/>
      </Flex>
      <Flex direction={"column"} mt={5}>
      <Flex bg={"#F9F9F8"} mb={'30px'} p={5} gap={900} alignItems={"center"}>
        <Text fontSize={"l"} fontWeight={500}>
          Dashboard
        </Text>

        <Flex alignItems={"center"}>
          <Box w={"40px"}>
            <Image
              borderRadius={"50px"}
              objectFit={"cover"}
              src="m1.jpg"
            ></Image>
          </Box>
          <Flex direction={"column"}>
            <Text fontWeight={500}>Shakur</Text>
            <Text fontSize={"12px"}>Admin</Text>
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
        h="200px"
        width={'full'}
        gap="3"
        color="blackAlpha.700"
      >
        <GridItem
          h={130}
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          borderRadius={5}
          area={"header1"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Flex alignItems={"center"}>
            <Flex
              p={3}
            >
              <Icon fontSize={"25px"} color={"green"} as={MdOutlineListAlt} />
            </Flex>
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

        <GridItem
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          borderRadius={5}
          area={"header2"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Text fontSize={"15px"}>Total Sales</Text>
          <Text fontSize={"20px"} fontWeight={500}>
            $122
          </Text>
          <Text fontSize={"15px"}>Sales Per Month</Text>
        </GridItem>

        <GridItem
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          borderRadius={5}
          area={"header3"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Text fontSize={"15px"}>Average Order Per Month</Text>
          <Text fontSize={"20px"} fontWeight={500}>
            $5,000
          </Text>
          <Text fontSize={"15px"}>Average Order Monthly</Text>
        </GridItem>

        <GridItem
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          borderRadius={5}
          area={"header4"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Text fontSize={"15px"}>Total Orders</Text>
          <Text fontSize={"20px"} fontWeight={500}>
            458
          </Text>
          <Text fontSize={"15px"}> Orders Received</Text>
        </GridItem>

        <GridItem
           h={130}
          area={"nav"}
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          borderRadius={5}
        >
          <Flex alignItems={"center"}>
            <Flex
              p={3}
            >
              <Icon fontSize={"25px"} color={"red"} as={TbShoppingBagX} />
            </Flex>
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

        <GridItem
          h={130}
          area={"subNav"}
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          borderRadius={5}
        >
          <Flex alignItems={"center"}>
            <Flex
              p={3}
            >
              <Icon fontSize={"25px"} color={"#9747FF"} as={TiMessages} />
            </Flex>
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

        <GridItem
          mt={10}
          bgSize={"cover"}
          bgPos={"center"}
          area={"main"}
          h={'300px'}
          color={"white"}
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
        >
         <WeekChart></WeekChart>
        </GridItem>

        {/* <GridItem
          mt={10}
          area={"footer"}
          h={400}
          bg={"#F9F9F8"}
          color={"black"}
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          borderRadius={5}
        >
         <PieChart></PieChart>
        </GridItem> */}

        <GridItem
          h={130}
          area={"subNavs"}
          p={3}
          bg={"#F9F9F8"}
          color={"black"}
          justifyContent={"center"}
          alignContent={"center"}
          borderRadius={5}
        >
          <Flex alignItems={"center"}>
            <Flex
              p={3}
            >
              <Icon fontSize={"25px"} color={"green"} as={MdOutlineListAlt} />
            </Flex>
            <Flex ml={2} direction={"column"}>
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
      </Grid>

        </Flex>
        </Flex>
    </>
  );
};

export default dashboard;
