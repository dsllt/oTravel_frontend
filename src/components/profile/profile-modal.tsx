'use client';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { HousePlus, LogOut, Star, User, X } from 'lucide-react';
import FavoritesModal from './favorites-modal';
import PersonalInfoModal from './personal-info-modal';
import RegisterNewPlaceModal from './register-new-place-modal';

type ProfileModalProps = {
  onClickCloseModal: () => void;
  onClickLogout: () => void;
};

export function ProfileModal({
  onClickCloseModal,
  onClickLogout,
}: ProfileModalProps) {
  const { displayProfile, setDisplayProfile, userData } =
    useContext(UserContext);
  const [displayFavorites, setDisplayFavorites] = useState(false);
  const [displayPersonalInfo, setDisplayPersonalInfo] = useState(false);
  const [displayRegisterNewPlace, setDisplayRegisterNewPlace] = useState(false);

  function handleCloseDisplayProfile() {
    setDisplayProfile(false);
    setDisplayFavorites(false);
    setDisplayPersonalInfo(false);
    setDisplayRegisterNewPlace(false);
  }

  function handleDisplayFavorites() {
    setDisplayFavorites(true);
    setDisplayPersonalInfo(false);
    setDisplayRegisterNewPlace(false);
  }

  function handleDisplayPersonalInfo() {
    setDisplayFavorites(false);
    setDisplayPersonalInfo(true);
    setDisplayRegisterNewPlace(false);
  }

  function handleDisplayCreateNewPlace() {
    setDisplayFavorites(false);
    setDisplayPersonalInfo(false);
    setDisplayRegisterNewPlace(true);
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-end z-50 h-full">
        <div className="rounded-tl-xl rounded-bl-xl py-5 px-6 shadow-shape bg-zinc-900 gap-8 h-full flex flex-col">
          <div className="w-full flex justify-end items-end">
            <button onClick={onClickCloseModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <div className="flex flex-col gap-28 min-w-64">
            <div>
              <h2 className="text-3xl text-center">
                {userData.firstName} {userData.lastName}
              </h2>
            </div>
            <div>
              <button
                className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5"
                onClick={handleDisplayFavorites}
              >
                <Star className="size-5 text-zinc-400" />
                <span>Favoritos</span>
              </button>
              <button
                className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5"
                onClick={handleDisplayPersonalInfo}
              >
                <User className="size-5 text-zinc-400" />
                <span>Informações pessoais</span>
              </button>
              <button
                className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5"
                onClick={handleDisplayCreateNewPlace}
              >
                <HousePlus className="size-5 text-zinc-400" />
                <span>Registrar novo local</span>
              </button>
            </div>
          </div>

          <div className="mt-auto">
            <button
              className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5"
              onClick={onClickLogout}
            >
              <LogOut className="size-5 text-zinc-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {displayFavorites && (
          <FavoritesModal setDisplayFavorites={setDisplayFavorites} />
        )}

        {displayPersonalInfo && (
          <PersonalInfoModal setDisplayPersonalInfo={setDisplayPersonalInfo} />
        )}

        {displayRegisterNewPlace && (
          <RegisterNewPlaceModal
            setDisplayRegisterNewPlace={setDisplayRegisterNewPlace}
          />
        )}
      </div>
    </>
  );
}
