import { ServiceError } from '../../domain/errors/ServiceError';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function deleteMenu(menuId: number) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`${baseUrl}/api/v1/menu/${menuId}`, {
      cache: 'no-store',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    throw new ServiceError({ cause: e });
  }
}
