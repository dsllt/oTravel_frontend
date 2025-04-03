import CategorySelect from '@ui/profile/category-select';
import Input from '@ui/profile/modal-input';
import TextArea from '@ui/profile/modal-text-area';
import {
  Categories,
  Place,
  initialCategories,
} from '../../domain/models/place';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { useState } from 'react';
import { PlaceSchema } from '../../domain/schemas/place-schema';

type PlaceInputsProps = {
  place?: Place;
  register: UseFormRegister<PlaceSchema>;
  errors: FieldErrors<PlaceSchema>;
  setValue: UseFormSetValue<PlaceSchema>;
};
const PlaceInputs = ({
  place,
  register,
  errors,
  setValue,
}: PlaceInputsProps) => {
  const currentCategories = place?.category.reduce((acc, category) => {
    if (initialCategories[category]) {
      acc[category] = initialCategories[category];
    }
    return acc;
  }, {} as Categories);
  const [selectedCategories, setSelectedCategories] = useState<Categories>(
    currentCategories ?? {},
  );
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
        initialValue={place?.name ?? ''}
      />
      <Input
        label="Endereço"
        id="placeAddress"
        required
        register={register}
        errors={errors}
        initialValue={place?.address ?? ''}
      />
      <div className="flex gap-4">
        <Input
          label="Cidade"
          id="placeCity"
          required
          register={register}
          errors={errors}
          initialValue={place?.city ?? ''}
        />
        <Input
          label="País"
          id="placeCountry"
          required
          register={register}
          errors={errors}
          initialValue={place?.country ?? ''}
        />
      </div>
      <div className="flex gap-4">
        <Input
          label="Latitude"
          id="placeLatitude"
          required
          register={register}
          errors={errors}
          initialValue={place?.latitude ?? ''}
        />
        <Input
          label="Longitude"
          id="placeLongitude"
          required
          register={register}
          errors={errors}
          initialValue={place?.longitude ?? ''}
        />
      </div>
      <Input
        label="URL da imagem"
        id="placeImage"
        type="url"
        required
        register={register}
        errors={errors}
        initialValue={place?.imageUrl ?? ''}
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
          initialValue={place?.description ?? ''}
        />
        <div className="flex w-1/2 flex-col">
          <Input
            label="Slug"
            id="placeSlug"
            required
            register={register}
            errors={errors}
            initialValue={place?.slug ?? ''}
          />
          <Input
            label="Telefone"
            id="placePhone"
            required={false}
            register={register}
            errors={errors}
            initialValue={place?.phone ?? ''}
          />
          <Input
            label="Nota"
            id="placeRating"
            required={false}
            register={register}
            errors={errors}
            initialValue={place?.rating ?? ''}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceInputs;
