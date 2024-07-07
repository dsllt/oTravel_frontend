'use client'
import { fetchPlaces } from "../services/data";
import { Place } from "../utils/type-definitions";
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

type UserContextType = {
  places: Place[];
  setPlaces: Dispatch<SetStateAction<Place[]>>;
  cities: string[];
  categories: string[];
};

export const UserContext = createContext<UserContextType>({
  places: [],
  setPlaces: () => { },
  cities: [],
  categories: [],
});

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const [places, setPlaces] = useState<Place[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function fetchData() {
      const placesResponse = await fetchPlaces();
      const cities = placesResponse.map((place: Place) => place.city);
      const categories = placesResponse.map((place: Place) => place.category).flat();

      const uniqueCities: string[] = cities.filter((city: string, index: number, self: string[]) => self.indexOf(city) === index);
      const uniqueCategories: string[] = categories.filter((category: string, index: number, self: string[]) => self.indexOf(category) === index);

      setCities(uniqueCities);
      setCategories(uniqueCategories);
      setPlaces(placesResponse);
    }

    fetchData();
  }, [])

  const userInfo = {
    places,
    setPlaces,
    cities,
    categories
  };

  return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
}

export default UserProvider;
