'use client';
import dynamic from 'next/dynamic';
import React, { useContext, useState } from 'react';
import { MapPlaceBox } from '@ui/maps/map-place-box';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MapPlacesFilter } from '@ui/maps/map-places-filter';
import useMap from '../../../containers/useMap';

const Map = dynamic(() => import('../../../components/maps/map'), {
  loading: () => <p>Um mapa está sendo carregado</p>,
  ssr: false,
});

export default function MapPage() {
  const { data } = useMap();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [displayFilters, setDisplayFilters] = useState(false);

  const category = searchParams.get('category') || '';
  const city = searchParams.get('city') || '';

  const handleFilter = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => {
    const params = new URLSearchParams(searchParams);

    if (type === 'city') {
      params.set('city', event.target.value);
    } else if (type === 'category') {
      params.set('category', event.target.value);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const clearSearchParams = () => {
    const params = new URLSearchParams();

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-between w-full h-full overflow-hidden gap-8">
      <Map places={data.places} key={`${category}-${city}`} />
      <div className="pr-12 flex flex-col items-start justify-start h-full w-full gap-3">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-dmSans font-3xl font-bold mb-5 mt-3">
            Encontre sua próxima experiência
          </h2>
          <button
            className="btn btn-primary text-md min-h-1 h-8"
            onClick={() => setDisplayFilters(true)}
          >
            Filtros
          </button>
        </div>
        {displayFilters && (
          <MapPlacesFilter
            cities={data.cities}
            mappedCategories={data.categories}
            handleFilter={handleFilter}
            clearSearchParams={clearSearchParams}
            setDisplayFilters={setDisplayFilters}
          />
        )}

        <div className="flex flex-col items-start justify-start h-full overflow-y-scroll gap-4 pb-8 w-full">
          {data.filteredPlaces.map((place) => (
            <MapPlaceBox key={place.id} placeInfo={place} />
          ))}
        </div>
      </div>
    </div>
  );
}
