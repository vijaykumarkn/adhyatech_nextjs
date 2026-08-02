import { apiFetch } from "./api";

import { Team } from "@/types/team";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export async function getTeamData(): Promise<Team[]> {
  if (isBuildTime) {
    return [];
  }
  return apiFetch<Team[]>("/teams");
}