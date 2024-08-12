import { CategoryDictionary } from "@ui/explore/search-header";

type MapPlacesFilterProps = {
  mappedCategories: CategoryDictionary;
  cities: string[];
  handleFilter: (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => void;
  clearSearchParams: () => void;
  setDisplayFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MapPlacesFilter({
  mappedCategories,
  cities,
  handleFilter,
  clearSearchParams,
  setDisplayFilters,
}: MapPlacesFilterProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <select
        className="select select-bordered max-w-xs bg-transparent text-gray-400"
        onChange={(e) => handleFilter(e, "category")}
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
        onChange={(e) => handleFilter(e, "city")}
      >
        <option value="" className="">
          Filtre por uma cidade
        </option>
        {cities.map((c: string) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div className="flex gap-3 mt-3 ">
        <button
          className="btn btn-primary text-md min-h-1 h-7"
          onClick={clearSearchParams}
        >
          Limpar filtros
        </button>

        <button
          className="btn btn-primary text-md min-h-1 h-7"
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
