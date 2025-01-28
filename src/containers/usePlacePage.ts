import { useCallback, useContext, useMemo, useState } from 'react';
import { Menu, Place, Schedule } from '../domain/models/place';
import { placeScheduleMock, reviewsMock } from '../utils/mocks';
import { UserContext } from '../context/userContext';
import { Favorite } from '../domain/models/favorite';
import useMap from './useMap';

const usePlacePage = () => {
  const { userData } = useContext(UserContext);
  const { data: mapData } = useMap();

  const [place, setPlace] = useState<Place>({
    id: '',
    image_url: '',
    name: '',
    description: '',
    address: '',
    city: '',
    country: '',
    latitude: 0,
    longitude: 0,
    phone: '',
    slug: '',
    category: [],
    rating: 0,
    created_at: '',
  });
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [placeMenu, setPlaceMenu] = useState<Menu[]>([]);
  const [placeSchedule, setPlaceSchedule] =
    useState<Schedule[]>(placeScheduleMock);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReview] = useState(reviewsMock);

  const data = useMemo(
    () => ({
      place,
      isFavorite,
      placeMenu,
      placeSchedule,
      newReview,
      rating,
      reviews,
    }),
    [place, isFavorite, placeMenu, placeSchedule, newReview, rating, reviews],
  );

  const onClickFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
    const newFavorite = {
      id: place.id,
      name: place.name,
      image_url: place.image_url,
      address: place.address,
      city: place.city,
      country: place.country,
      slug: place.slug,
      rating: place.rating,
    };
    setFavorites((prevState) => [...prevState, newFavorite]);
  }, [
    isFavorite,
    place.address,
    place.city,
    place.country,
    place.id,
    place.image_url,
    place.name,
    place.rating,
    place.slug,
  ]);

  const onClickSubmitReview = useCallback(() => {
    const review = {
      id: '',
      review: newReview,
      rating: Number(rating),
      created_at: new Date().toDateString(),
      user: userData,
      place: place,
    };
    setReview((prevState) => [...prevState, review]);
    setNewReview('');
    setRating('');
  }, [newReview, place, rating, userData]);

  const displayScheduleModal = useCallback(() => {
    const modal = document.getElementById('schedule-edit') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  const isPlaceDataFetched = useCallback((place: Place): boolean => {
    let isFetched = false;
    Object.values(place).every((value) => {
      if (typeof value === 'string') {
        isFetched = value.trim() !== '';
      } else if (Array.isArray(value)) {
        isFetched = value.length > 0;
      }
    });
    return isFetched;
  }, []);
  const defineCurrentPlace = useCallback(
    (slug: string) => {
      const currentPlace = mapData.places.find(
        (place: Place) => place.slug === slug,
      );
      if (currentPlace) {
        // request para endpoint que busca por menu de um local
        // const currentMenu: Menu[] = menu.filter(
        //   (menu) => menu.place_id === currentPlace.id,
        // );
        setPlace(currentPlace);
        // setPlaceMenu(currentMenu);
      }

      const isFavorite = favorites.some((favorite) => place.id === favorite.id);
      setIsFavorite(isFavorite);
    },
    [favorites, mapData.places, place.id],
  );

  const callback = useMemo(
    () => ({
      onClickSubmitReview,
      onClickFavorite,
      displayScheduleModal,
      isPlaceDataFetched,
      defineCurrentPlace,
      setPlaceSchedule,
      setRating,
      setNewReview,
    }),
    [
      onClickSubmitReview,
      onClickFavorite,
      displayScheduleModal,
      isPlaceDataFetched,
      defineCurrentPlace,
      setPlaceSchedule,
      setRating,
      setNewReview,
    ],
  );

  return { data, callback };
};

export default usePlacePage;
