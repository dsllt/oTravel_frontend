'use client'
import { fetchPlace } from "../../../lib/data";
import { Place, UserDTO } from "../../../lib/type-definitions";
import Image from "next/image";
import ReviewBox from "../../../components/review-box";
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

const menu = {
  drinks: [
    {
      item: 'Expresso',
      price: 9.0
    },
    {
      item: 'Cappuccino',
      price: 15.0
    },
    {
      item: 'Latte',
      price: 19.0
    },
    {
      item: 'Cortado',
      price: 12.0
    },
  ],
  foods: [
    {
      item: 'Bolo caseiro',
      price: 17.0
    },
    {
      item: 'Cookie',
      price: 15.0
    },
    {
      item: 'Brownie',
      price: 19.0
    },
    {
      item: 'Applestrudel',
      price: 25.0
    },
  ]
}

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
    category: "",
    rating: 0,
    created_at: new Date(),
  })
  const [placeName, setPlaceName] = useState('')

  useEffect(() => {
    async function fetchData() {
      const placesResponse = await fetchPlace(params.placeId);
      setPlaceName(placesResponse.name.toLowerCase());

      setPlace(placesResponse);
    }

    fetchData();
  }, [params.placeId])

  return (
    <div className="w-full flex flex-col gap-10 mt-10 mb-2 items-center justify-center">
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
        <div className="flex flex-col gap-4 font-dmSans">
          <h1 className="text-5xl uppercase font-semibold mb-4">{placeName}</h1>
          <p className="text-lg text-gray-400 mb-2">{place.address}</p>
          <p className="max-w-[500px] leading-8 text-justify">
            {place.description.split('\n').map((line, i) => (
              <p key={i} className="mb-4 indent-10">
                {line}
              </p>
            ))}
          </p>
        </div>
      </div>

      <div className="w-2/4">
        <h1 className="font-bold text-xl font-dmSans mb-4">Menu</h1>
        <MenuContainer menu={menu} />

      </div>
      <div className="w-2/4">
        <h1 className="font-bold text-xl font-dmSans mb-4">
          Reviews
        </h1>
        {reviews.map(review => {
          const user = users.find(user => user.id === review.user_id);

          if (user !== undefined) {
            return <ReviewBox key={review.id} review={review} user={user} />
          }

        })}
      </div>
    </div>
  )
}