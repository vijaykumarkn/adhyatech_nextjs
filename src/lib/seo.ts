import { apiFetch } from "./api";
import { Seo } from "@/types/seo";

export async function getSeo(page: string) {
  try {
    return await apiFetch<Seo>(`/seo/${page}`);
  } catch (error) {
    // Return null for 404s or any API errors during build
    // generateMetadata functions will provide fallback
    console.warn(`SEO data not available for page: ${page}`, error);
    return null;
  }
}