'use client'
import dynamic from 'next/dynamic';
import React, { useContext, useMemo } from 'react';
import { UserContext } from '../../context/userContext';
import { MapPlaceBox } from '@ui/map/map-place-box';

export default function Page({ }) {
  const { places } = useContext(UserContext);

  const Map = useMemo(() => dynamic(
    () => import('../../components/map/map'),
    {
      loading: () => <p>Um mapa está sendo carregado</p>,
      ssr: false
    }
  ), [])
  return (
    <div className='flex items-center justify-between w-full h-full gap-4 overflow-hidden'>
      <Map places={places} />
      <div className='pr-12 flex flex-col items-start justify-start h-full overflow-y-scroll gap-4 pb-8'>
        <h2 className='font-dmSans font-3xl font-bold mb-5 mt-3'>Encontre sua próxima experiência</h2>
        {places.map(place => <MapPlaceBox key={place.id} placeInfo={place} />)}
      </div>
    </div>

  );
};
