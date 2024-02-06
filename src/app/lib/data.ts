import { CreateCoffeeDTO, UpdateCoffeeDTO } from "./type-definitions";


export async function fetchCoffees(){
  try {
    const data = await fetch('https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/coffees', { cache: 'no-store' });
    return data.json();
  } catch (e) {
    console.error('Failed to fetch coffees data.',e);
    throw new Error('Failed to fetch coffees data.');
  }
}

export async function fetchCoffee(coffeeId: string){
  try {
    const data = await fetch(`https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/coffees/${coffeeId}`, { cache: 'no-store' });
    return data.json();
  } catch (e) {
    console.error('Failed to fetch coffee data.',e);
    throw new Error('Failed to fetch coffee data.');
  }
}

export async function fetchCreateCoffee(data: CreateCoffeeDTO){
  try{
      // await fetch('http://127.0.0.1:3333/register/coffees', {
      await fetch('https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/coffees', {
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

export async function fetchUpdateCoffee(data: UpdateCoffeeDTO, id: string){
  try{
    await fetch(`https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/coffees/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
} catch(err){
  console.error('Failed to update coffee.', err);
}
}
