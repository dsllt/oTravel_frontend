'use client';
import { Favorite } from '../domain/models/favorite';
import { Menu, Place } from '../domain/models/place';
import { User, UserDTO, UserFavorites } from '../domain/models/user';
import { favoritesMock, menuMock, placesMock } from '../utils/mocks';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

const UserFavoritesExample: UserFavorites[] = [
  {
    id: '1',
    name: 'Johnny Doey',
    email: 'john@email.com',
    is_admin: false,
    is_public: true,
    image_url:
      'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2',
    created_at: new Date('2020-01-12T09:46:10.477Z'),
    favorites: [
      {
        name: 'Mercado Brasco - Bom Fim',
        image_url:
          'https://lh3.googleusercontent.com/p/AF1QipMbhgupk-fNIQu7L-x5GQq1rXoXyDrSjnuem7_e=s680-w680-h510',
        address: 'Rua Fernandes Vieira, 286 - Bom Fim',
        city: 'Porto Alegre',
        country: 'Brazil',
        slug: 'mercado-brasco-bom-fim',
        rating: 4.5,
      },
      {
        name: 'Mercado Brasco - Padre Chagas',
        image_url: 'https://onnerevista.com.br/images/news/3781_2.jpg',
        address: 'R. Padre Chagas, 300 - Moinhos de Vento',
        city: 'Porto Alegre',
        country: 'Brazil',
        slug: 'mercado-brasco-padre-chagas',
        rating: 4.5,
      },
      {
        name: 'SO Coffee Roasters - Torrefação, Café & Lab',
        image_url:
          'https://images.squarespace-cdn.com/content/v1/62263a3331d71e1ef6efb76b/c3eb19c0-0be1-48b7-a4c4-e32a264a9ffb/IMG_1474.JPG?format=2500w%202500w',
        address: 'Rua da Restauração, 455',
        city: 'Porto',
        country: 'Portugal',
        slug: 'so-coffee-roasters-torrefacao',
        rating: 4.5,
      },
    ],
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@email.com',
    is_admin: false,
    is_public: true,
    image_url:
      'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=1380&t=st=1695417353~exp=1695417953~hmac=c11befc70c8fbaf86dd6351a9ffd943ec3244858e32123af4467e613d3b6b7c2',
    created_at: new Date('2020-01-12T09:46:10.477Z'),
    favorites: [
      {
        name: 'Mercado Brasco - Bom Fim',
        image_url:
          'https://lh3.googleusercontent.com/p/AF1QipMbhgupk-fNIQu7L-x5GQq1rXoXyDrSjnuem7_e=s680-w680-h510',
        address: 'Rua Fernandes Vieira, 286 - Bom Fim',
        city: 'Porto Alegre',
        country: 'Brazil',
        slug: 'mercado-brasco-bom-fim',
        rating: 4.5,
      },
      {
        name: 'Mercado Brasco - Padre Chagas',
        image_url: 'https://onnerevista.com.br/images/news/3781_2.jpg',
        address: 'R. Padre Chagas, 300 - Moinhos de Vento',
        city: 'Porto Alegre',
        country: 'Brazil',
        slug: 'mercado-brasco-padre-chagas',
        rating: 4.5,
      },
      {
        name: 'SO Coffee Roasters - Torrefação, Café & Lab',
        image_url:
          'https://images.squarespace-cdn.com/content/v1/62263a3331d71e1ef6efb76b/c3eb19c0-0be1-48b7-a4c4-e32a264a9ffb/IMG_1474.JPG?format=2500w%202500w',
        address: 'Rua da Restauração, 455',
        city: 'Porto',
        country: 'Portugal',
        slug: 'so-coffee-roasters-torrefacao',
        rating: 4.5,
      },
    ],
  },
];

const UserData = {
  id: '',
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@example.com',
  image: '',
  is_admin: false,
  created_at: '2024-02-13T15:56:56.376Z',
};

type UserContextType = {
  places: Place[];
  setPlaces: Dispatch<SetStateAction<Place[]>>;
  favorites: Favorite[];
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
  menu: Menu[];
  setMenu: Dispatch<SetStateAction<Menu[]>>;
  usersWithFavorites: UserFavorites[];
  setUsersWithFavorites: Dispatch<SetStateAction<UserFavorites[]>>;
  cities: string[];
  categories: string[];
  displayLogin: boolean;
  setDisplayLogin: Dispatch<SetStateAction<boolean>>;
  displayProfile: boolean;
  setDisplayProfile: Dispatch<SetStateAction<boolean>>;
  userData: UserDTO;
  setUserData: React.Dispatch<React.SetStateAction<UserDTO>>;
};

const userDTODefaultValue: UserDTO = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  image: '',
  is_admin: false,
  created_at: '',
};

export const UserContext = createContext<UserContextType>({
  places: [],
  setPlaces: () => {},
  favorites: [],
  setFavorites: () => {},
  menu: [],
  setMenu: () => {},
  usersWithFavorites: [],
  setUsersWithFavorites: () => {},
  cities: [],
  categories: [],
  displayLogin: false,
  setDisplayLogin: () => {},
  displayProfile: false,
  setDisplayProfile: () => {},
  userData: userDTODefaultValue,
  setUserData: () => {},
});

type Props = {
  children: React.ReactNode;
};

function UserProvider({ children }: Props) {
  const [usersWithFavorites, setUsersWithFavorites] =
    useState<UserFavorites[]>(UserFavoritesExample);
  const [places, setPlaces] = useState<Place[]>(placesMock);
  const [favorites, setFavorites] = useState<Favorite[]>(favoritesMock);
  const [menu, setMenu] = useState<Menu[]>(menuMock);
  const [cities, setCities] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displayProfile, setDisplayProfile] = useState(false);
  const [userData, setUserData] = useState<UserDTO>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    is_admin: false,
    created_at: '',
  });

  useEffect(() => {
    const cities = places.map((place: Place) => place.city);
    const categories = places.map((place: Place) => place.category).flat();

    const uniqueCities: string[] = cities.filter(
      (city: string, index: number, self: string[]) =>
        self.indexOf(city) === index,
    );
    const uniqueCategories: string[] = categories.filter(
      (category: string, index: number, self: string[]) =>
        self.indexOf(category) === index,
    );

    setCities(uniqueCities);
    setCategories(uniqueCategories);
  }, [places]);

  const userInfo = {
    places,
    setPlaces,
    favorites,
    setFavorites,
    menu,
    setMenu,
    cities,
    categories,
    usersWithFavorites,
    setUsersWithFavorites,
    displayLogin,
    setDisplayLogin,
    displayProfile,
    setDisplayProfile,
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
