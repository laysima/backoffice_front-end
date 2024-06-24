import { NextResponse } from "next/server";
import axios from "axios";
import { LoginType } from "@/Schemas";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password}: LoginType = body;
    const URL = "/v1/user/login";
    const response = await client.post(URL, {username, password});
    const { data } = response.data;
    return NextResponse.json(data, { status: 200 });
}
