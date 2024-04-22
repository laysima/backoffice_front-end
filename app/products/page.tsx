"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import PaginationControls from "../components/PaginationControls";
import {
  Box,
  Flex,
  Text,
  Image,
  Icon,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { MdOutlineDelete } from "react-icons/md";

const products = () => {
  return (
    <Flex bg={"#F9F9F8"} h={'100vh'}>
      <Flex mt={5}>
        <Navbar />
      </Flex>
      <Flex direction={"column"} p={"30px"} w={'100%'}>
        <Flex p={3} bg={"white"} justify={"center"} align={"center"}>
          <Flex align={"center"} grow={1}>
          <button style={{padding:'7px', background:'#05A1F8', color:'white'}} >
              <Link href={`/products/$`}>+ Add new Products</Link>
            </button>
          </Flex>

          <Flex alignItems={"center"} shrink={0}>
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
              <IconButton
                aria-label="deleting products"
                icon={<MdOutlineDelete />}
              />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={150}>
                  <Image objectFit={"cover"} src="Frame 931.png"></Image>
                </Box>
              </Flex>
              
              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
              <IconButton
                aria-label="deleting products"
                icon={<MdOutlineDelete />}
              />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={150}>
                  <Image objectFit={"cover"} src="Frame 94.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
              <IconButton
                aria-label="deleting products"
                icon={<MdOutlineDelete />}
              />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={150}>
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
              <IconButton
                aria-label="deleting products"
                icon={<MdOutlineDelete />}
              />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={150}>
                  <Image objectFit={"cover"} src="Frame 96.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
              <IconButton
                aria-label="deleting products"
                icon={<MdOutlineDelete />}
              />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={150}>
                  <Image objectFit={"cover"} src="Frame 97.png"></Image>
                </Box>
              </Flex>

              <Text>Adville Lupus </Text>
              <Text>200 </Text>
            </Flex>
          </Flex>

          <Flex p={2} justify={"center"} bg={"white"} direction={"column"}>
            <Flex justify={"right"} align={"right"} borderRadius={50}>
              <IconButton
                aria-label="deleting products"
                icon={<MdOutlineDelete />}
              />
            </Flex>
            <Flex align={"center"} direction={"column"}>
              <Flex>
                <Box w={150}>
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
