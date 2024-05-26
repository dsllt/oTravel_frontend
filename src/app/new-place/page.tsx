"use client"
import React, { useState } from "react";
import Input from "@ui/new-place/Input";
import CategorySelect from "@ui/new-place/CategorySelect";
import TextArea from "@ui/new-place/TextArea";
import FormButtons from "@ui/new-place/FormButtons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type Categories = {
  [key: string]: string;
};

const initialCategories: Categories = {
  restaurant: 'Restaurante',
  coffee: 'Café',
  bakery: 'Padaria',
  market: 'Mercado',
};

const newPlaceSchema = z.object({
  placeName: z.string(),
  placeAddress: z.string(),
  placeCity: z.string(),
  placeCountry: z.string(),
  placeLatitude: z.string().transform((value) => parseFloat(value)).refine(value => !isNaN(value) && typeof value === 'number', {
    message: 'Latitude must be a valid number',
  }),
  placeLongitude: z.string().transform((value) => parseFloat(value)).refine(value => !isNaN(value) && typeof value === 'number', {
    message: 'Longitude must be a valid number',
  }),
  placeImage: z.string(),
  placeCategory: z.record(z.string()).transform((value) => Object.keys(value)),
  placeDescription: z.string(),
  placeSlug: z.string(),
  placePhone: z.string(),
})

export type NewPlaceSchema = z.infer<typeof newPlaceSchema>

export default function Page() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<NewPlaceSchema>({
    resolver: zodResolver(newPlaceSchema)
  })

  const [selectedCategories, setSelectedCategories] = useState<Categories>({});
  const [availableCategories, setAvailableCategories] = useState<Categories>(initialCategories);

  function handleIncludeNewPlace(data: NewPlaceSchema) {
    console.log(data)
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
