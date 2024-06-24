'use client'
import { EditType } from '@/Schemas'
import { Button, Divider, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { EditProduct } from '../api'

const ProductModal = () => {

const { isOpen, onOpen, onClose } = useDisclosure()

const initialRef = useRef(null)

const finalRef = useRef(null)

const router = useRouter();

const toast = useToast();

const [loading, setLoading] = useState(false);

const [currentProduct, setCurrentProduct] = useState(false)

const [isImageLoading, setIsImageLoading] = useState(false);

const handleGoBack = () => {
  router.back(); // Navigates to the previous page
};


const [data, setData] = useState<EditType>({
  name: "",
  price: 0,
  description: "",
  category: "",
  dosage: "",
  image: "",
  weight: "",
  expirationDate: "",
});

const handleProductEdit = async (payload: EditType) => {
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
    const createdProduct = await EditProduct(payload);
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
    setData((prevData: EditType) => ({ ...prevData, [name]: parseFloat(value) }));
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
        setData((prevData: EditType) => ({ ...prevData, image: base64Data }));
      }
      setIsImageLoading(false);
    };
    reader.readAsDataURL(files[0]);
  } else {
    setData((prevData: EditType) => ({ ...prevData, [name]: value }));
  }
};
  
  return (
    <>
    <Button onClick={onOpen}>Edit</Button>
   
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef}
      isOpen={isOpen}onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent overflowY="scroll" h={'80dvh'}>
        <ModalHeader>Edit Drug Info</ModalHeader>
        <Divider border={'0.5px solid black'}/>
        <ModalCloseButton />
        <ModalBody pb={6}>

        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Upload image:
          </FormLabel>
          <Input id="image" border={0} borderRadius={0}type="file" name="image" onChange={handleInputChange}
          />
        </FormControl>

        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Product Name:
          </FormLabel>
          <Input id="name" value={data.name} variant={"flushed"} bg={"#F9F9F8"} borderRadius={0}type="text" name="name" onChange={handleInputChange}
          />
        </FormControl>

        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Price:
          </FormLabel>
          <Input id="price" variant={"flushed"} value={data.price} bg={"#F9F9F8"} borderRadius={0}type="text" name="price" onChange={handleInputChange}
          />
        </FormControl>

        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Weight:
          </FormLabel>
          <Input id="weight" variant={"flushed"} value={data.weight} bg={"#F9F9F8"} borderRadius={0}type="number" name="weight" onChange={handleInputChange}
          />
        </FormControl>

        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Dosage:
          </FormLabel>
          <Input id="dosage" variant={"flushed"} value={data.dosage} bg={"#F9F9F8"} borderRadius={0}type="text" name="dosage" onChange={handleInputChange}
          />
        </FormControl>


        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Category:
          </FormLabel>
          <Input id="category" variant={"flushed"} value={data.category}  bg={"#F9F9F8"} borderRadius={0}type="text" name="category" onChange={handleInputChange} 
          />
        </FormControl>


        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Expiration Date:
          </FormLabel>
          <Input id="expirationDate" variant={"flushed"} value={data.expirationDate} bg={"#F9F9F8"} borderRadius={0} type="date" name="expirationDate" onChange={handleInputChange}
          />
        </FormControl>

        <FormControl w={"full"} mt={6}>
          <FormLabel w={"600px"} fontWeight={"bold"}>
            Description:
          </FormLabel>
          <Input id="description" variant={"flushed"} value={data.description} bg={"#F9F9F8"} borderRadius={0} type="text" name="description" onChange={handleInputChange}
          />
        </FormControl>



        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} type='submit' onClick={() => handleProductEdit(data)} isLoading={loading} >
          {loading? 'Saving.....':  "Save"}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default ProductModal