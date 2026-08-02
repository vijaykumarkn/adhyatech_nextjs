import { apiFetch } from "./api";
import { Service } from "@/types/service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export async function getServices(): Promise<Service[]> {
  if (isBuildTime) {
    return [];
  }
  return apiFetch<Service[]>("/services");
}

// export async function getHomepageServices(): Promise<Service[]> {
//   return apiFetch<Service[]>(
//     "/services/homepage"
//   );
// }

// export async function getService(
//   slug: string
// ): Promise<Service> {
//   return apiFetch<Service>(
//     `/services/${slug}`
//   );
// }

// export async function getServicesByBand(
//   band: string
// ): Promise<Service[]> {
//   return apiFetch<Service[]>(
//     `/services/band/${band}`
//   );
// }