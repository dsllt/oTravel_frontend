import { DebouncedState } from 'use-debounce';
import { SearchInput } from './search-input';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { CategoryDictionary } from '../../domain/constants/category-dictionary';

type SearchFiltersProps = {
  handleFilter: (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => void;
  handleSearchPlace: DebouncedState<(term: any) => void>;
  handleSearchUser: DebouncedState<(term: any) => void>;
  cities: string[];
  mappedCategories: CategoryDictionary;
  searchParams: ReadonlyURLSearchParams;
  setDisplayFilters: React.Dispatch<React.SetStateAction<boolean>>;
  clearSearchParams: () => void;
};

export function SearchFilters({
  handleFilter,
  handleSearchPlace,
  handleSearchUser,
  cities,
  mappedCategories,
  setDisplayFilters,
  clearSearchParams,
}: SearchFiltersProps) {
  return (
    <div className="flex gap-2">
      <select
        className="select select-bordered max-w-xs bg-transparent text-gray-400"
        onChange={(e) => handleFilter(e, 'category')}
      >
        <option value="">Filtre por uma categoria</option>
        {Object.entries(mappedCategories).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      <select
        className="select select-bordered max-w-xs text-gray-400 bg-transparent"
        onChange={(e) => handleFilter(e, 'city')}
      >
        <option value="" className="">
          Filtre por uma cidade
        </option>
        {cities.map((c: string) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <SearchInput
        handleSearchPlace={handleSearchPlace}
        handleSearchUser={handleSearchUser}
      />

      <div className="flex flex-col">
        <button
          className="text-sm w-full h-full pl-2 pr-2 hover:bg-[#18181b] rounded-lg"
          onClick={clearSearchParams}
        >
          Limpar filtros
        </button>

        <button
          className="text-sm w-full h-full pl-2 pr-2 hover:bg-[#18181b] rounded-lg"
          onClick={() => {
            setDisplayFilters(false);
          }}
        >
          Ocultar filtros
        </button>
      </div>
    </div>
  );
}
