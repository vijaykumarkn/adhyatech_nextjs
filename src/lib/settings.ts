import { apiFetch } from "./api";
import { SettingsResponse } from "@/types/setting";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export async function getSettings() {
  if (isBuildTime) {
    return { phones: [], emails: [], addresses: [], socials: [] };
  }
  return apiFetch<SettingsResponse>("/settings");
}