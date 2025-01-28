'use client';
import PlacesUsersContainer from '@ui/explore/places-users-container';
import { HeroContainer } from '@ui/explore/hero-container';
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
