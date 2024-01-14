export async function fetchCoffees(){
  try {
    const data = await fetch('https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/coffees');
    return data.json();
  } catch (e) {
    console.error('Failed to fetch coffees data.',e);
    throw new Error('Failed to fetch coffees data.');
  }
}