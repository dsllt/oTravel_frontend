"use client"
import React, { useState } from "react";
import Input from "@ui/new-place/Input";
import CategorySelect from "@ui/new-place/CategorySelect";
import TextArea from "@ui/new-place/TextArea";
import FormButtons from "@ui/new-place/FormButtons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";

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

export type NewPlaceSchema = z.infer<typeof newPlaceSchema>

export default function Page() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<NewPlaceSchema>({
    resolver: zodResolver(newPlaceSchema)
  })

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
    const baseUrl = process.env.API_BASE_URL;

    await fetch(`${baseUrl}/places`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(place),
    });
  }


  return (
    <div className="flex flex-col items-center justify-center rounded-lg my-10 mx-80 py-12 bg-base-300">
      <form onSubmit={handleSubmit(handleIncludeNewPlace)} className="min-w-[600px]">
        <h1 className="text-2xl text-center mb-5"> Inclua um novo local </h1>

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
            <Input label="Telefone" id="placePhone" required register={register} errors={errors} />
          </div>
        </div>

        <FormButtons />

      </form>

    </div>
  );
}
