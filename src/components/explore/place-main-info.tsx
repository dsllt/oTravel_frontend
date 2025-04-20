import { Star, PencilIcon } from 'lucide-react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/16/solid';
import PlaceSchedule from '@ui/place/place-schedule';
import EditPlaceModal from '@ui/place/edit-place-modal';
import { Place, Schedule } from '../../domain/models/place';

type PlaceMainInfoProps = {
  place: Place;
  placeSchedule: Schedule[] | undefined;
  isFavorite: boolean;
  isLogged: boolean;
  onClickFavorite: () => void;
  displayEditModal: () => void;
};

const PlaceMainInfo = ({
  place,
  placeSchedule,
  isFavorite,
  isLogged,
  displayEditModal,
  onClickFavorite,
}: PlaceMainInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full h-full justify-center items-start gap-16">
      <div className="max-h-[700px] overflow-hidden w-full md:w-3/5 lg:w-3/5">
        <Image
          src={place.imageUrl}
          alt={place.name}
          style={{ objectFit: 'cover', borderRadius: '1rem' }}
          width={600}
          height={700}
          priority
        />
      </div>
      <div className="flex flex-col gap-0 md:gap-4 lg:gap-4 font-dmSans w-full md:w-full lg:min-w-[600px]">
        <div className="flex w-full justify-between">
          <h1 className="text-5xl uppercase font-semibold max-w-[500px] break-words w-11/12">
            {place.name}
          </h1>
          <div className="flex p-0 justify-start items-start">
            <button
              className="hover:bg-slate-700 p-1 rounded-lg text-sm"
              onClick={() => displayEditModal()}
            >
              <PencilIcon className="size-5 " />
            </button>
          </div>
          <EditPlaceModal placeSchedule={placeSchedule ?? []} place={place} />
        </div>

        <div className="flex justify-between">
          {place.rating ? (
            <div className="badge badge-secondary">{place.rating}</div>
          ) : (
            <div className="w-5"></div>
          )}
          {isLogged && (
            <div
              className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-700 rounded-lg p-2"
              onClick={onClickFavorite}
            >
              {isFavorite ? (
                <StarIcon className="size-5 text-blue-600" />
              ) : (
                <>
                  <Star className="size-5 text-blue-600" />
                  Favoritar
                </>
              )}
            </div>
          )}
        </div>
        <p className="text-lg text-gray-400 mb-2">
          {place.address} - {place.city}, {place.country}
        </p>
        {placeSchedule && <PlaceSchedule placeSchedule={placeSchedule} />}
      </div>
    </div>
  );
};

export default PlaceMainInfo;
