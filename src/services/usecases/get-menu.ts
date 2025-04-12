import { ServiceError } from '../../domain/errors/ServiceError';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getMenu(placeId: string) {
  try {
    const data = await fetch(`${baseUrl}/api/v1/menu/${placeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await data.json();
    return response;
  } catch (e) {
    throw new ServiceError({ message: 'Failed to fetch menu.', cause: e });
  }
}
