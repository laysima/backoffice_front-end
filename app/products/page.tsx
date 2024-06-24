"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../globals.css";
import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  useToast,
  GridItem,
  Grid,
  VStack,
  Card, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import PaginationControls from "../components/PaginationControls";
import { DeleteProduct, GetProducts } from "@/app/api";
import { ProductType } from "@/Schemas";
import { useQuery } from "@tanstack/react-query";
import ProductModal from "../components/ProductModal";


function formatString(name: string): string {
  return name.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

export default function GetAllProducts({
  searchParams, }: { searchParams: { [key: string]: string | string[] | undefined };
}): JSX.Element {

  const { data: products } = useQuery({queryKey: ['products'], queryFn: async () => {
    const res = await fetch('/api/products')
    return res?.ok ? res.json() : []
    }})

  const page = searchParams["page"] ?? "1";

  const per_page = searchParams["per_page"] ?? "4";

  const [loading, setLoading] = useState<boolean>(false);

  const [getData, setData] = useState<[]>(products || [])

  const [deletingProduct, setDeletingProduct] = useState<string | null>(null);

  const toast = useToast();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async (): Promise<void> => {
    setLoading(true);
    try {
      const data = await GetProducts();
      if (data && typeof data === "object") {
        setData(data);
      } else {
        ;
        toast({
          title: "Unexpected response format",
          status: "error",
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Couldn't fetch product data. Check your internet connection",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (
    name: string,
    category: string
  ): Promise<void> => {
    setDeletingProduct(name);
    try {
      const data = await DeleteProduct({ category, name });
      if (data) {
        toast({
          title: "Success",
          status: "success",
          isClosable: true,
        });
        getAllProducts();
      }
    } catch (error) {
      toast({
        title: "Couldn't delete product. Try again",
        status: "error",
        isClosable: true,
      });
    } finally {
      setDeletingProduct(null);
    }
  };

  return (
    <>
    <Flex bg="#F9F9F8">
      <Flex>
        <Navbar />
      </Flex>
      <Flex direction={"column"} p={"30px"} w={"100%"} overflowY="scroll" h={'100dvh'}>
      <Flex p={6} bg={"white"}  justify={"center"} align={"center"}>
      <Flex align="center" grow={1}>
            <Button p={2} colorScheme="blue" borderRadius={0}>
              <Link href="/products/$">+ Add new Products</Link>
            </Button>
          </Flex>
            <Text flexShrink={0} p={2} borderRadius={0}>
              Products
            </Text>
          </Flex>

    <Box p={5}>
      <SimpleGrid columns={3} spacing={10}>
        {getData?.map((product:any, index:any)=>(          
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={5} maxW="sm"
            h="full">
            <Flex direction="column" h="full">
              <Image boxSize="150px" borderRadius="10px"objectFit="cover"src={product.image}
                alt={product.name}mx="auto"mb={4}
              />
              <SimpleGrid columns={2} spacingX="10px" spacingY="5px" mb={4}>
                <Box>
                  <Text fontWeight={900}>Name:</Text>
                </Box>
                <Box>
                  <Text>{formatString(product.name)}</Text>
                </Box>

                <Box>
                  <Text fontWeight={900}>Price:</Text>
                </Box>
                <Box>
                  <Text>₵{product.price}</Text>
                </Box>

                <Box>
                  <Text fontWeight={900}>Weight:</Text>
                </Box>
                <Box>
                  <Text>{product.weight}</Text>
                </Box>

                <Box>
                  <Text fontWeight={900}>Dosage:</Text>
                </Box>
                <Box>
                  <Text>{product.dosage}</Text>
                </Box>

                <Box>
                  <Text fontWeight={900}>Category:</Text>
                </Box>
                <Box>
                  <Text>{formatString(product.category)}</Text>
                </Box>

                <Box>
                  <Text fontWeight={900}>Expiration Date:</Text>
                </Box>
                <Box>
                  <Text>{product.expirationDate}</Text>
                </Box>

                <Box>
                  <Text fontWeight={900}>Description:</Text>
                </Box>
                <Box>
                  <Text>{product.description}</Text>
                </Box>
              </SimpleGrid>
              <Flex justify={"center"} align={"center"} gap={8}>
              <Button
                onClick={() => deleteProduct(product.name, product.category)}
                isLoading={deletingProduct === product.name}
                mt="auto"
                alignSelf="center"
                colorScheme="red"
              >
                {deletingProduct === product.name ? "Deleting..." : "Delete"}
              </Button>
              <ProductModal/>              
              </Flex>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

  

        <PaginationControls
          hasNextPage={false} // Adjust logic if you need pagination for categories
          hasPrevPage={false} // Adjust logic if you need pagination for categories
        />
      </Flex>
    </Flex>


   
</>
    
  );
}
