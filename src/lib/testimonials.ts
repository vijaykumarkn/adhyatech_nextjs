import { apiFetch } from "./api";
import { Testimonial } from "@/types/testimonial";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export async function getTestimonials(): Promise<Testimonial[]> {
  if (isBuildTime) {
    return [];
  }
  return apiFetch<Testimonial[]>("/testimonials");
}

// export async function getTestimonialsByCategory(
//   category: string
// ): Promise<Testimonial[]> {
//   return apiFetch<Testimonial[]>(
//     `/testimonials/category/${category}`
//   );
// }

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  if (isBuildTime) {
    return [];
  }
  return apiFetch<Testimonial[]>(
    "/testimonials/featured"
  );
}