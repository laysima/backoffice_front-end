"use client";
import {
  Text,
  Input,
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  FormHelperText,
  Link,
  Flex,
  InputRightElement,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import NextLink from "next/link";

const dashboard = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Grid templateColumns="1fr 4fr">
      <GridItem
        h={"100vh"}
        bgImage={"url('./hexagon.jpg')"}
        bgSize={"cover"}
        bgPos={"center"}
      >
        <Flex justify={"center"} w={"full"} mt={"100%"}>
          <Text color={"white"} fontSize={"4xl"}>
            ADMIN
          </Text>
        </Flex>
      </GridItem>

      <GridItem h={"100vh"} bg={"white"}>
        <Flex justify={"center"} w={"full"}>
          <Box w={"300px"} mt={"60px"}>
            <Image objectFit={"cover"} src="pharmainc.svg"></Image>
          </Box>
        </Flex>

        <Flex justify={"center"} w={"full"} mb={10}>
          <FormControl w={"30rem"} p={"62px 28px"} borderRadius={7}>
            <Flex direction={"column"} gap={1}>
              <Text
                fontWeight={500}
                fontFamily={'"Outfit", sans-serif'}
                fontSize={"4xl"}
              >
                LOGIN
              </Text>
            </Flex>

            <Flex mt={5} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <Input
                  borderRadius={0}
                  boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"}
                  h={"7vh"}
                  border={"1px solid #EAEFF2"}
                  type="email"
                  placeholder="USERNAME......."
                />
              </Flex>
            </Flex>

            <Flex mt={8} direction={"column"} w={"full"} align={"center"}>
              <Flex direction={"column"} align={"start"} w={"full"}>
                <InputGroup size="md">
                  <Input
                    borderRadius={0}
                    boxShadow={"1px 1px 8px 5px #EAEFF2, 0 0 10px #EAEFF2"}
                    h={"7vh"}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="PASSWORD....."
                  />
                  <InputRightElement width="4.5rem" mt={2} justifyContent={"center"}>
                    <button
                      style={{
                        fontSize: "m",
                        backgroundColor: "none",
                      }}
                      onClick={handleClick}
                    >
                      {show ? <BsEye /> : <BsEyeSlash />}
                    </button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Flex>

            <Flex justify={"center"} mt={10}>
              <button
                style={{
                  fontWeight: "500",
                  background: "#0881DE",
                  padding: "10px",
                  borderRadius: "7px",
                  color: "white",
                  width: "60%",
                }}
              >
                {" "}
                LOGIN
              </button>
            </Flex>
          </FormControl>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default dashboard;
