'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SearchFilters } from './search-filters';
import useExplore from '../../containers/use-explore';

export function SearchHeader() {
  const searchParams = useSearchParams();
  const [displayFilters, setDisplayFilters] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { data } = useExplore();

  const handleSearchPlace = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('queryPlace', term);
    } else {
      params.delete('queryPlace');
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const handleSearchUser = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('queryUser', term);
    } else {
      params.delete('queryUser');
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

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
    <div className="flex w-full justify-between mb-6">
      <div>
        <button className="btn btn-ghost text-xl">Busque por um local</button>
      </div>
      {displayFilters ? (
        <SearchFilters
          cities={data.cities}
          handleFilter={handleFilter}
          handleSearchPlace={handleSearchPlace}
          handleSearchUser={handleSearchUser}
          mappedCategories={data.categories}
          searchParams={searchParams}
          setDisplayFilters={setDisplayFilters}
          clearSearchParams={clearSearchParams}
        />
      ) : (
        <div>
          <button
            className="btn btn-primary text-md"
            onClick={() => setDisplayFilters(true)}
          >
            Filtros
          </button>
        </div>
      )}
    </div>
  );
}
