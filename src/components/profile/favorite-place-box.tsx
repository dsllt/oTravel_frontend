'use client';

import { Info, Trash } from 'lucide-react';
import { Favorite } from '../../domain/models/favorite';
import Image from 'next/image';

type FavoritePlaceBoxProps = {
  placeInfo: Favorite;
  handleClickInfo: () => void;
  handleDeleteFavorite: () => void;
};

export function FavoritePlaceBox({
  placeInfo,
  handleClickInfo,
  handleDeleteFavorite,
}: FavoritePlaceBoxProps) {
  return (
    <div className="bg-zinc-900 rounded-lg shadow-xl hover:opacity-80 hover:cursor-pointer flex w-full min-h-18 max-h-18">
      <Image
        src={placeInfo.imageUrl}
        alt={placeInfo.name}
        width={100}
        height={50}
        className="w-48 h-48 overflow-hidden rounded-tl-lg rounded-bl-lg object-cover"
      />
      <div className="flex flex-col p-4 gap-2">
        <h2 className="text-sm">{placeInfo.name}</h2>
        <p className="text-xs">{placeInfo.city}</p>
        <div className="mt-auto">
          <div className="btn btn-ghost" onClick={handleClickInfo}>
            <Info className="size-5 text-blue-600" />
            Informações
          </div>
          <div className="btn btn-ghost" onClick={handleDeleteFavorite}>
            <Trash className="size-5 text-red-300" />
            Remover
          </div>
        </div>
      </div>
    </div>
  );
}
