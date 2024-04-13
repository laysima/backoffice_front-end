import React from "react";
import {
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  Divider,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";

const orders = () => {
  return (
    <>
      <Flex bg={"#F9F9F8"}>
        <Flex direction={"column"} p={"30px"}>
          <Flex
            p={3}
            gap={850}
            bg={"white"}
            justify={"center"}
            align={"center"}
          >
            <Text>Add New Products</Text>
            <Button p={2} bg={"#05A1F8"} color={"white"} borderRadius={0}>
              + Add Orders
            </Button>
          </Flex>

          <Grid
          bg={'white'}
          fontWeight={500}
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
              ID
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              DATE
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              CUSTOMER NAME
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              CUSTOMER ADDRESS
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              PAYMENT STATUS
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              ORDER STATUS
            </GridItem>
            <GridItem w="100%" h="10" bg='transparent' alignContent={"center"} >
              ITEMS
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
