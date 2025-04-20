import { ServiceError } from '../../domain/errors/ServiceError';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function putFavorite(userId: string, placeId: string) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(
      `${baseUrl}/api/v1/favorite/${userId}?placeId=${placeId}`,
      {
        cache: 'no-store',
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new ServiceError({ cause: e });
  }
}
