"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Box, Flex, Text, Image, Icon, IconButton, Link } from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";

const products = () => {
  return (
    <Flex bg={"#F9F9F8"}>
      <Flex direction={"column"} p={"30px"}>
        <Flex p={3} gap={770} bg={"white"} justify={"center"} align={"center"}>
          <Flex gap={5} align={"center"}>
            <Text>Products</Text>
            <Text p={2} bg={"#B8E0F7"} borderRadius={100}>
                <Link   href={`/products/$`}>
                + Add new Products
                </Link>
            </Text>
          </Flex>

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

        <Flex mt={5} justify={"space-evenly"}>
          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
            <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={200}>
                  <Image objectFit={"cover"} src="Frame 931.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
            <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={200}>
                  <Image objectFit={"cover"} src="Frame 94.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
            <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={200}>
                  <Image objectFit={"cover"} src="Frame 95.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex mt={5} justify={"space-evenly"}>
          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
            <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={200}>
                  <Image objectFit={"cover"} src="Frame 96.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
            <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={200}>
                  <Image objectFit={"cover"} src="Frame 97.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
            <IconButton aria-label='deleting products' icon={<MdOutlineDelete />} />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={200}>
                  <Image objectFit={"cover"} src="Frame 98.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  );
};

export default products;
