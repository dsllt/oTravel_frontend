'use client'
import { fetchPlace, fetchPlaces } from "@lib/data";
import { Place } from "@lib/type-definitions";
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

type UserContextType = {
  places: Place[];
  setPlaces: Dispatch<SetStateAction<Place[]>>;
};

export const UserContext = createContext<UserContextType>({
  places: [],
  setPlaces: () => { },
});

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {
    async function fetchData() {
      const placesResponse = await fetchPlaces();
      setPlaces(placesResponse);
    }

    fetchData();
  }, [])

  const userInfo = {
    places,
    setPlaces
  };

  return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
}

export default UserProvider;
