import { zodResolver } from '@hookform/resolvers/zod';
import CategorySelect from '@ui/profile/category-select'
import Input from '@ui/profile/modal-input'
import TextArea from '@ui/profile/modal-text-area'
import { X } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { UserContext } from '../../context/userContext';

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
  placeRating: z.string(),
});

export type NewPlaceSchema = z.infer<typeof newPlaceSchema>;


type RegisterNewPlaceModalProps = {
  setDisplayRegisterNewPlace: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RegisterNewPlaceModal({ setDisplayRegisterNewPlace }: RegisterNewPlaceModalProps) {
  const { setPlaces } = useContext(UserContext);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<NewPlaceSchema>({
    resolver: zodResolver(newPlaceSchema)
  })
  const [selectedCategories, setSelectedCategories] = useState<Categories>({});
  const [availableCategories, setAvailableCategories] = useState<Categories>(initialCategories);

  async function handleIncludeNewPlace(data: NewPlaceSchema) {
    const placeCategory = Object.keys(data.placeCategory);
    const place = {
      id: Math.random().toString(),
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
      rating: Number(data.placeRating),
      created_at: new Date().toISOString(),
    }
    // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    // await fetch(`${baseUrl}/places`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(place),
    // });
    setPlaces(prevState => [...prevState, place])
    reset();
  }

  return (
    <div className='py-5 px-6 gap-8 h-full flex flex-col shadow-shape bg-zinc-700 w-6/12'>
      <div className='w-full flex justify-end items-end' >
        <button onClick={() => setDisplayRegisterNewPlace(false)}>
          <X className='size-5 text-zinc-400' />
        </button>
      </div>
      <h2 className='text-2xl'>Resgistrar novo local</h2>
      <div className='flex flex-col overflow-y-scroll gap-4 w-full border border-gray-400 rounded-lg px-5 py-5'>
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
              <Input label="Nota" id="placeRating" required={false} register={register} errors={errors} />
            </div>
          </div>

          <div className='flex items-center w-full justify-center py-4'>
            <button
              type="submit"
              className='rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-primary text-primary-content text-sm font-semibold'
            >
              Cadastrar
            </button>
          </div>


        </form>
      </div>
    </div>
  )
}