'use client'
import { SearchHeader } from "@ui/explore/search-header";
import { PlaceBox } from "@ui/explore/place-box";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { UserBox } from "@ui/explore/user-box";
import { HeroSearchInputs } from '@ui/explore/hero-search-inputs';


export default function Page({ searchParams }: { searchParams?: { queryPlace?: string, category?: string, city?: string, queryUser?: string, } }) {
  const { places, usersWithFavorites } = useContext(UserContext);

  const queryPlace = searchParams?.queryPlace || '';
  const queryUsers = searchParams?.queryUser || '';
  const category = searchParams?.category || '';
  const city = searchParams?.city || '';


  let filteredPlaces = places.filter(place => {
    const matchesName = place.name.toLowerCase().includes(queryPlace.toLowerCase());

    const matchesCategory = !category || place.category.some(cat => cat.toLowerCase() === category.toLowerCase());

    const matchesCity = !city || place.city.toLowerCase() === city.toLowerCase();

    return matchesName && matchesCategory && matchesCity;
  });

  let filteredUsersWithFavorites = usersWithFavorites.filter(user => {
    const matchesName = user.name.toLowerCase().includes(queryUsers.toLocaleLowerCase());
    return matchesName;
  })


  return (
    <main className="flex flex-col w-full items-center mb-16">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-5 text-5xl font-bold max-w-md">Encontre o próximo lugar que vai te encantar</h1>
            <p className="mb-5 max-w-md">Descubra restaurantes e cafés com ambientes perfeitos perto de você com apenas alguns cliques. </p>
            <HeroSearchInputs />

          </div>
        </div>
      </div>

      <div id='search' className="mt-12 px-16 w-full">
        <SearchHeader />
        <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
          {queryUsers !== '' ? (
            filteredUsersWithFavorites.map(user => {
              return (
                <UserBox key={user.id} userInfo={user} />
              )
            })
          ) : (
            filteredPlaces.map(place => {
              return (
                <PlaceBox key={place.id} placeInfo={place} />
              )
            })
          )}

        </div>
      </div>
    </main>
  )
}
