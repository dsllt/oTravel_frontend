import { ServiceError } from '../../domain/errors/ServiceError';
import { MenuDTO } from '../../domain/models/menu-dto';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function putMenu(item: MenuDTO, menuId: number) {
  const token = localStorage.getItem('token');
  const menuBody = {
    name: item.name,
    price: item.price,
  };
  try {
    const response = await fetch(`${baseUrl}/api/v1/menu/${menuId}`, {
      cache: 'no-store',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        body: JSON.stringify(menuBody),
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw new ServiceError({ cause: e });
  }
}
