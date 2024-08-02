import React from 'react'
import { UserDTO } from '../../utils/type-definitions';
import { X } from 'lucide-react';

type PersonalInfoModalProps = {
  setDisplayPersonalInfo: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserDTO;
}

export default function PersonalInfoModal({ setDisplayPersonalInfo, userData }: PersonalInfoModalProps) {
  return (
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
  )
}