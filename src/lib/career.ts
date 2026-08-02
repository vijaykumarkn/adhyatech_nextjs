import { apiFetch } from "./api";
import { CareerResponse } from "@/types/career";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export async function getCareerData(): Promise<CareerResponse> {
    if (isBuildTime) {
        return { perks: [], jobs: [] };
    }
    return apiFetch<CareerResponse>("/careers");
}