import { apiFetch } from "./api";
import { Service } from "@/types/service";
import { Project } from "@/types/project";
import { Testimonial } from "@/types/testimonial";
import { Article } from "@/types/article";
import { Product } from "@/types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export interface HomeResponse {
  services: Service[];
  projects: Project[];
  hero_projects: Project[];
  testimonials: Testimonial[];
  articles: Article[];
  products: Product[];
}

export function getHomeData() {
  if (isBuildTime) {
    return Promise.resolve({
      services: [],
      projects: [],
      hero_projects: [],
      testimonials: [],
      articles: [],
      products: []
    });
  }
  return apiFetch<HomeResponse>("/home");
}