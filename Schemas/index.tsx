import { z } from "zod";

export const ProductSchema = z.object({
  category: z.string({ required_error: "Required" }),
  name: z.string({ required_error: "Required" }),
  weight: z.string({required_error: "Required" }),
  dosage: z.string({required_error: "Required" }),
  expirationDate: z.string({required_error: "Required" }),
  description: z.string().optional(),
  price: z.number({ required_error: "Required" }),
  image: z.string({ required_error: "Required" }),
});

export type ProductType = z.infer<typeof ProductSchema>;
