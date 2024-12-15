import { CreatePlaceDTO } from '../../domain/models/place';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function postPlace(data: CreatePlaceDTO) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`${baseUrl}/api/v1/place`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Failed to create place.', err);
  }
}
