'use client'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { HousePlus, Star, User, X } from 'lucide-react';

export function ProfileModal() {
  const { displayProfile, setDisplayProfile } = useContext(UserContext);
  const [displayLoginInputs, setDisplayLoginInputs] = useState(false);

  return (
    <>
      {displayProfile && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-end z-50 h-full'>
          <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-8 h-full'>
            <div className='w-full flex justify-end items-end' >
              <button onClick={() => setDisplayProfile(false)}>
                <X className='size-5 text-zinc-400' />
              </button>
            </div>

            <div className='flex flex-col gap-28 min-w-64'>
              <div>
                <h2 className='text-3xl text-center'>John Doe</h2>
                <p className='text-center'>@johndoe</p>
              </div>
              <div>
                <button className='flex gap-3 w-full  hover:bg-gray-700 rounded-lg p-5'>
                  <Star className='size-5 text-zinc-400' />
                  <span>Favoritos</span>
                </button>
                <button className='flex gap-3 w-full  hover:bg-gray-700 rounded-lg p-5'>
                  <User className='size-5 text-zinc-400' />
                  <span>Informações pessoais</span>
                </button>
                <button className='flex gap-3 w-full  hover:bg-gray-700 rounded-lg p-5'>
                  <HousePlus className='size-5 text-zinc-400' />
                  <span>Registrar novo local</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}