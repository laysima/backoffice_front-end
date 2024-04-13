import React from 'react'
import { Flex, Text, Box, Image, Link,Button, Divider, FormControl, FormLabel, FormHelperText, Input  } from '@chakra-ui/react'

const addProducts = () => {
  return (
    <>
      <Flex bg={"#F9F9F8"}>
      <Flex direction={"column"} p={"30px"}>
        <Flex p={3} gap={700} bg={"white"} justify={"center"} align={"center"}>
          <Text>Add New Products</Text>
          <Flex gap={5} alignItems={"center"}>
          <Text>Cancel</Text>
             <Button p={2} bg={"#05A1F8"} color={'white'} borderRadius={0}>
                Save Changes
            </Button>  
          </Flex>
        </Flex>

        <Flex mt={5} bg={'white'}>
          <Flex direction={'column'} p={3}>
            <Text>
              Upload Image
            </Text>
            <Text color={'#C9C8C8'}>
            Upload  Captivating images to make your product stand out
            </Text>
            <Divider border={'0.5px solid #000000'} w={'1000px'} orientation='horizontal' />


            <Flex mt={5} gap={10}>
              <Box bg={'#F9F9F8'} w={'300px'} h={'400px'} justifyContent={'center'} alignContent={'center'} _hover={{cursor:'pointer'}}>
                <Text fontSize={'2xl'} textAlign={'center'}>Click To Upload Image</Text>
              </Box>

              <Flex direction={'column'}>
              <FormControl w={'full'} >
              <FormLabel w={'600px'} fontWeight={'bold'}>Product Name:</FormLabel>
              <Input borderRadius={0} bg={'#F9F9F8'}  type='text' />
              </FormControl>

              <Flex gap={4} mt={6}>
              <FormControl w={'full'} >
              <FormLabel fontWeight={'bold'}>Category:</FormLabel>
              <Input w={'300px'}  borderRadius={0} bg={'#F9F9F8'}  type='text' />
              </FormControl>

              <FormControl w={'full'} >
              <FormLabel fontWeight={'bold'}>Sub Category</FormLabel>
              <Input w={'300px'}  borderRadius={0} bg={'#F9F9F8'}  type='text' />
              </FormControl>
              </Flex>

              <FormControl mt={6} w={'full'} >
              <FormLabel fontWeight={'bold'}>Price:</FormLabel>
              <Input w={'300px'}  borderRadius={0} bg={'#F9F9F8'}  type='number' />
              </FormControl>

              <FormControl w={'full'} mt={6} >
              <FormLabel w={'600px'} fontWeight={'bold'}>Desccription:</FormLabel>
              <Input h={'10vh'} borderRadius={0} bg={'#F9F9F8'}  type='text' />
              </FormControl>
      
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex mt={5} justify={'right'} align={'right'} >
        <Button bg={'#05A1F8'} color={'white'}>POST</Button>
        </Flex>

      </Flex>

     
      </Flex>

    </>

  
  )
}

export default addProducts