"use client";
import React, { useState, useRef } from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Icon,
  useToast,
  Avatar,
  AvatarBadge,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEditLine } from "react-icons/ri";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { getCookie } from "cookies-next";

type Inputs = {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  avatar: FileList;
};

const Settings = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const toast = useToast();

  const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>();

  const session = getCookie("session");
  
  const nSession = session && JSON.parse(session);

  function formatName(name: string) {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    return firstName;
  }


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    if (data.avatar && data.avatar[0]) {
      const file = data.avatar[0];
      setAvatarUrl(URL.createObjectURL(file));
    }
    toast({
      title: "Settings updated.",
      description: "Your changes have been saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Flex bg="#F0F4F8" w="100%" h="100dvh">
      <Flex>
        <Navbar />
      </Flex>
      <Flex direction="column" p="30px" w="100%" overflowY="scroll" h="100dvh">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex p={4} bg="white" justify="space-between" align="center" borderRadius="lg" boxShadow="sm">
            <Text fontSize="2xl" fontWeight="bold">Settings</Text>
            <Flex align="center">
              <Icon as={IoPersonCircleOutline} boxSize={10} color="blue.500" />
              <Text fontWeight={500} ml={2} fontSize="17px">
                {nSession ? formatName(nSession?.name) : "/"}
              </Text>
            </Flex>
          </Flex>
        </motion.div>

        <Box mt={8} bg="white" p={6} borderRadius="lg" boxShadow="md">
          <VStack spacing={6} align="stretch">
            <HStack justify="center">
              <Box position="relative" onClick={handleAvatarClick} cursor="pointer">
                <Avatar size="xl" name="John Doe" src={avatarUrl || "/path-to-default-avatar.jpg"}>
                  <AvatarBadge
                    as={Icon}
                    boxSize="1.25em"
                    rounded="full"
                    top="-10px"
                    aria-label="Upload Image"
                  >
                    <RiEditLine />
                  </AvatarBadge>
                </Avatar>
              </Box>
            </HStack>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="file"
                {...register("avatar")}
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input {...register("name", { required: "Name is required" })} />
                  {errors.name && <Text color="red.500">{errors.name.message}</Text>}
                </FormControl>

                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} />
                  {errors.email && <Text color="red.500">{errors.email.message}</Text>}
                </FormControl>

                <FormControl>
                  <FormLabel>Current Password</FormLabel>
                  <Input type="password" {...register("currentPassword", { required: "Current password is required" })} />
                  {errors.currentPassword && <Text color="red.500">{errors.currentPassword.message}</Text>}
                </FormControl>

                <FormControl>
                  <FormLabel>New Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("newPassword", { minLength: { value: 8, message: "Password must be at least 8 characters" } })}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {errors.newPassword && <Text color="red.500">{errors.newPassword.message}</Text>}
                </FormControl>

                <FormControl>
                  <FormLabel>Confirm New Password</FormLabel>
                  <Input
                    type="password"
                    {...register("confirmPassword", {
                      validate: (value) => value === watch("newPassword") || "The passwords do not match"
                    })}
                  />
                  {errors.confirmPassword && <Text color="red.500">{errors.confirmPassword.message}</Text>}
                </FormControl>

                <Button type="submit" colorScheme="blue" mt={4}>
                  Save Changes
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Settings;
