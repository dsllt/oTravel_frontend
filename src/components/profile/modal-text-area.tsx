import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { NewPlaceSchema } from "./register-new-place-modal";

type Props = {
  label: string;
  id:
    | "placeName"
    | "placeAddress"
    | "placeCity"
    | "placeCountry"
    | "placeLatitude"
    | "placeLongitude"
    | "placeImage"
    | "placeCategory"
    | "placeDescription"
    | "placeSlug"
    | "placePhone";
  required: boolean;
  register: UseFormRegister<NewPlaceSchema>;
  errors: any;
};

function TextArea({ label, id, required = false, register, errors }: Props) {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };
  return (
    <div className="flex w-1/2 h-[190px]">
      <label htmlFor={id} className="text-sm mb-4 flex flex-col w-full">
        {textValue ? <span className="text-xs">{label}</span> : <span></span>}
        <textarea
          id={id}
          placeholder={label}
          className=" bg-transparent border border-transparent border-b-gray-950 focus:outline-none w-full h-full pb-1 pl-2"
          required={required}
          {...register(id)}
          onChange={handleTextChange}
        />
      </label>
    </div>
  );
}

export default TextArea;
