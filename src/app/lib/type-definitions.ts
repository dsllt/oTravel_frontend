// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Coffee = {
  id:  string; // '3958dc9e-742f-4377-85e9-fec4b6a6442a',
  name:  string; // 'THE COFFEE',
  description:  string; // '',
  address:  string; // 'Rua Fernandes Vieira, 656 - Bom Fim',
  phone:  string; // '',
  rating: string; // 4.5,
  imageUrl:  string; // 'https://res.cloudinary.com/hbhhv9rz9/image/upload/f_auto,c_limit,w_3840,q_auto/cafes/Cafe%20Landing%20Page/Cafe-Jackson-Square-Hero.jpg',
  slug: string;// 'the-coffee',
  latitude: string;// 10.456,
  longitude: string;// 10.98,
};

export type CoffeeType = {
  category: string;
  name: string;
  type:string;
};

export type FoodType = {
  category: string;
  name: string;
  type:string;
};

