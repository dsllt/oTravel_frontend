export interface Place {
  id: string; // '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  imageUrl: string; // 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Cafe%20Landing%20Page/Cafe-Jackson-Square-Hero.jpg',
  name: string; // 'THE COFFEE',
  description: string; // '',
  address: string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  city: string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  country: string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  latitude: number; // 10.456,
  longitude: number; // 10.98,
  phone: string; // '',
  slug: string; // 'the-coffee',
  category: string[]; // 'coffee',
  rating: number; // 4.5,
  created_at: string; // 2024-01-13T15:56:56.376Z
}

export interface PlaceDTO {
  id: string; // '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  name: string; // 'THE COFFEE',
  slug: string; // 'the-coffee',
  rating: number; // 4.5,
}

export interface CreatePlaceDTO {
  name: string; //'THE COFFEE',
  image_url: string; //'https://loremflickr.com/640/480/business',
  description: string; //'secondary',
  address: string; //'Rua Fernandes Vieira, 656 - Bom Fim',
  city: string;
  country: string;
  latitude: number; //-30.035212829644085,
  longitude: number; //-51.210918285789916
  phone: string; //'1-392-289-9430',
  slug: string; //'the-coffee',
  category: string[];
}

export interface UpdatePlaceDTO {
  name: string; //'THE COFFEE',
  image_url: string; //'https://loremflickr.com/640/480/business',
  description: string; //'secondary',
  address: string; //'Rua Fernandes Vieira, 656 - Bom Fim',
  latitude: number; //-30.035212829644085,
  longitude: number; //-51.210918285789916
  phone: string; //'1-392-289-9430',
  slug: string; //'the-coffee',
}

export interface Schedule {
  weekDay: string; //'Segunda-feira',
  openAt: string; //'08:00',
  closeAt: string; //'18:00'
}

export type Categories = {
  [key: string]: string;
};

export const initialCategories: Categories = {
  RESTAURANT: 'Restaurante',
  COFFEE: 'Café',
  BAKERY: 'Padaria',
  MARKET: 'Mercado',
};

export type WeekDays = {
  [key: string]: string;
};

export const weekDays: WeekDays = {
  MONDAY: 'Segunda-feira',
  TUESDAY: 'Terça-feira',
  WEDNESDAY: 'Quarta-feira',
  THURSDAY: 'Quinta-feira',
  FRIDAY: 'Sexta-feira',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo',
};
