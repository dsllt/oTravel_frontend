const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getFavorites(userId: string) {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(`${baseUrl}/api/v1/favorites/${userId}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return data.json();
  } catch (e) {
    throw new Error('Failed to fetch user favorites.');
  }
}
