import CategorySelect from '@ui/profile/category-select';
import Input from '@ui/profile/modal-input';
import TextArea from '@ui/profile/modal-text-area';
import {
  Categories,
  Place,
  initialCategories,
} from '../../domain/models/place';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { EditPlaceSchema } from '../../domain/schemas/edit-place-schema';
import { useState } from 'react';

type EditPlaceInputsProps = {
  place: Place;
  register: UseFormRegister<EditPlaceSchema>;
  errors: FieldErrors<EditPlaceSchema>;
  setValue: UseFormSetValue<EditPlaceSchema>;
};
const EditPlaceInputs = ({
  place,
  register,
  errors,
  setValue,
}: EditPlaceInputsProps) => {
  const currentCategories = place.category.reduce((acc, category) => {
    if (initialCategories[category]) {
      acc[category] = initialCategories[category];
    }
    return acc;
  }, {} as Categories);
  const [selectedCategories, setSelectedCategories] =
    useState<Categories>(currentCategories);
  const [availableCategories, setAvailableCategories] =
    useState<Categories>(initialCategories);
  return (
    <div>
      <Input
        label="Nome do local"
        id="placeName"
        required
        register={register}
        errors={errors}
        initialValue={place.name}
      />
      <Input
        label="Endereço"
        id="placeAddress"
        required
        register={register}
        errors={errors}
        initialValue={place.address}
      />
      <div className="flex gap-4">
        <Input
          label="Cidade"
          id="placeCity"
          required
          register={register}
          errors={errors}
          initialValue={place.city}
        />
        <Input
          label="País"
          id="placeCountry"
          required
          register={register}
          errors={errors}
          initialValue={place.country}
        />
      </div>
      <div className="flex gap-4">
        <Input
          label="Latitude"
          id="placeLatitude"
          required
          register={register}
          errors={errors}
          initialValue={place.latitude}
        />
        <Input
          label="Longitude"
          id="placeLongitude"
          required
          register={register}
          errors={errors}
          initialValue={place.longitude}
        />
      </div>
      <Input
        label="URL da imagem"
        id="placeImage"
        type="url"
        required
        register={register}
        errors={errors}
        initialValue={place.imageUrl}
      />
      <CategorySelect
        availableCategories={availableCategories}
        initialCategories={initialCategories}
        selectedCategories={selectedCategories}
        setAvailableCategories={setAvailableCategories}
        setSelectedCategories={setSelectedCategories}
        setValue={setValue}
      />
      <div className="flex justify-between gap-4">
        <TextArea
          label="Descrição"
          id="placeDescription"
          required
          register={register}
          errors={errors}
          initialValue={place.description}
        />
        <div className="flex w-1/2 flex-col">
          <Input
            label="Slug"
            id="placeSlug"
            required
            register={register}
            errors={errors}
            initialValue={place.slug}
          />
          <Input
            label="Telefone"
            id="placePhone"
            required={false}
            register={register}
            errors={errors}
            initialValue={place.phone}
          />
          <Input
            label="Nota"
            id="placeRating"
            required={false}
            register={register}
            errors={errors}
            initialValue={place.rating}
          />
        </div>
      </div>
    </div>
  );
};

export default EditPlaceInputs;
