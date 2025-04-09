import { ServiceError } from '../../domain/errors/ServiceError';
import { MenuDTO } from '../../domain/models/menu-dto';
import { Schedule } from '../../domain/models/place';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function postMenu(menu: MenuDTO) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${baseUrl}/api/v1/menu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(menu),
    });
    if (!response.ok) {
      throw new ServiceError({
        message: `Failed to save menu. HTTP status: ${response.status}`,
        cause: response.statusText,
      });
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new ServiceError({ message: 'Failed to save menu.', cause: e });
  }
}
