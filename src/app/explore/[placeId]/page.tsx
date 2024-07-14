'use client'
import { fetchMenu, fetchPlace } from "../../../services/data";
import { Place } from "../../../utils/type-definitions";
import Image from "next/image";
import MenuContainer from "@ui/explore/menu-container";
import React, { useEffect, useState } from "react";

export default function PlacePage({ params }: { params: { placeId: string } }) {
  const [place, setPlace] = useState<Place>({
    id: "",
    image_url: "",
    name: "",
    description: "",
    address: "",
    city: "",
    country: "",
    latitude: 0,
    longitude: 0,
    phone: "",
    slug: "",
    category: [],
    rating: 0,
    created_at: new Date(),
  })
  const [placeName, setPlaceName] = useState('')
  const [placeMenu, setPlaceMenu] = useState([])

  useEffect(() => {
    async function fetchData() {
      const placesResponse = await fetchPlace(params.placeId);
      const menuResponse = await fetchMenu(params.placeId);

      setPlaceName(placesResponse.name.toLowerCase());
      setPlace(placesResponse);
      setPlaceMenu(menuResponse);
    }

    fetchData();
  }, [params.placeId])

  return (
    <div className="w-full flex flex-col gap-10 mt-10 mb-20 items-center justify-center">
      <div className="flex w-full h-full justify-center items-start gap-16">
        <div className="max-h-[500px] overflow-hidden">
          <Image
            src={place.image_url}
            alt=""
            style={{ objectFit: 'cover', borderRadius: '1rem' }}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex flex-col gap-4 font-dmSans min-w-[500px]">
          <h1 className="text-5xl uppercase font-semibold mb-4 max-w-[500px] break-words">{placeName}</h1>
          <p className="text-lg text-gray-400 mb-2">{place.address}</p>
          <div className="">
            <h1 className="font-bold text-xl font-dmSans mb-4">Menu</h1>
            <MenuContainer menu={placeMenu} />
          </div>
        </div>
      </div>



      {/* <div className="w-2/4">
        <h1 className="font-bold text-xl font-dmSans mb-4">
          Reviews
        </h1>
        {reviews.map(review => {
          const user = users.find(user => user.id === review.user_id);

          if (user !== undefined) {
            return <ReviewBox key={review.id} review={review} user={user} />
          }

        })}
      </div> */}
      <div className="flex w-full justify-center items-center">
        <a href="/explore#search" className="btn btn-primary ">Voltar</a>
      </div>
    </div>
  )
}