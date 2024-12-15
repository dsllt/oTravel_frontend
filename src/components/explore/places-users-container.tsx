import { Place } from '../../domain/models/place';
import { UserFavorites } from '../../domain/models/user';
import { PlaceBox } from './place-box';
import { SearchHeader } from './search-header';
import { UserBox } from './user-box';

type PlacesUsersContainerProps = {
  users: UserFavorites[];
  places: Place[];
  displayUsers: boolean;
};

export default function PlacesUsersContainer({
  users,
  places,
  displayUsers,
}: PlacesUsersContainerProps) {
  return (
    <div id="search" className="mt-12 px-16 w-full">
      <SearchHeader />
      <div className="flex flex-wrap gap-5 justify-center items-center mt-4">
        {displayUsers
          ? users.map((user) => {
              return <UserBox key={user.id} userInfo={user} />;
            })
          : places.map((place) => {
              return <PlaceBox key={place.id} placeInfo={place} />;
            })}
      </div>
    </div>
  );
}
