'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Place } from '../../domain/models/place';

type PlaceBoxProps = {
  placeInfo: Place;
};

export function PlaceBox({ placeInfo }: PlaceBoxProps) {
  const router = useRouter();
  function handleClickPlaceBox(slug: string) {
    router.push(`/explore/${slug}`);
  }
  return (
    <div
      className="card w-96 bg-zinc-900 text-zinc-50 shadow-shape hover:opacity-50 hover:cursor-pointer"
      onClick={() => handleClickPlaceBox(placeInfo.slug)}
    >
      <figure className="h-52">
        <Image
          src={placeInfo.image_url}
          alt={placeInfo.name}
          width={500}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between h-16">
          {placeInfo.name}
          <div className="badge badge-secondary">{placeInfo.rating}</div>
        </h2>
        <p>{placeInfo.address}</p>
      </div>
    </div>
  );
}
