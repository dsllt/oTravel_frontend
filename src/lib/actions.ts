'use server'
import { z } from 'zod';
import { fetchCreatePlace, fetchUpdatePlace } from './data';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const PlaceFormSchema = z.object({
  id:  z.string(),
  name:  z.string({
    invalid_type_error: 'Defina o nome do local.',
  }),
  image_url:  z.string({
    invalid_type_error: 'Defina uma imagem para o local.',
  }),
  description:  z.string({
    invalid_type_error: 'Defina uma descrição para o local.',
  }),
  address:  z.string({
    invalid_type_error: 'Defina um endereço para o local.',
  }),
  phone:  z.string(),
  rating: z.coerce.number(),
  slug: z.string({
    invalid_type_error: 'Defina um slug para o local.',
  }),
  latitude: z.coerce.number({
    invalid_type_error: 'Defina a latitude do endereço do local.',
  }),
  longitude: z.coerce.number({
    invalid_type_error: 'Defina a longitude do endereço do local.',
  }),
  created_at: z.date(),
});

const CreatePlace = PlaceFormSchema.omit({ id: true, created_at: true });

export type State = {
  errors?: {
    name?: string[];
    image_url?: string[];
    address?: string[];
    latitude?: string[];
    longitude?: string[];
    phone?: string[];
    description?: string[];
    slug?: string[];
    rating?: string[];
  };
  message?: string | null;
};

export async function includePlace(prevState: State, formData: FormData){

  const validatedFields = CreatePlace.safeParse({
    name: formData.get('placeName'),
    image_url: formData.get('placeImage'),
    description: formData.get('placeDescription'),
    address: formData.get('placeAddress'),
    latitude: formData.get('placeLatitude'),
    longitude: formData.get('placeLongitude'),
    phone: formData.get('placePhone'),
    slug: formData.get('placeSlug'),
    rating: 0
  });

  if (!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Existem campos não preenchidos. Falha ao criar novo local.'
    }
  }

  try{
    await fetchCreatePlace(validatedFields.data);
  } catch (err) {
    return{
      message: 'Database Error: Falha ao criar local'
    }
  }

  revalidatePath('/new-place');
  redirect('/');
}

const UpdatePlace = PlaceFormSchema.omit({ id: true, created_at: true, rating: true});

export async function updatePlace(id: string,
  prevState: State, formData: FormData){
  const validatedFields = UpdatePlace.safeParse({
    name: formData.get('placeName'),
    address: formData.get('placeAddress'),
    latitude: formData.get('placeLatitude'),
    longitude: formData.get('placeLongitude'),
    phone: formData.get('placePhone'),
    image: formData.get('placeImage'),
    description: formData.get('placeDescription'),
    slug: formData.get('placeSlug'),
  });

  if (!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Existem campos não preenchidos. Falha ao editar local.'
    }
  }

  try{
    await fetchUpdatePlace(validatedFields.data, id);
  } catch (err) {
    return{
      message: 'Database Error: Falha ao editar local'
    }
  }

  revalidatePath('/');
  redirect('/');
}