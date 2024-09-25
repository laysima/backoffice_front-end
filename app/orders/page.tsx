'use client'
import React from "react";
import { Box, Heading, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import Link from 'next/link';
import OrderTable from "../components/OrdersTable";
import Navbar from "../components/Navbar";

export default function OrdersPage() {
  
  return (
    <Grid templateColumns="230px 1fr" height="100vh">
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Box p={6}>
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading as="h1">Orders</Heading>
            <Link href="/orders/new" passHref>
              <Button as="a" colorScheme="blue">
                Create New Order
              </Button>
            </Link>
          </Flex>
          <OrderTable />
        </Box>
      </GridItem>
    </Grid>
  )
}
