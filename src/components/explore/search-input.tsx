import { ReadonlyURLSearchParams } from "next/navigation";
import { useState } from "react";
import { DebouncedState } from "use-debounce";

type SearchInputProps = {
  handleSearch: DebouncedState<(term: any) => void>,
  searchParams: ReadonlyURLSearchParams
}

export function SearchInput({ handleSearch, searchParams }: SearchInputProps) {
  const [searchInput, setSearchInput] = useState('place');

  return (
    <div className='flex'>
      <div className='flex flex-col justify-between items-start'>
        <button
          className="text-sm w-full h-full rounded-tl-md pl-2 pr-2"
          style={{ backgroundColor: searchInput === 'place' ? '#b2ccd633' : 'transparent' }}
          onClick={() => setSearchInput('place')}
        >
          Local
        </button>
        <button
          className="text-sm w-full h-full rounded-bl-md pl-2 pr-2"
          onClick={() => setSearchInput('user')}
          style={{ backgroundColor: searchInput === 'user' ? '#b2ccd633' : 'transparent' }}
        >
          Usuário
        </button>
      </div>
      {searchInput === 'place' ? (
        <div className="form-control">
          <input
            type="text"
            placeholder="Busque por um local"
            className="bg-transparent border rounded-tr-lg rounded-br-lg border-[#b2ccd633] p-[13px] w-32 md:w-auto text-sm text-gray-400"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      ) : (
        <div className="form-control">
          <input
            type="text"
            placeholder="Busque por um usuário"
            className="bg-transparent border rounded-tr-lg rounded-br-lg border-[#b2ccd633] p-[13px] w-32 md:w-auto text-sm text-gray-400"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  )
}