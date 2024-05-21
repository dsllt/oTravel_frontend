import { CreatePlaceDTO, UpdatePlaceDTO } from "./type-definitions";


export async function fetchPlaces(){
  try {
    const response = await fetch('http://localhost:8080/places', { cache: 'no-store' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Failed to fetch places data.',e);
    throw new Error('Failed to fetch places data.');
  }
}

export async function fetchPlace(placeId: string){
  try {
    const data = await fetch(`http://localhost:8080/places/${placeId}`, { cache: 'no-store' });
    console.log(data);
    return data.json();
  } catch (e) {
    console.error('Failed to fetch place data.',e);
    throw new Error('Failed to fetch place data.');
  }
}

export async function fetchCreatePlace(data: CreatePlaceDTO){
  try{
      // await fetch('http://127.0.0.1:3333/register/places', {
      await fetch('https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/places', {
      method: 'POST',
      body: JSON.stringify(data),
      cache: 'no-cache',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })

  } catch(err){
    console.error('Failed to create place.', err);
  }

}

export async function fetchUpdatePlace(data: UpdatePlaceDTO, id: string){
  try{
    await fetch(`https://65a2bb8542ecd7d7f0a825df.mockapi.io/api/v1/places/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
} catch(err){
  console.error('Failed to update place.', err);
}
}
