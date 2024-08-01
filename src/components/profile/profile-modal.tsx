'use client'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { HousePlus, LogOut, Star, User, X } from 'lucide-react';
import { FavoritePlaceBox } from './favorite-place-box';
import TextArea from '@ui/new-place/TextArea';
import Input from '@ui/new-place/Input';
import FormButtons from '@ui/new-place/FormButtons';
import CategorySelect from '@ui/new-place/CategorySelect';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { NewPlaceSchema } from '@app/new-place/page';
export type Categories = {
  [key: string]: string;
};

const initialCategories: Categories = {
  restaurant: 'Restaurante',
  coffee: 'Café',
  bakery: 'Padaria',
  market: 'Mercado',
};
const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
const newPlaceSchema = z.object({
  placeName: z.string(),
  placeAddress: z.string(),
  placeCity: z.string(),
  placeCountry: z.string(),
  placeLatitude: z.string().transform((value) => parseFloat(value.replace(',', '.'))).refine(value => !isNaN(value), {
    message: 'Latitude must be a valid number',
  }),
  placeLongitude: z.string().transform((value) => parseFloat(value.replace(',', '.'))).refine(value => !isNaN(value), {
    message: 'Longitude must be a valid number',
  }),
  placeImage: z.string().refine(value => urlPattern.test(value), {
    message: "Must be a valid URL",
  }),
  placeCategory: z.record(z.string()),
  placeDescription: z.string(),
  placeSlug: z.string().transform(value => value.toLowerCase().replace(/\s+/g, '-')),
  placePhone: z.string(),
})

export function ProfileModal() {
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<NewPlaceSchema>({
    resolver: zodResolver(newPlaceSchema)
  })
  const { displayProfile, setDisplayProfile, places, userData } = useContext(UserContext);
  const [displayFavorites, setDisplayFavorites] = useState(false);
  const [displayPersonalInfo, setDisplayPersonalInfo] = useState(false);
  const [displayRegisterNewPlace, setDisplayRegisterNewPlace] = useState(false);



  const [selectedCategories, setSelectedCategories] = useState<Categories>({});
  const [availableCategories, setAvailableCategories] = useState<Categories>(initialCategories);

  async function handleIncludeNewPlace(data: NewPlaceSchema) {
    const placeCategory = Object.keys(data.placeCategory);
    const place = {
      name: data.placeName,
      image_url: data.placeImage,
      description: data.placeDescription,
      address: data.placeAddress,
      city: data.placeCity,
      country: data.placeCountry,
      latitude: data.placeLatitude,
      longitude: data.placeLongitude,
      phone: data.placePhone,
      slug: data.placeSlug,
      category: placeCategory,
      rating: 0,
    }
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    await fetch(`${baseUrl}/places`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(place),
    });
    reset();
  }

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
      {displayProfile && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-end z-50 h-full'>
          <div className='rounded-tl-xl rounded-bl-xl py-5 px-6 shadow-shape bg-zinc-900 gap-8 h-full flex flex-col'>
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
                  onClick={handleDisplayCreateNewPlace}
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

          {displayRegisterNewPlace && (
            <div className='py-5 px-6 gap-8 h-full flex flex-col p-6 shadow-shape bg-zinc-700 w-6/12'>
              <div className='w-full flex justify-end items-end' >
                <button onClick={() => setDisplayRegisterNewPlace(false)}>
                  <X className='size-5 text-zinc-400' />
                </button>
              </div>
              <h2 className='text-2xl'>Resgistrar novo local</h2>
              <div className='flex flex-col  h-full overflow-y-scroll gap-4 w-full border border-gray-400 rounded-lg px-5 py-5'>
                <form onSubmit={handleSubmit(handleIncludeNewPlace)} className="min-w-[600px]">

                  <Input label="Nome do local" id="placeName" required register={register} errors={errors} />

                  <Input label="Endereço" id="placeAddress" required register={register} errors={errors} />

                  <div className="flex gap-4">
                    <Input label="Cidade" id="placeCity" required register={register} errors={errors} />
                    <Input label="País" id="placeCountry" required register={register} errors={errors} />
                  </div>

                  <div className="flex gap-4">
                    <Input label="Latitude" id="placeLatitude" required register={register} errors={errors} />
                    <Input label="Longitude" id="placeLongitude" required register={register} errors={errors} />
                  </div>

                  <Input label="URL da imagem" id="placeImage" type="url" required register={register} errors={errors} />

                  <CategorySelect
                    availableCategories={availableCategories}
                    initialCategories={initialCategories}
                    selectedCategories={selectedCategories}
                    setAvailableCategories={setAvailableCategories}
                    setSelectedCategories={setSelectedCategories}
                    register={register}
                    errors={errors}
                    setValue={setValue}
                  />

                  <div className="flex justify-between gap-4">
                    <TextArea label="Descrição" id="placeDescription" required register={register} errors={errors} />

                    <div className="flex w-1/2 flex-col">
                      <Input label="Slug" id="placeSlug" required register={register} errors={errors} />
                      <Input label="Telefone" id="placePhone" required={false} register={register} errors={errors} />
                    </div>
                  </div>

                  <FormButtons />

                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}