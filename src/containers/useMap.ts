import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { UserFavorites } from '../domain/models/user';
import useExplore from './useExplore';

const useMap = () => {
  const searchParams = useSearchParams();

  const queryUsers = searchParams.get('queryUser') || '';
  const displayUsers = queryUsers !== '';

  const [usersWithFavorites, setUsersWithFavorites] = useState<UserFavorites[]>(
    [],
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
      displayUsers,
      filteredUsersWithFavorites,
    }),
    [displayUsers, filteredUsersWithFavorites],
  );

  const callback = useMemo(() => ({}), []);

  return { data, callback };
};

export default useMap;
