'use client'
import { Box, Text, Spinner, Flex, Grid, GridItem, Heading, Divider, Card, CardHeader, CardBody, Image, Icon, Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';

const ProductDetails = ({params}: { params: { id: string }}) => {

    const id = params.id;

    const { data: product, isLoading  } = useQuery({queryKey: [`product_${id}`, id], queryFn: async () => {
      const res = await fetch(`/api/products/${id}`)
      return res?.ok ? res.json() : []
      }, ...{enabled:!!id}})

      console.log(product)

      const router = useRouter()

      const handleGoBack = () => {
        router.back(); // Navigates to the previous page
      };

 
    
  return (
    <>

    {isLoading && (
        <Flex height="100vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Flex>
      )}

    {product && (
        <>
<Flex alignItems="center" justifyContent="center" minHeight="100vh" p={5}>
            <Card maxW="600px" w="full" boxShadow="lg" borderRadius="lg">
              <CardHeader bg="blue.500" color="white" borderTopRadius="lg" p={4}>
                <Heading size="md">Product Details</Heading>
              </CardHeader>
              <CardBody p={6}>
                <Image src={product.image} alt={product.name} borderRadius="md"  />
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <GridItem colSpan={2}>
                    <Text fontSize="2xl" fontWeight="bold" mb={4}>{product.name}</Text>
                    <Divider mb={4} />
                  </GridItem>
                  
                  <GridItem>
                    <Text fontWeight={900}>Price:</Text>
                  </GridItem>
                  <GridItem>
                    <Text>₵{product.price}</Text>
                  </GridItem>

                  <GridItem>
                    <Text fontWeight={900}>Weight:</Text>
                  </GridItem>
                  <GridItem>
                    <Text>{product.weight}</Text>
                  </GridItem>

                  <GridItem>
                    <Text fontWeight={900}>Dosage:</Text>
                  </GridItem>
                  <GridItem>
                    <Text>{product.dosage}</Text>
                  </GridItem>

                  <GridItem>
                    <Text fontWeight={900}>Category:</Text>
                  </GridItem>
                  <GridItem>
                    <Text>{product.category}</Text>
                  </GridItem>

                  <GridItem>
                    <Text fontWeight={900}>Expiration Date:</Text>
                  </GridItem>
                  <GridItem>
                    <Text>{product.expirationDate}</Text>
                  </GridItem>

                  <GridItem>
                    <Text fontWeight={900}>Description:</Text>
                  </GridItem>
                  <GridItem>
                    <Text>{product.description}</Text>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
            <Flex ml={10}>
      <Button onClick={handleGoBack}>Go back</Button>
    </Flex>
          </Flex>
        </>
    )}
    </>
  )
}

export default ProductDetails