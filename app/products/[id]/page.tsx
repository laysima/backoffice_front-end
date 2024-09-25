'use client'
import { Box, Text, Spinner, Flex, VStack, Heading, Divider, Image, Button, Container, SimpleGrid, Badge } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';

const ProductDetails = ({params}: { params: { id: string }}) => {

	const id = params.id;

	const router = useRouter();

	const { data: product, isLoading } = useQuery({
		queryKey: [`product_${id}`, id],
		queryFn: async () => {
			const res = await fetch(`/api/products/${id}`)
			return res?.ok ? res.json() : null
		},
		enabled: !!id
	});

	const handleGoBack = () => router.back();

	function formatNumber(num: number, currency = 'GHS') {
		return num.toLocaleString('en-US', { style: 'currency', currency });
	  }

	function formatString(name: string): string {
		return name.replace(
		/\w\S*/g,
		(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
		).replace(/_/g, ' ');
	}

	if (isLoading) {
		return (
			<Flex height="100vh" alignItems="center" justifyContent="center">
				<Spinner size="xl" />
			</Flex>
		);
	}

	if (!product) {
		return (
			<Container maxW="container.xl" py={10}>
					<Text>Product not found</Text>
					<Button mt={4} onClick={handleGoBack} leftIcon={<IoIosArrowRoundBack />}>Go back</Button>
			</Container>
		);
	}

	return (
		<Container maxW="container.xl" py={10}>
			<Button mb={6} onClick={handleGoBack} leftIcon={<IoIosArrowRoundBack />}>Go back</Button>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Box>
					<Image src={product.image} alt={product.name} borderRadius="lg" objectFit="cover" w="100%" h="auto" />
				</Box>
				<VStack align="stretch" spacing={6}>
					<Heading size="xl">{formatString(product.name)}</Heading>
					<Badge colorScheme="blue" fontSize="md" alignSelf="flex-start">{product.category}</Badge>
					<Text fontSize="3xl" fontWeight="bold" color="blue.500">
						{formatNumber(product.price)}
					</Text>
					<Divider />
					<SimpleGrid columns={2} spacing={4}>
						<Box>
							<Text fontWeight="bold">Weight:</Text>
							<Text>{product.weight}</Text>
						</Box>
						<Box>
							<Text fontWeight="bold">Dosage:</Text>
							<Text>{product.dosage}</Text>
						</Box>
						<Box>
							<Text fontWeight="bold">Expiration Date:</Text>
							<Text>{product.expirationDate}</Text>
						</Box>
					</SimpleGrid>
					<Box>
						<Text fontWeight="bold" mb={2}>Description:</Text>
						<Text>{product.description}</Text>
					</Box>
				</VStack>
			</SimpleGrid>
		</Container>
	);
}

export default ProductDetails;