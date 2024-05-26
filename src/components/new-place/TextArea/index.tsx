import { NewPlaceSchema } from '@app/new-place/page';
import React from 'react'
import { UseFormRegister } from 'react-hook-form';

type Props = {
  label: string;
  id: "placeName" | "placeAddress" | "placeCity" | "placeCountry" | "placeLatitude" | "placeLongitude" | "placeImage" | "placeCategory" | "placeDescription" | "placeSlug" | "placePhone";
  required: boolean;
  register: UseFormRegister<NewPlaceSchema>;
  errors: any;
}

function TextArea({ label, id, required = false, register, errors }: Props) {
  return (
    <div className="flex w-1/2 h-[184px]">
      <label htmlFor={id} className="text-sm mb-4 flex flex-col w-full">
        {label}
        <textarea
          id={id}
          {...register(id)}
          className="textarea textarea-bordered mt-2 h-full"
          required={required}
        />
      </label>
    </div>
  )
}

export default TextArea