import { NextResponse } from "next/server";
import axios from "axios";
import { ProductType } from "@/Schemas";
import { getCookie } from "cookies-next";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

const session = getCookie("session");
  const nSession = session && JSON.parse(session);

export async function POST(request: Request) {
  
  
    const body = await request.json();
    const { category, name, weight, dosage, expirationDate, description, price, image }: ProductType = body;
    
    try {
      const URL = "/v1/product/create";
      
      const response = await client.post(URL, {category,name,weight,dosage,expirationDate,description,price,image}, {
        headers: {
          Authorization: nSession.token
        }
      });
      
      console.log('NEw PRODUCT', response.data)

      return NextResponse.json({});
    } catch(e: any) {
      console.log(e?.response?.data?.error?.message)
      throw e?.response?.data?.error?.message || 'Error creating product'
    }
}
