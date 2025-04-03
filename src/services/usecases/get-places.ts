import { ServiceError } from '../../domain/errors/ServiceError';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPlaces() {
  try {
    const response = await fetch(`${baseUrl}/api/v1/place`, {
      cache: 'no-store',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new ServiceError({ cause: e });
  }
}
