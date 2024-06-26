'use client'
import { fetchPlaces } from "../services/data";
import { Place } from "../utils/type-definitions";
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

type UserContextType = {
  places: Place[];
  setPlaces: Dispatch<SetStateAction<Place[]>>;
  cities: string[];
};

export const UserContext = createContext<UserContextType>({
  places: [],
  setPlaces: () => { },
  cities: [],
});

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const [places, setPlaces] = useState<Place[]>([])
  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    async function fetchData() {
      const placesResponse = await fetchPlaces();
      const cities = placesResponse.map((place: Place) => place.city);

      const uniqueCities: string[] = cities.filter((city: string, index: number, self: string[]) => self.indexOf(city) === index);

      setCities(uniqueCities);
      setPlaces(placesResponse);
    }

    fetchData();
  }, [])

  const userInfo = {
    places,
    setPlaces,
    cities
  };

  return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
}

export default UserProvider;
