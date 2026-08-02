const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Detect if we're in build mode
const isBuildTime = typeof window !== 'undefined'
  ? false
  : !API_URL || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && typeof process.env.CI !== 'undefined';

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  // Skip API calls during build time - return empty data
  if (!API_URL || isBuildTime) {
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