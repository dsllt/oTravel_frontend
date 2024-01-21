'use server'
import { z } from 'zod';
import { createCoffee } from './data';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CoffeeFormSchema = z.object({
  id:  z.string(),
  name:  z.string({
    invalid_type_error: 'Defina o nome do café.',
  }),
  description:  z.string({
    invalid_type_error: 'Defina uma descrição para o café.',
  }),
  address:  z.string({
    invalid_type_error: 'Defina um endereço para o café.',
  }),
  phone:  z.string(),
  rating: z.coerce.number(),
  image:  z.string({
    invalid_type_error: 'Defina uma imagem para o café.',
  }),
  slug: z.string({
    invalid_type_error: 'Defina um slug para o café.',
  }),
  latitude: z.coerce.number({
    invalid_type_error: 'Defina a latitude do endereço do café.',
  }),
  longitude: z.coerce.number({
    invalid_type_error: 'Defina a longitude do endereço do café.',
  }),
  created_at: z.date(),
});

const CreateCoffee = CoffeeFormSchema.omit({ id: true, created_at: true });

export type State = {
  errors?: {
    name?: string[];
    address?: string[];
    latitude?: string[];
    longitude?: string[];
    phone?: string[];
    image?: string[];
    description?: string[];
    slug?: string[];
    rating?: string[];
  };
  message?: string | null;
};

export async function includeCoffee(prevState: State, formData: FormData){

  const validatedFields = CreateCoffee.safeParse({
    name: formData.get('coffeeName'),
    address: formData.get('coffeeAddress'),
    latitude: formData.get('coffeeLatitude'),
    longitude: formData.get('coffeeLongitude'),
    phone: formData.get('coffeePhone'),
    image: formData.get('coffeeImage'),
    description: formData.get('coffeeDescription'),
    slug: formData.get('coffeeSlug'),
    rating: 0
  });

  if (!validatedFields.success){
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Existem campos não preenchidos. Falha ao criar novo café.'
    }
  }

  try{
    await createCoffee(validatedFields.data);
  } catch (err) {
    return{
      message: 'Database Error: Falha ao criar café'
    }
  }

  revalidatePath('/new-coffee');
  redirect('/');
}
