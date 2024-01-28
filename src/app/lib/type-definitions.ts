// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: number;
  name: string;
  email: string;
  image: string;
  password_hash: string;
  is_admin: boolean;
  created_at: string;
};

export type UserDTO = {
  id: number;
  name: string;
  email: string;
  image: string;
  is_admin: boolean;
  created_at: string;
}

export type Coffee = {
  id:  string; // '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  name:  string; // 'THE COFFEE',
  description:  string; // '',
  address:  string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  phone:  string; // '',
  rating: number; // 4.5,
  image:  string; // 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Cafe%20Landing%20Page/Cafe-Jackson-Square-Hero.jpg',
  slug: string;// 'the-coffee',
  latitude: number;// 10.456,
  longitude: number;// 10.98,
  created_at: Date;// 2024-01-13T15:56:56.376Z
};

export type CreateCoffeeDTO = {
    name: string;//'THE COFFEE',
    description: string;//'secondary',
    address: string;//'Rua Fernandes Vieira, 656 - Bom Fim',
    phone: string;//'1-392-289-9430',
    rating: number;//0,
    image: string;//'https://loremflickr.com/640/480/business',
    slug: string;//'the-coffee',
    latitude: number;//-30.035212829644085,
    longitude: number;//-51.210918285789916
}

export type UpdateCoffeeDTO = {
    name: string;//'THE COFFEE',
    description: string;//'secondary',
    address: string;//'Rua Fernandes Vieira, 656 - Bom Fim',
    phone: string;//'1-392-289-9430',
    image: string;//'https://loremflickr.com/640/480/business',
    slug: string;//'the-coffee',
    latitude: number;//-30.035212829644085,
    longitude: number;//-51.210918285789916
}


export type FoodType = {
  category: string;
  name: string;
  type: string;
};

export type Review =   {
  id: number; // 1,
  review: string; // "Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte! Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito. O atendimento é ótimo.",
  rating: number; // 4.5,
  created_at: string; // "2024-01-21T09:46:10.477Z",
  user_id: number; // 1,
  coffee_id: number; // 1
}
