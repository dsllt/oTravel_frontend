'use client'
import dynamic from 'next/dynamic';
import React, { useContext, useMemo } from 'react';
import { UserContext } from '../../context/userContext';

export default function Page({ }) {
  const { places } = useContext(UserContext);

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
      <Map places={places} />
    </div>

  );
};
