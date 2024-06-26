'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { UserContext } from '../../context/userContext';
import { categoryDictionary } from '../../utils/dictionary';

export function SearchHeader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { cities } = useContext(UserContext);


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

  return (
    <div className="navbar bg-base-100 px-8 w-full gap-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Busque por um local</a>
      </div>
      <select
        className="select select-bordered max-w-xs text-gray-400"
        onChange={e => handleFilter(e, 'category')}
      >
        <option value="">Filtre por uma categoria</option>
        {Object.entries(categoryDictionary).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>
      <select
        className="select select-bordered max-w-xs text-gray-400"
        onChange={e => handleFilter(e, 'city')}
      >
        <option value="" className=''>Filtre por uma cidade</option>
        {cities.map(c => <option key={c}>{c}</option>)}
      </select>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Busque por um local"
            className="input input-bordered w-32 md:w-auto text-sm text-gray-400"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  )
}