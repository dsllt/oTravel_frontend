'use client';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { HousePlus, LogOut, Star, User, X } from 'lucide-react';
import FavoritesModal from './favorites-modal';
import PersonalInfoModal from './personal-info-modal';
import RegisterNewPlaceModal from './register-new-place-modal';
import useNavbar from '../../containers/useNavbar';

type ProfileModalProps = {
  onClickCloseModal: () => void;
  onClickLogout: () => void;
  onClickDisplayFavorites: () => void;
  onClickDisplayPersonalInfo: () => void;
  onClickDisplayCreateNewPlace: () => void;
  onClickCloseInnerModal: (modal: string) => void;
  displayPersonalInfoModal: boolean;
  displayFavoritesModal: boolean;
  displayRegisterNewPlaceModal: boolean;
};

export function ProfileModal({
  onClickCloseModal,
  onClickLogout,
  onClickDisplayFavorites,
  onClickDisplayPersonalInfo,
  onClickDisplayCreateNewPlace,
  onClickCloseInnerModal,
  displayPersonalInfoModal,
  displayFavoritesModal,
  displayRegisterNewPlaceModal,
}: ProfileModalProps) {
  const { setDisplayProfile, userData } = useContext(UserContext);

  function handleCloseDisplayProfile() {
    // setDisplayProfile(false);
    // setDisplayFavorites(false);
    // setDisplayPersonalInfo(false);
    // setDisplayRegisterNewPlace(false);
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
                onClick={onClickDisplayFavorites}
              >
                <Star className="size-5 text-zinc-400" />
                <span>Favoritos</span>
              </button>
              <button
                className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5"
                onClick={onClickDisplayPersonalInfo}
              >
                <User className="size-5 text-zinc-400" />
                <span>Informações pessoais</span>
              </button>
              <button
                className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5"
                onClick={onClickDisplayCreateNewPlace}
              >
                <HousePlus className="size-5 text-zinc-400" />
                <span>Registrar novo local</span>
              </button>
            </div>
          </div>

          <div className="mt-auto">
            <button
              className="flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5 items-center"
              onClick={onClickLogout}
            >
              <LogOut className="size-5 text-zinc-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {displayFavoritesModal && (
          <FavoritesModal
            onClickCloseInnerModal={() => onClickCloseInnerModal('favorites')}
            userId={userData.id}
            onClickCloseProfileModal={onClickCloseModal}
          />
        )}

        {displayPersonalInfoModal && (
          <PersonalInfoModal
            onClickCloseInnerModal={() =>
              onClickCloseInnerModal('personalInfo')
            }
          />
        )}

        {displayRegisterNewPlaceModal && (
          <RegisterNewPlaceModal
            onClickCloseInnerModal={() => onClickCloseInnerModal('newPlace')}
          />
        )}
      </div>
    </>
  );
}
