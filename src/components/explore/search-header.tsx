'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { UserContext } from '../../context/userContext';
import { categoryDictionary } from '../../domain/constants/category-dictionary';
import { SearchFilters } from './search-filters';

export interface CategoryDictionary {
  [key: string]: string;
}

export function SearchHeader() {
  const searchParams = useSearchParams();
  const [displayFilters, setDisplayFilters] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  const { cities, categories } = useContext(UserContext);
  const mappedCategories = categories.reduce<CategoryDictionary>(
    (acc, category) => {
      acc[category] = categoryDictionary[category];
      return acc;
    },
    {},
  );

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
          cities={cities}
          handleFilter={handleFilter}
          handleSearchPlace={handleSearchPlace}
          handleSearchUser={handleSearchUser}
          mappedCategories={mappedCategories}
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
