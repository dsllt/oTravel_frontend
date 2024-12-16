import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { NewPlaceSchema } from '../../domain/schemas/new-place-schema';

type Props = {
  label: string;
  id:
    | 'placeName'
    | 'placeAddress'
    | 'placeCity'
    | 'placeCountry'
    | 'placeLatitude'
    | 'placeLongitude'
    | 'placeImage'
    | 'placeCategory'
    | 'placeDescription'
    | 'placeSlug'
    | 'placePhone'
    | 'placeRating';
  required: boolean;
  type?: string;
  register: UseFormRegister<NewPlaceSchema>;
  errors: any;
};

export default function Input({
  label,
  id,
  type = 'text',
  required = false,
  register,
  errors,
}: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <label
      htmlFor={id}
      className="text-sm mb-4 flex flex-col w-full h-12 justify-between"
    >
      {inputValue ? <span className="text-xs">{label}</span> : <span></span>}
      <input
        id={id}
        type={type}
        placeholder={label}
        className="bg-transparent border border-transparent border-b-gray-950 focus:outline-none w-full pb-1 pl-2"
        required={required}
        {...register(id)}
        onChange={handleInputChange}
      />
      {errors[id] && (
        <span className="mt-2 text-red-300"> {errors[id].message} </span>
      )}
    </label>
  );
}
