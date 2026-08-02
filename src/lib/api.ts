const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect build time - API is not available during Vercel builds
const isBuildTime = typeof window === 'undefined' &&
  (!API_URL || process.env.CI === 'true' || process.env.VERCEL === '1');

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  // Skip API calls during build time - return empty data to avoid crash
  if (isBuildTime) {
    // Return empty array by default (most common case)
    return [] as unknown as T;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}