"use client"
import React, { useState, useEffect, RefObject } from "react";
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
  Card, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,
  Spinner,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter
} from "@chakra-ui/react";
import PaginationControls from "../components/PaginationControls";
import { DeleteProduct, GetProducts } from "@/app/api";
import { ProductType } from "@/Schemas";
import { useQuery } from "@tanstack/react-query";
import ProductModal from "../components/EditProductModal";
import { ImSpinner8 } from "react-icons/im";
import { GoInfo } from "react-icons/go";

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

    const OverlayOne = () => (
      <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='10%'
      backdropBlur='2px'
      />
    )

  const page = searchParams["page"] ?? "1";

  const per_page = searchParams["per_page"] ?? "4";

  const [loading, setLoading] = useState<boolean>(false);

  const [getData, setData] = useState<[]>(products || [])

  const [deletingProduct, setDeletingProduct] = useState<string | null>(null);

  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const cancelRef = React.useRef<any>()
  

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
        onClose(); // Close the modal after successful deletion
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
        <Flex p={2} bg={"white"}  justify={"center"} align={"center"}>
        <Flex align="center" grow={1}>
              <Button colorScheme="blue" borderRadius={0} as="a" href="/products/add">
                  + Add new Products
              </Button>
            </Flex>
              <Text flexShrink={0} borderRadius={0}>
                Products
              </Text>
            </Flex>

            {loading && (
       <Flex height="100vh" alignItems="center" justifyContent="center">
       <Spinner size="xl" />
     </Flex>
    )}
      {getData?.length > 0 && (
        <Box p={5} bg={"white"} mt={5} as="a">
        <SimpleGrid columns={3} spacing={10}>
          {getData?.map((product:any, index:any)=>(          
            <Box 
              key={index} 
              borderWidth="1px" 
              borderRadius="lg" 
              overflow="hidden" 
              boxShadow="md" 
              p={5} 
              maxW="sm"
              h="full"
            >
              <Flex align={"right"} justify={'right'} as="a" href={`products/${product.id}`}>
                <GoInfo size={'25px'}/>
              </Flex>
              <Flex direction="column" h="full">
                <Image boxSize="150px" borderRadius="10px"objectFit="cover"src={product.image}
                  alt={product.name}mx="auto"mb={4}
                />
                <SimpleGrid columns={1} spacingX="10px" spacingY="5px" mb={4}>
  
                  <Box alignContent={"center"} justifyContent={"center"}>
                    <Text fontWeight={'bold'}>{formatString(product.name)}</Text>
                  </Box>

    
                  <Box>
                    <Text>₵{product.price}</Text>
                  </Box>

      
            
                </SimpleGrid>
                <Flex justify={"center"} align={"center"} gap={8}>
                {/* <Button
                  onClick={() => deleteProduct(product.name, product.category)}
                  isLoading={deletingProduct === product.name}
                  mt="auto"
                  alignSelf="center"
                  colorScheme="red"
                >
                  {deletingProduct === product.name ? "Deleting..." : "Delete"}
                </Button> */}
                <ProductModal/>  

                {/* <Button colorScheme="red" onClick={() => {setOverlay(<OverlayOne />) 
                    onOpen()}}>
                  Delete
                </Button> */}
    
        {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Are you sure you want to delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <ModalFooter gap={4}>
              <Button onClick={onClose}>NO</Button>
              <Button
                  onClick={() => deleteProduct(product.name, product.category)}
                  isLoading={deletingProduct === product.name}
                  mt="auto"
                  alignSelf="center"
                  colorScheme="red"
                >
                  {deletingProduct === product.name ? "Deleting..." : "Delete"}
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}

<Button colorScheme='red' onClick={onOpen}>
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                  colorScheme='red' ml={3}
                  onClick={() => {
                    deleteProduct(product.name, product.category)
                  }}
                  isLoading={deletingProduct === product.name}
                  mt="auto"
                  alignSelf="center"
                >
                  {deletingProduct === product.name ? "Deleting..." : "Delete"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
                </Flex>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      )}

    

          <PaginationControls
            hasNextPage={false} // Adjust logic if you need pagination for categories
            hasPrevPage={false} // Adjust logic if you need pagination for categories
          />
        </Flex>
      </Flex>
    </>
    
  );
}
