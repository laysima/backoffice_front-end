'use client'
import React from "react";
import { Flex, Text, Button, Grid, GridItem, Link, Divider, Box, Stack, SimpleGrid, IconButton, ButtonGroup, Icon,
  useColorModeValue,chakra,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import OrderTable from "../components/OrdersTable";

const Orders = () => {


  return (
    <>
      <Flex bg={"#F9F9F8"} w={"100%"} h={"100vh"}>
        <Flex>
          <Navbar />
        </Flex>
        {/* <Flex direction={"column"} p={"30px"} w={"100%"}>
          <Flex p={3} bg={"white"} justify={"center"} align={"center"}>
            <Flex gap={3} align={"center"} flexGrow={1}>
              <button
                style={{
                  padding: "7px",
                  background: "#05A1F8",
                  color: "white",
                }}
              >
                <Link href={`/orders/$`}>Order Details</Link>
              </button>
            </Flex>
            <Button
              flexShrink={0}
              p={2}
              bg={"#05A1F8"}
              color={"white"}
              borderRadius={0}
            >
              + Add Orders
            </Button>
          </Flex>

          <Grid
            bg={"white"}
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
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              1086
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              12, Aug 2024
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              Shakur
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              PLanners Avenue, Spintex
            </GridItem>

            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              <Box bg={"#C3EEB8"}>
                <Flex
                  gap={3}
                  alignItems={"center"}
                  justifyContent={"center"}
                  p={2}
                >
                  <Box
                    borderRadius={"full"}
                    w={"15px"}
                    h={"15px"}
                    bg={"#63B96C"}
                  ></Box>
                  <Text color={"black"}>paid</Text>
                </Flex>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
              <Flex
                gap={3}
                alignItems={"center"}
                justifyContent={"center"}
                p={2}
              >
                <Box
                  borderRadius={"full"}
                  w={"15px"}
                  h={"15px"}
                  bg={"#63B96C"}
                ></Box>
                <Text color={"black"}>Delivered</Text>
              </Flex>
            </GridItem>
            <GridItem w="100%" h="10" bg="transparent" alignContent={"center"}>
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
        </Flex> */}
    <Flex w={'100%'} p={6}> 
        <OrderTable/>
    </Flex>
      </Flex>

      



    


{/* <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        w="full"
        bg={{
          md: bg,
        }}
        shadow="lg"
      >
        {data.map((token, tid) => (
          <Flex
            key={tid}
            direction="column"
            bg={bg2}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            shadow="md"
            mb={4}
            mx={2}
            flexGrow={1}
          >
            <SimpleGrid columns={2} spacing={4} mb={4}>
              <Text fontWeight="bold">Name:</Text>
              <Text>{token.name}</Text>
              <Text fontWeight="bold">Created:</Text>
              <Text>{token.created}</Text>
              <Text fontWeight="bold">Data:</Text>
              <Text>{token.data}</Text>
              <Text fontWeight="bold">gggg:</Text>
              <Text>{token.gggg}</Text>
              <Text fontWeight="bold">555t5:</Text>
              <Text>{token["555t5"]}</Text>
              <Text fontWeight="bold">r4rrfrfr:</Text>
              <Text>{token.r4rrfrfr}</Text>
              <Text fontWeight="bold">rgggghgrfr:</Text>
              <Text>{token.rgggghgrfr}</Text>
            </SimpleGrid>
            <ButtonGroup spacing={2}>
              <IconButton
                colorScheme="blue"
                icon={<BsBoxArrowUpRight />}
                aria-label="Up"
              />
              <IconButton
                colorScheme="green"
                icon={<AiFillEdit />}
                aria-label="Edit"
              />
              <IconButton
                colorScheme="red"
                variant="outline"
                icon={<BsFillTrashFill />}
                aria-label="Delete"
              />
            </ButtonGroup>
          </Flex>
        ))}
      </Stack>
    </Flex> */}

{/* <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        w="full"
        bg={{
          md: bg,
        }}
        shadow="lg"
        spacing={6}
        borderRadius="md"
        overflowX="auto"
      >
        <SimpleGrid
          columns={7}
          w="full"
          bg={bg3}
          color="gray.500"
          py={2}
          px={4}
          fontWeight="bold"
          fontSize="sm"
          borderBottomWidth="1px"
          borderColor="gray.300"
          justifyContent="center"
          textAlign="center"
        >
          <Text>Name</Text>
          <Text>Created</Text>
          <Text>Data</Text>
          <Text>gggg</Text>
          <Text>555t5</Text>
          <Text>r4rrfrfr</Text>
          <Text>rgggghgrfr</Text>
        </SimpleGrid>

        {data.map((token, tid) => (
          <SimpleGrid
            key={tid}
            columns={7}
            w="full"
            bg={bg2}
            color="gray.700"
            py={2}
            px={4}
            fontWeight="normal"
            fontSize="sm"
            borderBottomWidth="1px"
            borderColor="gray.300"
            justifyContent="center"
            textAlign="center"
          >
            <Text>{token.name}</Text>
            <Text>{token.created}</Text>
            <Text>{token.data}</Text>
            <Text>{token.gggg}</Text>
            <Text>{token["555t5"]}</Text>
            <Text>{token.r4rrfrfr}</Text>
            <Text>{token.rgggghgrfr}</Text>
          </SimpleGrid>
        ))}
      </Stack>
    </Flex> */}
    </>
  );
};

export default Orders;
