'use client'
import { fetchMenu, fetchPlace } from "../../../services/data";
import { Place } from "../../../utils/type-definitions";
import Image from "next/image";
import MenuContainer from "@ui/explore/menu-container";
import React, { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    review: "Fui apenas uma vez e eu pedi um chocolate quente, mas achei muito forte! Claro isso vai de pessoa para pessoa. Não consegui tomar todo por conta disso. O ambiente é pequeno mas é bem organizado, um lugar muito bonito. O atendimento é ótimo.",
    rating: 4.5,
    created_at: "2024-01-21T09:46:10.477Z",
    user_id: 1,
    place_id: 1
  },
  {
    id: 2,
    review: "Boa bastante satisfatória, um pouco cheio de mais que significa alta qualidade sabor do produto vendido... Recomendo até para trabalhar lá tive uma experiência feliz si possível  gostaria de voltar a trabalhar após uma formatura de nível superior.",
    rating: 4.0,
    created_at: "2024-01-24T09:46:10.477Z",
    user_id: 2,
    place_id: 2
  },
]

const users: UserDTO[] = [{
  id: 1,
  name: "Cristofer Rosser",
  email: "c@email.com",
  is_admin: false,
  image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: "2019-01-21T09:46:10.477Z"
},
{
  id: 2,
  name: "John Doe",
  email: "john@email.com",
  is_admin: false,
  image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: "2020-01-12T09:46:10.477Z"
}]


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

      <div className="flex w-full justify-center items-center">
        <a href="/explore#search" className="btn btn-primary ">Voltar</a>
      </div>
    </div>
  )
}