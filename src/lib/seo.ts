import { Seo } from "@/types/seo";

export async function getSeo(_page: string): Promise<Seo | null> {
  // Skip API calls during static generation (build time)
  // During Vercel builds, NODE_ENV=production but we still want to skip API calls
  // The API is only available at runtime for dynamic requests

  // Simply return null for all SSG/build scenarios
  // Pages will use their fallback metadata defined in generateMetadata
  return null;
}