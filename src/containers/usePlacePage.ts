import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Menu, Place, Schedule } from '../domain/models/place';
import { placeScheduleMock, reviewsMock } from '../utils/mocks';
import { UserContext } from '../context/userContext';
import { Favorite } from '../domain/models/favorite';
import useExplore from './useExplore';
import { updateFavorite } from '@lib/usecases/update-favorite';
import { getActiveFavorites } from '@lib/usecases/get-active-favorites';

const usePlacePage = () => {
  const { userData } = useContext(UserContext);
  const { data: exploreData } = useExplore();

  const [place, setPlace] = useState<Place>({
    id: '',
    imageUrl: '',
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
  const [placeMenu, setPlaceMenu] = useState<Menu[]>([]);
  const [placeSchedule, setPlaceSchedule] =
    useState<Schedule[]>(placeScheduleMock);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReview] = useState(reviewsMock);
  const [isLogged, setIsLogged] = useState(false);

  const data = useMemo(
    () => ({
      place,
      isFavorite,
      placeMenu,
      placeSchedule,
      newReview,
      rating,
      reviews,
      isLogged,
    }),
    [
      place,
      isFavorite,
      placeMenu,
      placeSchedule,
      newReview,
      rating,
      reviews,
      isLogged,
    ],
  );

  const getIsFavorite = useCallback(async () => {
    if (!place.id) return;
    const activeFavorites = await getActiveFavorites();
    const isFavorite = activeFavorites.some(
      (favorite: Place) => favorite.id === place.id,
    );
    setIsFavorite(isFavorite);
  }, [place.id]);

  const onClickFavorite = useCallback(async () => {
    await updateFavorite(userData.id, place.id);
    await getIsFavorite();
  }, [getIsFavorite, place.id, userData.id]);

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
      const currentPlace = exploreData.places.find(
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
    },
    [exploreData.places],
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    getIsFavorite();
  }, [getIsFavorite]);

  return { data, callback };
};

export default usePlacePage;
