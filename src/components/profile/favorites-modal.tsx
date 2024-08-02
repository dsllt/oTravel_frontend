import { X } from 'lucide-react';
import { FavoritePlaceBox } from './favorite-place-box';
import { Place } from '../../utils/type-definitions';


type FavoritesModalProps = {
  places: Place[];
  setDisplayFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FavoritesModal({ places, setDisplayFavorites }: FavoritesModalProps) {
  return (
    <div className='py-5 px-6 gap-8 h-full flex flex-col p-6 shadow-shape bg-zinc-700 w-6/12'>
      <div className='w-full flex justify-end items-end' >
        <button onClick={() => setDisplayFavorites(false)}>
          <X className='size-5 text-zinc-400' />
        </button>
      </div>
      <h2 className='text-2xl'>Favoritos</h2>
      <div className='flex flex-col items-start justify-start h-full overflow-y-scroll gap-4 pb-8 w-full'>
        {places.map(place => <FavoritePlaceBox key={place.id} placeInfo={place} />)}
      </div>
    </div>
  )
}