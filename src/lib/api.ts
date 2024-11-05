const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchAPI(endpoint: string, options = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return await res.json();
}