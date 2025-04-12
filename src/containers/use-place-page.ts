import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Place, Schedule } from '../domain/models/place';
import { placeScheduleMock, reviewsMock } from '../utils/mocks';
import { UserContext } from '../context/userContext';
import { Favorite } from '../domain/models/favorite';
import useExplore from './use-explore';
import { updateFavorite } from '@lib/usecases/update-favorite';
import { getActiveFavorites } from '@lib/usecases/get-active-favorites';
import { getSchedule } from '@lib/usecases/get-schedule';
import { MenuDTO } from '../domain/models/menu-dto';
import { postMenu } from '@lib/usecases/post-menu';
import { FoodType, Menu } from '../domain/models/menu';
import { getMenu } from '@lib/usecases/get-menu';

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
  const [placeDrinks, setPlaceDrinks] = useState<Menu[]>([]);
  const [placeFoods, setPlaceFoods] = useState<Menu[]>([]);
  const [placeSchedule, setPlaceSchedule] = useState<Schedule[]>();
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReview] = useState(reviewsMock);
  const [isLogged, setIsLogged] = useState(false);

  const data = useMemo(
    () => ({
      place,
      isFavorite,
      placeDrinks,
      placeFoods,
      placeSchedule,
      newReview,
      rating,
      reviews,
      isLogged,
    }),
    [
      place,
      isFavorite,
      placeDrinks,
      placeFoods,
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
    if (!activeFavorites) return;
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

  const displayEditModal = useCallback(() => {
    const modal = document.getElementById('place-edit') as HTMLDialogElement;
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

  const onClickDisplayModal = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }, []);

  const onClickDeleteMenuItem = useCallback((itemId: string) => {}, []);

  const onClickEditMenuItem = useCallback((itemId: string) => {}, []);

  const onClickCancelModal = useCallback((modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }, []);

  const onClickSaveModal = useCallback(
    async (item: MenuDTO, modalId: string) => {
      const response = await postMenu(item);
      console.log(response);
      onClickCancelModal(modalId);
    },
    [onClickCancelModal],
  );

  const callback = useMemo(
    () => ({
      onClickSubmitReview,
      onClickFavorite,
      displayEditModal,
      isPlaceDataFetched,
      defineCurrentPlace,
      setPlaceSchedule,
      setRating,
      setNewReview,
      onClickDisplayModal,
      onClickDeleteMenuItem,
      onClickEditMenuItem,
      onClickCancelModal,
      onClickSaveModal,
    }),
    [
      onClickSubmitReview,
      onClickFavorite,
      displayEditModal,
      isPlaceDataFetched,
      defineCurrentPlace,
      setPlaceSchedule,
      setRating,
      setNewReview,
      onClickDisplayModal,
      onClickDeleteMenuItem,
      onClickEditMenuItem,
      onClickCancelModal,
      onClickSaveModal,
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

  useEffect(() => {
    async function loadMenu() {
      if (!place.id) return;
      const response = await getMenu(place.id);
      const drinks = response.filter(
        (item: Menu) => item.type === FoodType.DRINK,
      );
      const foods = response.filter(
        (item: Menu) => item.type === FoodType.FOOD,
      );
      setPlaceDrinks(drinks);
      setPlaceFoods(foods);
    }
    loadMenu();
  }, [place.id]);
  useEffect(() => {
    async function loadSchedule() {
      const response = await getSchedule(place.id);
      if (!response || response.status !== 200) return;
      const updatedSchedule = response.map((schedule: Schedule) => ({
        ...schedule,
        openAt: schedule.openAt.slice(0, -1),
        closeAt: schedule.closeAt.slice(0, -1),
      }));
      setPlaceSchedule(updatedSchedule);
    }
    loadSchedule();
  }, [place.id]);

  return { data, callback };
};

export default usePlacePage;
