import { apiFetch } from "./api";
import { Seo } from "@/types/seo";

export async function getSeo(page: string) {
  // Skip API call during build time to prevent build failures
  // SEO endpoints will be used in production when available
  if (process.env.NEXT_PUBLIC_API_URL && process.env.NODE_ENV === 'production') {
    try {
      return await apiFetch<Seo>(`/seo/${page}`);
    } catch (error) {
      // Silently return null - don't log to avoid build noise
      return null;
    }
  }

  // During build or when API_URL is not set, return null
  // generateMetadata functions will use fallback metadata
  return null;
}