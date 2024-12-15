import { LandPlot, MapPin } from 'lucide-react';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { categoryDictionary } from '../../utils/dictionary';
import { CategoryDictionary } from './search-header';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function HeroSearchInputs() {
  const [selectCity, setSelectedCity] = useState('');
  const [selectCategory, setSelectedCategory] = useState('');
  const { cities, categories } = useContext(UserContext);

  const mappedCategories = categories.reduce<CategoryDictionary>(
    (acc, category) => {
      acc[category] = categoryDictionary[category];
      return acc;
    },
    {},
  );
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  const findPlaces = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    params.set('city', selectCity);
    params.set('category', selectCategory);

    replace(`${pathname}?${params.toString()}`, { scroll: false });
    const searchDiv = document.getElementById('search');
    if (searchDiv) {
      searchDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }, 300);

  return (
    <div className="w-full h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-4">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <select
          className="bg-transparent text-lg text-zinc-400 focus:outline-none flex-1 pr-4"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Para onde você vai?</option>
          {cities.map((c: string) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 text-left w-full">
        <LandPlot className="size-5 text-zinc-400" />
        <select
          className="bg-transparent text-lg text-zinc-400 focus:outline-none flex-1 pr-4"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Que tipo de lugar você busca?</option>
          {Object.entries(mappedCategories).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="w-px h-6 bg-zinc-800 " />

      <button
        className="rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-primary text-primary-content text-sm font-semibold"
        onClick={findPlaces}
      >
        Continuar
      </button>
    </div>
  );
}
