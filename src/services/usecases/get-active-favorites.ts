import { ServiceError } from '../../domain/errors/ServiceError';
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getActiveFavorites() {
  const token = localStorage.getItem('token');
  if (!token) return;
  try {
    const response = await fetch(`${baseUrl}/api/v1/favorite/active`, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.length === 0) {
      return [];
    }
    return data[0].favorites;
  } catch (e) {
    throw new ServiceError({ cause: e });
  }
}
