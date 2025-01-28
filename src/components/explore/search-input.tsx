import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DebouncedState } from 'use-debounce';

type SearchInputProps = {
  handleSearchPlace: DebouncedState<(term: any) => void>;
  handleSearchUser: DebouncedState<(term: any) => void>;
};

export function SearchInput({
  handleSearchPlace,
  handleSearchUser,
}: SearchInputProps) {
  const [searchInput, setSearchInput] = useState('place');
  const [placeValue, setPlaceValue] = useState('');
  const [userValue, setUserValue] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const placeQuery = searchParams.get('queryPlace')?.toString();
    const userQuery = searchParams.get('queryUser')?.toString();

    if (placeQuery) {
      return setPlaceValue(placeQuery);
    }

    if (userQuery) {
      return setPlaceValue(userQuery);
    }
    setPlaceValue('');
    setUserValue('');
  }, [searchParams]);

  return (
    <div className="flex">
      <div className="flex flex-col justify-between items-start">
        <button
          className="text-sm w-full h-full rounded-tl-md pl-2 pr-2"
          style={{
            backgroundColor:
              searchInput === 'place' ? '#18181b' : 'transparent',
          }}
          onClick={() => setSearchInput('place')}
        >
          Local
        </button>
        <button
          className="text-sm w-full h-full rounded-bl-md pl-2 pr-2"
          onClick={() => setSearchInput('user')}
          style={{
            backgroundColor: searchInput === 'user' ? '#18181b' : 'transparent',
          }}
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
            value={placeValue}
            onChange={(e) => {
              handleSearchPlace(e.target.value);
              setPlaceValue(e.target.value);
            }}
          />
        </div>
      ) : (
        <div className="form-control">
          <input
            type="text"
            placeholder="Busque por um usuário"
            className="bg-transparent border rounded-tr-lg rounded-br-lg border-[#b2ccd633] p-[13px] w-32 md:w-auto text-sm text-gray-400"
            value={userValue}
            onChange={(e) => {
              handleSearchUser(e.target.value);
              setUserValue(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}
