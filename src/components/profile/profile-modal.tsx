'use client'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { HousePlus, LogOut, Star, User, X } from 'lucide-react';
import { MapPlaceBox } from '@ui/map/map-place-box';
import { FavoritePlaceBox } from './favorite-place-box';

export function ProfileModal() {
  const { displayProfile, setDisplayProfile, places, userData } = useContext(UserContext);
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

  return (
    <>
      {displayProfile && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-end z-50 h-full'>
          <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 gap-8 h-full flex flex-col'>
            <div className='w-full flex justify-end items-end' >
              <button onClick={handleCloseDisplayProfile}>
                <X className='size-5 text-zinc-400' />
              </button>
            </div>

            <div className='flex flex-col gap-28 min-w-64'>
              <div>
                <h2 className='text-3xl text-center'>John Doe</h2>
                <p className='text-center'>@johndoe</p>
              </div>
              <div>
                <button
                  className='flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5'
                  onClick={handleDisplayFavorites}
                >
                  <Star className='size-5 text-zinc-400' />
                  <span>Favoritos</span>
                </button>
                <button
                  className='flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5'
                  onClick={handleDisplayPersonalInfo}
                >
                  <User className='size-5 text-zinc-400' />
                  <span>Informações pessoais</span>
                </button>
                <button
                  className='flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5'
                  onClick={() => { }}
                >
                  <HousePlus className='size-5 text-zinc-400' />
                  <span>Registrar novo local</span>
                </button>
              </div>
            </div>

            <div className='mt-auto'>
              <button
                className='flex gap-3 w-full hover:bg-gray-700 rounded-lg p-5'
                onClick={() => { }}
              >
                <LogOut className='size-5 text-zinc-400' />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {displayFavorites && (
            <div className='py-5 px-6 gap-8 h-full flex flex-col p-6 shadow-shape bg-zinc-700 w-6/12'>
              <div className='w-full flex justify-end items-end' >
                <button onClick={() => setDisplayFavorites(false)}>
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
              <h2 className='text-2xl'>Favoritos</h2>
              <div className='flex flex-col items-start justify-start h-full overflow-y-scroll gap-4 pb-8 w-full'>
                {places.map(place => <FavoritePlaceBox key={place.id} placeInfo={place} />)}
              </div>
            </div>
          )}

          {displayPersonalInfo && (
            <div className='py-5 px-6 gap-8 h-full flex flex-col  p-6 shadow-shape bg-zinc-700 w-6/12'>
              <div className='w-full flex justify-end items-end' >
                <button onClick={() => setDisplayPersonalInfo(false)}>
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
              <h2 className='text-2xl'>Meus dados</h2>

              <div className='flex flex-col gap-6 border border-gray-400 rounded-lg px-5 py-10'>
                <h2 className='text-lg'>Gerencie seus dados</h2>

                <div className='flex flex-col gap-10'>
                  <div className='flex gap-6 '>
                    <label className='w-full'>
                      <div>
                        <span className="text-sm text-gray-400">Nome</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        value={userData.firstName}
                        className="bg-transparent border border-transparent border-b-gray-950 focus:outline-none w-full"
                      />
                    </label>

                    <label className='w-full'>
                      <div>
                        <span className="text-sm text-gray-400">Sobrenome</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Seu sobrenome"
                        value={userData.lastName}
                        className="bg-transparent border border-transparent border-b-gray-950 focus:outline-none w-full"
                      />
                    </label>
                  </div>

                  <label>
                    <div>
                      <span className="text-sm text-gray-400">Email</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Seu email"
                      value={userData.email}
                      className="bg-transparent border border-transparent border-b-gray-950 focus:outline-none w-full"
                    />
                  </label>

                  <button
                    className='rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-primary text-primary-content text-sm font-semibold'

                  >
                    Atualizar
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      )}
    </>
  )
}