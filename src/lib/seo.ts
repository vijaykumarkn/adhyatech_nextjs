import { apiFetch } from "./api";
import { Seo } from "@/types/seo";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export function getSeo(page: string) {
  if (isBuildTime) {
    return Promise.resolve({
      meta_title: '',
      meta_description: '',
      meta_keywords: '',
      meta_robots: '',
      og_title: '',
      og_description: '',
      meta_image: ''
    });
  }
  return apiFetch<Seo>(`/seo/${page}`);
}