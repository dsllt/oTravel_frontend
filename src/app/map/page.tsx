import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

export default async function Page({ }) {
  const Map = useMemo(() => dynamic(
    () => import('../../components/Map'),
    {
      loading: () => <p>Um mapa está sendo carregado</p>,
      ssr: false
    }
  ), [])
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='font-dmSans font-3xl font-bold mb-5 mt-3'>Encontre sua próxima experiência</h2>
      <Map />
    </div>

  );
};
