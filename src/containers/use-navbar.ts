import { login, register } from '@lib/data';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { UserContext } from '../context/userContext';
import { getUser } from '@lib/usecases/get-user';

export default function useNavbar() {
  const { setUserData, isLogged, setIsLogged } = useContext(UserContext);
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const [displayMenuModal, setDisplayProfileModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [displayFavoritesModal, setDisplayFavoritesModal] = useState(false);
  const [displayPersonalInfoModal, setDisplayPersonalInfoModal] =
    useState(false);
  const [displayRegisterNewPlaceModal, setDisplayRegisterNewPlaceModal] =
    useState(false);

  const links = useMemo(
    () => [
      { name: 'Explorar', href: '/explore', display: true },
      { name: 'Mapa', href: '/map', display: true },
      { name: 'Incluir café', href: '/new-place', display: isAdmin },
    ],
    [isAdmin],
  );

  const data = useMemo(
    () => ({
      isAdmin,
      isLogged,
      links,
      displayLoginModal,
      displayMenuModal,
      loginError,
      displayFavoritesModal,
      setDisplayFavoritesModal,
      displayPersonalInfoModal,
      setDisplayPersonalInfoModal,
      displayRegisterNewPlaceModal,
      setDisplayRegisterNewPlaceModal,
    }),
    [
      isAdmin,
      isLogged,
      links,
      displayLoginModal,
      displayMenuModal,
      loginError,
      displayFavoritesModal,
      setDisplayFavoritesModal,
      displayPersonalInfoModal,
      setDisplayPersonalInfoModal,
      displayRegisterNewPlaceModal,
      setDisplayRegisterNewPlaceModal,
    ],
  );

  const handleOpenLoginModal = useCallback(() => {
    setDisplayLoginModal(true);
  }, [setDisplayLoginModal]);

  const onClickCloseLoginModal = useCallback(() => {
    setDisplayLoginModal(false);
  }, [setDisplayLoginModal]);

  const onClickCloseMenuModal = useCallback(() => {
    setDisplayProfileModal(false);
  }, [setDisplayProfileModal]);

  const onClickRegister = useCallback(async (formData: any) => {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    return await register(firstName, lastName, email, password);
  }, []);

  const onClickLogin = useCallback(
    async (formData: any) => {
      const email = formData.get('email');
      const password = formData.get('password');
      const response = await login(email, password);
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        setIsLogged(true);
        setDisplayLoginModal(false);
        setLoginError('');
        const userData = await getUser();
        setUserData(userData);
      } else {
        setLoginError(response.message);
      }
    },
    [setIsLogged, setUserData],
  );

  const onClickLogout = useCallback(() => {
    localStorage.removeItem('token');
    setIsLogged(false);
    setDisplayProfileModal(false);
  }, [setIsLogged]);

  const handleCloseInnerModal = useCallback(
    (modal: string) => {
      if (modal === 'favorites') {
        setDisplayFavoritesModal(false);
      }
      if (modal === 'personalInfo') {
        setDisplayPersonalInfoModal(false);
      }
      if (modal === 'newPlace') {
        setDisplayRegisterNewPlaceModal(false);
      }
    },
    [
      setDisplayFavoritesModal,
      setDisplayPersonalInfoModal,
      setDisplayRegisterNewPlaceModal,
    ],
  );

  const handleCloseFavoritesModal = useCallback(() => {
    setDisplayFavoritesModal(false);
    setDisplayProfileModal(false);
  }, [setDisplayFavoritesModal, setDisplayProfileModal]);

  const handleDisplayFavorites = useCallback(() => {
    setDisplayFavoritesModal(true);
    setDisplayPersonalInfoModal(false);
    setDisplayRegisterNewPlaceModal(false);
  }, []);

  const handleDisplayPersonalInfo = useCallback(() => {
    setDisplayFavoritesModal(false);
    setDisplayPersonalInfoModal(true);
    setDisplayRegisterNewPlaceModal(false);
  }, []);

  const handleDisplayCreateNewPlace = useCallback(() => {
    setDisplayFavoritesModal(false);
    setDisplayPersonalInfoModal(false);
    setDisplayRegisterNewPlaceModal(true);
  }, []);

  const callback = useMemo(
    () => ({
      handleOpenLoginModal,
      onClickCloseLoginModal,
      setDisplayProfileModal,
      onClickRegister,
      onClickLogin,
      onClickCloseMenuModal,
      onClickLogout,
      handleDisplayFavorites,
      handleDisplayPersonalInfo,
      handleDisplayCreateNewPlace,
      handleCloseInnerModal,
      handleCloseFavoritesModal,
    }),
    [
      handleOpenLoginModal,
      onClickCloseLoginModal,
      setDisplayProfileModal,
      onClickRegister,
      onClickLogin,
      onClickCloseMenuModal,
      onClickLogout,
      handleDisplayFavorites,
      handleDisplayPersonalInfo,
      handleDisplayCreateNewPlace,
      handleCloseInnerModal,
      handleCloseFavoritesModal,
    ],
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }
  }, [setIsLogged]);

  return { data, callback };
}
