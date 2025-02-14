const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUser() {
  const token = localStorage.getItem('token');
  try {
    const data = await fetch(`${baseUrl}/api/v1/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    const response = await data.json();
    if (response.status === 200) return response;
    if (response.status === 401) {
      localStorage.removeItem('token');
    }
  } catch (e) {
    console.error('Failed to fetch user data.', e);
    throw new Error('Failed to fetch user data.');
  }
}
