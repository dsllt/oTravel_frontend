

export async function fetchCoffees(){
  try {
    const data = await fetch('https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/coffees');
    return data.json();
  } catch (e) {
    console.error('Failed to fetch coffees data.',e);
    throw new Error('Failed to fetch coffees data.');
  }
}

export async function createCoffee(data: any){
  try{
      await fetch('http://127.0.0.1:3333/register/coffees', {
      method: 'POST',
      body: JSON.stringify(data),
      cache: 'no-cache',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })

  } catch(err){
    console.error('Failed to create coffee.', err);
  }

}
