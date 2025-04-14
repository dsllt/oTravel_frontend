import { ServiceError } from '../../domain/errors/ServiceError';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function deleteMenu(menuId: string) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${baseUrl}/api/v1/menu/${menuId}`, {
      cache: 'no-store',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new ServiceError({ cause: e });
  }
}
