import axios from "axios";
import { ProductType } from "@/Schemas";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const CreateProduct = async ({
  category,
  name,
  weight,
  dosage,
  expirationDate,
  description,
  price,
  image,
}: ProductType) => {
  const URL = "/v1/product/create";
  try {
    const response = await client.post(URL, {
      category,
      name,
      weight,
      dosage,
      expirationDate,
      description,
      price,
      image,
    });
    const { data } = response.data;
    return data;
  } catch (e: any) {
    throw new Error(e.response.data.error.message);
  }
};

export const GetProducts = async () => {
  const URL = "/v1/products";
  try {
    const response = await client.get(URL);
    const { data } = response.data;
    return data;
  } catch (e: any) {
    throw new Error(e.response.data.error.message);
  }
};

export const DeleteProduct = async ({
  category,
  name,
}: Partial<ProductType>) => {
  const URL = "/v1/product/delete";
  try {
    const response = await client.delete(URL, {
      data: {
        category,
        name,
      },
    });
    const { data } = response.data;
    return data;
  } catch (e: any) {
    throw new Error(e.response.data.error.message);
  }
};
