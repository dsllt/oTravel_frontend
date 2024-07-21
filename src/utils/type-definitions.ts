// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  password_hash: string;
  is_admin: boolean;
  created_at: string;
};

export type UserDTO = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  is_admin: boolean;
  created_at: string;
}

export type Place = {
  id:  string; // '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  image_url:  string; // 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Cafe%20Landing%20Page/Cafe-Jackson-Square-Hero.jpg',
  name:  string; // 'THE COFFEE',
  description:  string; // '',
  address:  string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  city:  string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  country:  string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  latitude: number;// 10.456,
  longitude: number;// 10.98,
  phone:  string; // '',
  slug: string;// 'the-coffee',
  category: string[]; // 'coffee',
  rating: number; // 4.5,
  created_at: Date;// 2024-01-13T15:56:56.376Z
};

export type PlaceFavorite ={
  name: string;
  image_url: string;
  address: string;
  city: string;
  country: string;
  slug: string;
  rating: number;
}

export type UserFavorites = {
  id: string;
  name: string;
  email: string;
  is_admin: boolean; 
  is_public: boolean;
  image_url: string;
  created_at: Date;
  favorites: PlaceFavorite[],
}

export type CreatePlaceDTO = {
    name: string;//'THE COFFEE',
    image_url: string;//'https://loremflickr.com/640/480/business',
    description: string;//'secondary',
    address: string;//'Rua Fernandes Vieira, 656 - Bom Fim',
    latitude: number;//-30.035212829644085,
    longitude: number;//-51.210918285789916
    phone: string;//'1-392-289-9430',
    slug: string;//'the-coffee',
    rating: number;//0,
}

export type UpdatePlaceDTO = {
    name: string;//'THE COFFEE',
    image_url: string;//'https://loremflickr.com/640/480/business',
    description: string;//'secondary',
    address: string;//'Rua Fernandes Vieira, 656 - Bom Fim',
    latitude: number;//-30.035212829644085,
    longitude: number;//-51.210918285789916
    phone: string;//'1-392-289-9430',
    slug: string;//'the-coffee',
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
  place_id: number; // 1
}
