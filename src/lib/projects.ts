import { apiFetch } from "./api";
import { Project } from "@/types/project";
import { PortfolioResponse } from "@/types/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export function getPortfolio() {
    if (isBuildTime) {
        return Promise.resolve({ featured: [], projects: [], categories: [] });
    }
    return apiFetch<PortfolioResponse>("/porfolio");
}

export async function getProjects(): Promise<Project[]> {
    if (isBuildTime) {
        return [];
    }
    return apiFetch<Project[]>("/projects");
}

// export async function getFeaturedProjects(): Promise<Project[]> {
//     return apiFetch<Project[]>("/projects/featured");
// }

export async function getProject(
    slug: string
): Promise<Project> {
    return apiFetch<Project>(`/projects/${slug}`);
}

export async function getRelatedProjects(
    slug: string
): Promise<Project[]> {
    return apiFetch<Project[]>(
        `/projects/${slug}/related`
    );
}