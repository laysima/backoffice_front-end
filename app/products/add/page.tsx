"use client";
import React, { useState } from "react";
import {
  Flex,
  Text,
  Box,
  Image,
  Link,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Icon,
  Input,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { CreateProduct } from "@/app/api";
import { AddProductSchema, AddType, ProductType } from "@/Schemas";


const AddProducts = () => {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);


  const handleGoBack = () => {
    router.back(); // Navigates to the previous page
  };

  const [data, setData] = useState<ProductType>({
    name: "",
    price: 0,
    description: "",
    category: "",
    dosage: "",
    image: "",
    weight: "",
    expirationDate: "",
  });

  const handleProductCreate = async (payload: ProductType) => {
    if (isImageLoading) {
      toast({
        title: "Image is still uploading, please wait.",
        status: "info",
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const createdProduct = await CreateProduct(payload);
      if (createdProduct) {
        toast({
          title: "Success",
          status: "success",
          isClosable: true,
        });
        console.log('created product', createdProduct);
        router.back();
      }
    } catch (e: any) {
      toast({
        title: e.message,
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
  
    if (name === "price") {
      setData((prevData: ProductType) => ({ ...prevData, [name]: parseFloat(value) }));
    } else if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      setIsImageLoading(true);
      reader.onloadend = () => {
        const result = reader.result;
        let base64Data: string | undefined;
  
        if (typeof result === "string") {
          base64Data = result.slice(result.indexOf(',') + 1); 
        } else if (result instanceof ArrayBuffer) {
          console.warn("ArrayBuffer detected for image upload. Conversion required.");
        }
  
        if (base64Data) {
          setData((prevData: ProductType) => ({ ...prevData, image: base64Data }));
        }
        setIsImageLoading(false);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setData((prevData: ProductType) => ({ ...prevData, [name]: value }));
    }
  };
  
  

  return (
    <>
      <Flex ml={10}>
        <Icon
          cursor={"pointer"}
          onClick={handleGoBack}
          fontSize={"50px"}
          as={IoIosArrowRoundBack}
        />
      </Flex>
      <Flex justify={"center"} bg={"#F9F9F8"} align={"center"} h={"100vh"} >
        <Flex bg={"#F9F9F8"}>
          <Flex direction={"column"} p={"30px"}>
            <Flex p={3} gap={700} bg={"white"} border={'0.5px solid grey'} borderRadius={5} justify={"center"} align={"center"}>
              <Text>Add New Products</Text>
 
            </Flex>

            <Flex mt={5} bg={"white"} border={'0.5px solid grey'} borderRadius={5}>
              <Flex direction={"column"} p={3}>
                <Text>Upload Image</Text>
                <Text color={"#C9C8C8"}>
                  Upload Captivating images to make your product stand out
                </Text>
                <Divider
                  border={"0.5px solid #000000"}
                  w={"1000px"}
                  orientation="horizontal"
                />
    
                <Flex mt={5} gap={10}>
                  <Box
                    bg={"#F9F9F8"}
                    w={"300px"}
                    h={"500px"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    _hover={{ cursor: "pointer" }}
                  >
                    <Input
                      id="image"
                      display={"inline-block"}
                      border={"none"}
                      type="file"
                      name="image"
                      onChange={handleInputChange}
                    />
                  </Box>
                  <Flex direction={"column"}>
                    <FormControl w={"full"}>
                      <FormLabel w={"600px"} fontWeight={"bold"}>
                        Product Name:
                      </FormLabel>
                      <Input
                        id="name"
                        variant={"flushed"}
                        bg={"#F9F9F8"}
                        borderRadius={0}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}
                      />
                    </FormControl>

                    <Flex gap={4} mt={6}>
                      <FormControl w={"full"}>
                        <FormLabel fontWeight={"bold"}>Category:</FormLabel>
                        <Input
                          id="category"
                          variant={"flushed"}
                          bg={"#F9F9F8"}
                          w={"300px"}
                          borderRadius={0}
                          type="text"
                          name="category"
                          value={data.category}
                          onChange={handleInputChange}
                        />
                      </FormControl>

                      <FormControl w={"full"}>
                        <FormLabel fontWeight={"bold"}>Dosage</FormLabel>
                        <Input id="dosage" variant={"flushed"} bg={"#F9F9F8"} w={"300px"} borderRadius={0} type="text"
                          name="dosage" value={data.dosage} onChange={handleInputChange}/>
                      </FormControl>
                    </Flex>

                    <Flex>
                      <FormControl mt={6} w={"full"}>
                        <FormLabel fontWeight={"bold"}>Price:</FormLabel>
                        <Input
                          id="price"
                          variant={"flushed"}
                          bg={"#F9F9F8"}
                          w={"300px"}
                          borderRadius={0}
                          type="number"
                          name="price"
                          value={data.price}
                          onChange={handleInputChange}
                        />
                      </FormControl>

                      <FormControl mt={6} w={"full"}>
                        <FormLabel fontWeight={"bold"}>Weight:</FormLabel>
                        <Input
                          id="weight"
                          variant={"flushed"}
                          bg={"#F9F9F8"}
                          w={"300px"}
                          placeholder="in kg"
                          borderRadius={0}
                          type="number"
                          name="weight"
                          value={data.weight}
                          onChange={handleInputChange}
                        />
                      </FormControl>
                    </Flex>

                    <FormControl mt={6} w={"full"}>
                      <FormLabel fontWeight={"bold"}>
                        Expiration Date:
                      </FormLabel>
                      <Input
                        id="expirationDate"
                        variant={"flushed"}
                        bg={"#F9F9F8"}
                        w={"300px"}
                        type="date"
                        borderRadius={0}
                        name="expirationDate"
                        value={data.expirationDate}
                        onChange={handleInputChange}
                      />
                    </FormControl>

                    <FormControl w={"full"} mt={6}>
                      <FormLabel w={"600px"} fontWeight={"bold"}>
                        Description:
                      </FormLabel>
                      <Input
                        id="description"
                        variant={"flushed"}
                        bg={"#F9F9F8"}
                        h={"10vh"}
                        borderRadius={0}
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleInputChange}
                      />
                    </FormControl>

                    <Flex mt={5} justify={"right"} align={"right"}>
                      <Button
                        colorScheme="blue"
                        onClick={() => handleProductCreate(data)}
                        color={"white"}
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Creating Product" : "Submit"}
                      </Button>
                    </Flex>
                  </Flex>

                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AddProducts;