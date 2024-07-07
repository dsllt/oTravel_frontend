'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { UserContext } from '../../context/userContext';
import { categoryDictionary } from '../../utils/dictionary';
import { SearchFilters } from './SearchFilters';

export interface CategoryDictionary {
  [key: string]: string;
}

export function SearchHeader() {
  const [displayFilters, setDisplayFilters] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { cities, categories } = useContext(UserContext);
  const mappedCategories = categories.reduce<CategoryDictionary>((acc, category) => {
    acc[category] = categoryDictionary[category];
    return acc;
  }, {});


  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 300);

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>, type: string) => {
    const params = new URLSearchParams(searchParams);

    if (type === 'city') {
      params.set('city', event.target.value)
    } else if (type === 'category') {
      params.set('category', event.target.value)
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const clearSearchParams = () => {
    // Create a new instance of URLSearchParams without any parameters
    const params = new URLSearchParams();

    // Use the replace function to update the URL without any search parameters
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex w-full justify-between mb-6">
      <div>
        <a className="btn btn-ghost text-xl">Busque por um local</a>
      </div>
      {displayFilters ? (
        <SearchFilters cities={cities} handleFilter={handleFilter} handleSearch={handleSearch} mappedCategories={mappedCategories} searchParams={searchParams} setDisplayFilters={setDisplayFilters} clearSearchParams={clearSearchParams} />
      ) : (
        <div>
          <a className="btn btn-primary text-md" onClick={() => setDisplayFilters(true)}>Filtros</a>
        </div>
      )}

    </div>
  )
}



