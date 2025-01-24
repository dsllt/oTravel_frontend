import { X } from 'lucide-react';
import { FavoritePlaceBox } from './favorite-place-box';
import { getFavorites } from '@lib/usecases/get-favorites';
import { Favorite } from '../../domain/models/favorite';
import { useEffect, useState } from 'react';

type FavoritesModalProps = {
  setDisplayFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
};

export default function FavoritesModal({
  userId,
  setDisplayFavorites,
}: FavoritesModalProps) {
  const [favorites, setFavorites] = useState<Favorite[]>();

  useEffect(() => {
    async function getData() {
      const data = await getFavorites(userId);
      setFavorites(data);
    }

    getData();
  }, [userId]);

  return (
    <div className="py-5 px-6 gap-8 h-full flex flex-col p-6 shadow-shape bg-zinc-700 w-6/12">
      <div className="w-full flex justify-end items-end">
        <button onClick={() => setDisplayFavorites(false)}>
          <X className="size-5 text-zinc-400" />
        </button>
      </div>
      <h2 className="text-2xl">Favoritos</h2>
      {favorites && favorites.length > 0 ? (
        <div className="flex flex-col items-start justify-start h-full overflow-y-scroll gap-4 pb-8 w-full">
          {favorites.map((favorite: Favorite) => (
            <FavoritePlaceBox key={favorite.id} placeInfo={favorite} />
          ))}
        </div>
      ) : (
        <div>Você ainda não favoritou nenhum lugar.</div>
      )}
    </div>
  );
}
