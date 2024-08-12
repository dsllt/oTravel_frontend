"use client";

import { useRouter } from "next/navigation";

export function MapPlaceBox({ placeInfo }: any) {
  const router = useRouter();
  function handleClickPlaceBox(slug: string) {
    router.push(`/explore/${slug}`);
  }
  return (
    <div
      className="bg-zinc-900 rounded-lg shadow-xl hover:opacity-50 hover:cursor-pointer flex w-full min-h-18 max-h-18"
      onClick={() => handleClickPlaceBox(placeInfo.slug)}
    >
      <figure className="w-48 h-40 overflow-hidden rounded-tl-lg rounded-bl-lg">
        <img
          src={placeInfo.image_url}
          alt={placeInfo.name}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="flex flex-col p-4 w-4/5 gap-2">
        <h2 className="text-sm">{placeInfo.name}</h2>
        <p className="text-xs">{placeInfo.address}</p>
        <div className="badge badge-secondary">{placeInfo.rating}</div>
      </div>
    </div>
  );
}
