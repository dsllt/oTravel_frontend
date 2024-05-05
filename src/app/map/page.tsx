import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
const placeInfo = [{
  createdAt: "2024-01-13T15:56:56.376Z",
  name: 'THE COFFEE',
  image: "https://loremflickr.com/640/480/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 656 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.035212829644085",
  longitude: "-51.210918285789916",
  rating: 4.4,
  slug: "the-coffee",
  id: "3958dc9e-742f-4377-85e9-fec4b6a6442a"
},
{
  createdAt: "2024-01-13T15:56:56.376Z",
  name: 'ESPAÇO BRASCO',
  image: "https://loremflickr.com/640/480/business",
  description: "secondary",
  address: 'Rua Fernandes Vieira, 286 - Bom Fim',
  phone: "1-392-289-9430",
  latitude: "-30.03193402658714",
  longitude: "-51.21070994496208",
  rating: 4.7,
  slug: "brasco-cafe",
  id: "9958dc9e-742f-4377-85e9-fec4b6a6442b"
}]


export default async function Page({ }) {
  const Map = useMemo(() => dynamic(
    () => import('../../components/map'),
    {
      loading: () => <p>Um mapa está sendo carregado</p>,
      ssr: false
    }
  ), [])
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='font-dmSans font-3xl font-bold mb-5 mt-3'>Encontre sua próxima experiência</h2>
      <Map places={placeInfo} />
    </div>

  );
};
