import { UserDTO } from '../../domain/models/user';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function putUser(data: UserDTO) {
  const token = localStorage.getItem('token');
  try {
    await fetch(`${baseUrl}/api/v1/user/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Failed to update user.', err);
  }
}
