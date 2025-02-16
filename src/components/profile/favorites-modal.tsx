import { X } from 'lucide-react';
import { FavoritePlaceBox } from './favorite-place-box';
import { getFavorites } from '@lib/usecases/get-favorites';
import { Favorite } from '../../domain/models/favorite';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateFavorite } from '@lib/usecases/update-favorite';

type FavoritesModalProps = {
  userId: string;
  onClickCloseProfileModal: () => void;
  onClickCloseInnerModal: () => void;
};

export default function FavoritesModal({
  userId,
  onClickCloseProfileModal,
  onClickCloseInnerModal,
}: FavoritesModalProps) {
  const [favorites, setFavorites] = useState<Favorite[]>();
  const router = useRouter();

  const getData = useCallback(async () => {
    const data = await getFavorites(userId);
    setFavorites(data);
  }, [userId]);

  const handleClickInfo = (slug: string) => {
    router.push(`/explore/${slug}`);
    onClickCloseInnerModal();
    onClickCloseProfileModal();
  };

  const handleRemoveFavorite = async (userId: string, placeId: string) => {
    await updateFavorite(userId, placeId);
    await getData();
  };

  useEffect(() => {
    getData();
  }, [getData, userId]);

  return (
    <div className="py-5 px-6 gap-8 h-full flex flex-col p-6 shadow-shape bg-zinc-700 w-6/12">
      <div className="w-full flex justify-end items-end">
        <button onClick={() => onClickCloseInnerModal()}>
          <X className="size-5 text-zinc-400" />
        </button>
      </div>
      <h2 className="text-2xl">Favoritos</h2>
      {favorites && favorites.length > 0 ? (
        <div className="flex flex-col items-start justify-start h-full overflow-y-scroll gap-4 pb-8 w-full">
          {favorites.map((favorite: Favorite) => (
            <FavoritePlaceBox
              key={favorite.id}
              placeInfo={favorite}
              handleClickInfo={() => handleClickInfo(favorite.slug)}
              handleDeleteFavorite={() =>
                handleRemoveFavorite(userId, favorite.id)
              }
            />
          ))}
        </div>
      ) : (
        <div>Você ainda não favoritou nenhum lugar.</div>
      )}
    </div>
  );
}
