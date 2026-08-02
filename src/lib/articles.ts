import { apiFetch } from "./api";
import type { BlogCategory, Article } from "@/types/article";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export const getBlogCategories = async () => {
  if (isBuildTime) {
    return [];
  }
  return apiFetch<BlogCategory[]>("/blog-categories");
}

export const getArticles = async (): Promise<Article[]> => {
  if (isBuildTime) {
    return [];
  }

  const res = await apiFetch<{
    data: Article[];
  }>("/blogs");

  return res.data;
};

export const getArticle = async (
  slug: string
): Promise<Article> => {
  if (isBuildTime) {
    return {} as Article;
  }
  return await apiFetch(`/blogs/${slug}`);
};

export const getRelatedArticles = async (
  slug: string
): Promise<Article[]> => {
  if (isBuildTime) {
    return [];
  }
  return await apiFetch(`/blogs/${slug}/related`);
};