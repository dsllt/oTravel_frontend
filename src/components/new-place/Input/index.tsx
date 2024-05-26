import { NewPlaceSchema } from '@app/new-place/page';
import React from 'react'
import { UseFormRegister } from 'react-hook-form';

type Props = {
  label: string;
  id: "placeName" | "placeAddress" | "placeCity" | "placeCountry" | "placeLatitude" | "placeLongitude" | "placeImage" | "placeCategory" | "placeDescription" | "placeSlug" | "placePhone";
  required: boolean;
  type?: string;
  register: UseFormRegister<NewPlaceSchema>;
  errors: any;
}

export default function Input({ label, id, type = "text", required = false, register, errors }: Props) {
  return (
    <label htmlFor={id} className="text-sm mb-4 flex flex-col w-full">
      {label}
      <input
        id={id}
        type={type}
        className="input input-bordered w-full mt-2"
        required={required}
        {...register(id)}
      />
      {errors[id] && <span className="mt-2 text-red-300"> {errors[id].message} </span>}
    </label>
  )
}
