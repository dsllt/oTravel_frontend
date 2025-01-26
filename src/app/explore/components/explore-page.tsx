'use client';
import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PlacesUsersContainer from '@ui/explore/places-users-container';
import { HeroContainer } from '@ui/explore/hero-container';
import { getPlaces } from '@lib/data';
import { UserContext } from '../../../context/userContext';
import useExplore from '../../../containers/useExplore';

export default function ExplorePage() {
  const { data } = useExplore();

  return (
    <main className="flex flex-col w-full items-center mb-16">
      <HeroContainer />
      <PlacesUsersContainer
        users={data.filteredUsersWithFavorites}
        places={data.filteredPlaces}
        displayUsers={data.displayUsers}
      />
    </main>
  );
}
