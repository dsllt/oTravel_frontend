import { useEffect, useMemo, useState } from 'react';
import { Place } from '../domain/models/place';
import { getPlaces } from '@lib/data';
import { useSearchParams } from 'next/navigation';
import { UserFavorites } from '../domain/models/user';
import {
  CategoryDictionary,
  categoryDictionary,
} from '../domain/constants/category-dictionary';

const useExplore = () => {
  const searchParams = useSearchParams();

  const queryPlace = searchParams.get('queryPlace') || '';
  const queryUsers = searchParams.get('queryUser') || '';
  const queryCategory = searchParams.get('category') || '';
  const queryCity = searchParams.get('city') || '';
  const displayUsers = queryUsers !== '';

  const [places, setPlaces] = useState<Place[]>([]);
  const [usersWithFavorites, setUsersWithFavorites] = useState<UserFavorites[]>(
    [],
  );
  const [cities, setCities] = useState<string[]>([]);
  const [categories, setCategories] = useState<CategoryDictionary>({});

  let filteredPlaces = useMemo(
    () =>
      places.filter((place) => {
        const matchesName = place.name
          .toLowerCase()
          .includes(queryPlace.toLowerCase());

        const matchesCategory =
          !queryCategory ||
          place.category.some(
            (cat: string) => cat.toLowerCase() === queryCategory.toLowerCase(),
          );

        const matchesCity =
          !queryCity || place.city.toLowerCase() === queryCity.toLowerCase();

        return matchesName && matchesCategory && matchesCity;
      }),
    [places, queryPlace, queryCategory, queryCity],
  );

  let filteredUsersWithFavorites = useMemo(
    () =>
      usersWithFavorites.filter((user) => {
        const matchesName = user.name
          .toLowerCase()
          .includes(queryUsers.toLocaleLowerCase());
        return matchesName;
      }),
    [queryUsers, usersWithFavorites],
  );

  const data = useMemo(
    () => ({
      places,
      filteredPlaces,
      displayUsers,
      filteredUsersWithFavorites,
      cities,
      categories,
    }),
    [
      places,
      filteredPlaces,
      displayUsers,
      filteredUsersWithFavorites,
      cities,
      categories,
    ],
  );

  const callback = useMemo(() => ({}), []);

  useEffect(() => {
    async function getInitialData() {
      const places: Place[] = await getPlaces();
      setPlaces(places);

      const uniqueCities: string[] = Array.from(
        new Set(places.map((place: Place) => place.city)),
      );
      setCities(uniqueCities);

      const uniqueCategories = Array.from(
        new Set(
          places
            .flatMap((place) => place.category)
            .map((category) => category.toLowerCase()),
        ),
      );
      const mappedCategories = uniqueCategories.reduce<CategoryDictionary>(
        (acc, category) => {
          acc[category] = categoryDictionary[category];
          return acc;
        },
        {},
      );
      setCategories(mappedCategories);
    }
    getInitialData();
  }, []);
  return { data, callback };
};

export default useExplore;
