'use client'
import { fetchPlaces } from "../services/data";
import { Place, UserFavorites } from "../utils/type-definitions";
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

const UserFavoritesExample: UserFavorites[] = [{
  id: "1",
  name: "Johnny Doey",
  email: "john@email.com",
  is_admin: false,
  is_public: true,
  image_url: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: new Date("2020-01-12T09:46:10.477Z"),
  favorites: [
    {
      name: "Mercado Brasco - Bom Fim",
      image_url: "https://lh3.googleusercontent.com/p/AF1QipMbhgupk-fNIQu7L-x5GQq1rXoXyDrSjnuem7_e=s680-w680-h510",
      address: "Rua Fernandes Vieira, 286 - Bom Fim",
      city: "Porto Alegre",
      country: "Brazil",
      slug: "mercado-brasco-bom-fim",
      rating: 4.5,
    },
    {
      name: "Mercado Brasco - Padre Chagas",
      image_url: "https://onnerevista.com.br/images/news/3781_2.jpg",
      address: "R. Padre Chagas, 300 - Moinhos de Vento",
      city: "Porto Alegre",
      country: "Brazil",
      slug: "mercado-brasco-padre-chagas",
      rating: 4.5,
    },
    {
      name: "SO Coffee Roasters - Torrefação, Café & Lab",
      image_url: "https://images.squarespace-cdn.com/content/v1/62263a3331d71e1ef6efb76b/c3eb19c0-0be1-48b7-a4c4-e32a264a9ffb/IMG_1474.JPG?format=2500w%202500w",
      address: "Rua da Restauração, 455",
      city: "Porto",
      country: "Portugal",
      slug: "so-coffee-roasters-torrefacao",
      rating: 4.5,
    },
  ]
},
{
  id: "2",
  name: "John Doe",
  email: "john@email.com",
  is_admin: false,
  is_public: true,
  image_url: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2",
  created_at: new Date("2020-01-12T09:46:10.477Z"),
  favorites: [
    {
      name: "Mercado Brasco - Bom Fim",
      image_url: "https://lh3.googleusercontent.com/p/AF1QipMbhgupk-fNIQu7L-x5GQq1rXoXyDrSjnuem7_e=s680-w680-h510",
      address: "Rua Fernandes Vieira, 286 - Bom Fim",
      city: "Porto Alegre",
      country: "Brazil",
      slug: "mercado-brasco-bom-fim",
      rating: 4.5,
    },
    {
      name: "Mercado Brasco - Padre Chagas",
      image_url: "https://onnerevista.com.br/images/news/3781_2.jpg",
      address: "R. Padre Chagas, 300 - Moinhos de Vento",
      city: "Porto Alegre",
      country: "Brazil",
      slug: "mercado-brasco-padre-chagas",
      rating: 4.5,
    },
    {
      name: "SO Coffee Roasters - Torrefação, Café & Lab",
      image_url: "https://images.squarespace-cdn.com/content/v1/62263a3331d71e1ef6efb76b/c3eb19c0-0be1-48b7-a4c4-e32a264a9ffb/IMG_1474.JPG?format=2500w%202500w",
      address: "Rua da Restauração, 455",
      city: "Porto",
      country: "Portugal",
      slug: "so-coffee-roasters-torrefacao",
      rating: 4.5,
    },
  ]
}
]

type UserContextType = {
  places: Place[];
  setPlaces: Dispatch<SetStateAction<Place[]>>;
  usersWithFavorites: UserFavorites[];
  setUsersWithFavorites: Dispatch<SetStateAction<UserFavorites[]>>;
  cities: string[];
  categories: string[];
};

export const UserContext = createContext<UserContextType>({
  places: [],
  setPlaces: () => { },
  usersWithFavorites: [],
  setUsersWithFavorites: () => { },
  cities: [],
  categories: [],
});

type Props = {
  children: React.ReactNode
}

function UserProvider({ children }: Props) {
  const [usersWithFavorites, setUsersWithFavorites] = useState<UserFavorites[]>(UserFavoritesExample)
  const [places, setPlaces] = useState<Place[]>([])
  const [cities, setCities] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    async function fetchData() {
      const placesResponse = await fetchPlaces();
      const cities = placesResponse.map((place: Place) => place.city);
      const categories = placesResponse.map((place: Place) => place.category).flat();

      const uniqueCities: string[] = cities.filter((city: string, index: number, self: string[]) => self.indexOf(city) === index);
      const uniqueCategories: string[] = categories.filter((category: string, index: number, self: string[]) => self.indexOf(category) === index);

      setCities(uniqueCities);
      setCategories(uniqueCategories);
      setPlaces(placesResponse);
    }

    fetchData();
  }, [])

  const userInfo = {
    places,
    setPlaces,
    cities,
    categories,
    usersWithFavorites,
    setUsersWithFavorites
  };

  return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
}

export default UserProvider;
