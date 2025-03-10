import { ServiceError } from '../../domain/errors/ServiceError';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getSchedule(placeId: string) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(`${baseUrl}/api/v1/schedule/${placeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    const response = await data.json();
    return response;
  } catch (e) {
    throw new ServiceError({ message: 'Failed to fetch schedule.', cause: e });
  }
}
