import { apiFetch } from "./api";
import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export function getProducts() {
  if (isBuildTime) {
    return Promise.resolve([]);
  }
  return apiFetch<Product[]>("/products");
}

export function getProduct(slug: string) {
  if (isBuildTime) {
    return Promise.resolve({} as Product);
  }
  return apiFetch<Product>(`/products/${slug}`);
}