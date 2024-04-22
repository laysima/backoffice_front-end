"use client";
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Image,
  Box,
  Icon,
  Link,
} from "@chakra-ui/react";
import { MdOutlineDashboard, MdOutlineListAlt } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { usePathname } from "next/navigation";

import React from "react";
import NextLink from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Grid templateColumns={"1"} gap={5} p={3} bg={'#F9F9F8'}>
        <GridItem
          w={"200px"}
          borderRadius={"20px"}
          ml={3}
          h={"80vh"}
          bgImage={"url('./hexagon.jpg')"}
          bgSize={"cover"}
          bgPos={"center"}
        >
          <Flex w={"full"} justify={"center"}>
            <Box w={"180px"} mt={"20px"}>
              <Image objectFit={"cover"} src="pharmainc2.svg"></Image>
            </Box>
          </Flex>

          <Flex>
            <Flex 
              p={3}
              direction={"column"}
              gap={"30px"}
              color={"#D9D9D9"}
              mt={"50px"}
            >
              <Link
                as={NextLink}
                _hover={{ cursor: "pointer" }}
                className={`link ${pathname === "/dashboard" ? "active" : ""}`}
                href="/dashboard"
              >
                <Flex gap={1} alignItems={"center"}>
                  <Icon fontSize={"l"} as={MdOutlineDashboard} />
                  <Text fontSize={"l"}>Dashboard</Text>
                </Flex>
              </Link>

              <Link
                as={NextLink}
                _hover={{ cursor: "pointer" }}
                className={`link ${pathname === "/products" ? "active" : ""}`}
                href="/products"
              >
                <Flex gap={1} alignItems={"center"}>
                  <Icon fontSize={"l"} as={FiPackage} />
                  <Text fontSize={"l"}>Products</Text>
                </Flex>
              </Link>

              <Link
                as={NextLink}
                _hover={{ cursor: "pointer" }}
                className={`link ${pathname === "/orders" ? "active" : ""}`}
                href="/orders"
              >
                <Flex gap={1} alignItems={"center"}>
                  <Icon fontSize={"l"} as={MdOutlineListAlt} />
                  <Text fontSize={"l"}>Orders</Text>
                </Flex>
              </Link>

              <Link
                as={NextLink}
                _hover={{ cursor: "pointer" }}
                className={`link ${pathname === "/chat" ? "active" : ""}`}
                href="/chat"
              >
                <Flex gap={1} alignItems={"center"}>
                  <Icon fontSize={"l"} as={TiMessages} />
                  <Text fontSize={"l"}>Messages</Text>
                </Flex>
              </Link>

              <Link
                as={NextLink}
                _hover={{ cursor: "pointer" }}
                className={`link ${pathname === "/settings" ? "active" : ""}`}
                href="/settings"
              >
                <Flex gap={1} alignItems={"center"}>
                  <Icon fontSize={"l"} as={CiSettings} />
                  <Text fontSize={"l"}>Settings</Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default Navbar;
