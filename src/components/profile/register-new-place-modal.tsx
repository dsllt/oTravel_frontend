import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PlaceInputs from '@ui/place/place-inputs';
import { PlaceSchema, placeSchema } from '../../domain/schemas/place-schema';
import EditScheduleInputs from '@ui/place/edit-schedule-inputs';

type RegisterNewPlaceModalProps = {
  onClickCloseInnerModal: () => void;
};

export default function RegisterNewPlaceModal({
  onClickCloseInnerModal,
}: RegisterNewPlaceModalProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<PlaceSchema>({
    resolver: zodResolver(placeSchema),
  });
  const [displayScheduleInputs, setDisplayScheduleInputs] = useState(false);

  async function handleIncludeNewPlace(data: PlaceSchema) {
    // const placeCategory = Object.keys(data.placeCategory).map((category) =>
    //   category.toUpperCase(),
    // );
    // const place: CreatePlaceDTO = {
    //   name: data.placeName,
    //   image_url: data.placeImage,
    //   description: data.placeDescription,
    //   address: data.placeAddress,
    //   city: data.placeCity,
    //   country: data.placeCountry,
    //   latitude: data.placeLatitude,
    //   longitude: data.placeLongitude,
    //   phone: data.placePhone,
    //   slug: data.placeSlug,
    //   category: placeCategory,
    // };
    // await postPlace(place);

    const schedule = [
      {
        week_day: 'monday',
        open_time: data.mondayOpen,
        close_time: data.mondayClose,
      },
      {
        week_day: 'tuesday',
        open_time: data.tuesdayOpen,
        close_time: data.tuesdayClose,
      },
      {
        week_day: 'wednesday',
        open_time: data.wednesdayOpen,
        close_time: data.wednesdayClose,
      },
      {
        week_day: 'thursday',
        open_time: data.thursdayOpen,
        close_time: data.thursdayClose,
      },
      {
        week_day: 'friday',
        open_time: data.fridayOpen,
        close_time: data.fridayClose,
      },
      {
        week_day: 'saturday',
        open_time: data.saturdayOpen,
        close_time: data.saturdayClose,
      },
      {
        week_day: 'sunday',
        open_time: data.sundayOpen,
        close_time: data.sundayClose,
      },
    ];
    reset();
  }

  return (
    <div className="py-5 px-6 gap-8 h-full flex flex-col shadow-shape bg-zinc-700 w-6/12">
      <div className="w-full flex justify-end items-end">
        <button onClick={() => onClickCloseInnerModal()}>
          <X className="size-5 text-zinc-400" />
        </button>
      </div>
      <h2 className="text-2xl">Registrar novo local</h2>
      <div className="flex flex-col overflow-y-scroll gap-4 w-full border border-gray-400 rounded-lg px-5 py-5">
        <form
          onSubmit={handleSubmit(handleIncludeNewPlace)}
          className="min-w-[600px]"
        >
          <PlaceInputs
            errors={errors}
            register={register}
            setValue={setValue}
          />
          {displayScheduleInputs && <EditScheduleInputs register={register} />}

          <div className="flex items-center w-full justify-center py-4 gap-4">
            {!displayScheduleInputs && (
              <button
                type="button"
                className="rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-secondary text-primary-content text-sm font-semibold"
                onClick={() => setDisplayScheduleInputs(true)}
              >
                Definir horários
              </button>
            )}
            <button
              type="submit"
              className="rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-primary text-primary-content text-sm font-semibold"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
