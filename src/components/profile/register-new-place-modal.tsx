import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PlaceInputs from '@ui/place/place-inputs';
import { PlaceSchema, placeSchema } from '../../domain/schemas/place-schema';
import EditScheduleInputs from '@ui/place/edit-schedule-inputs';
import { postSchedule } from '@lib/usecases/post-schedule';
import { CreatePlaceDTO } from '../../domain/models/place';
import { postPlace } from '@lib/usecases/post-place';
import { ServiceError } from '../../domain/errors/ServiceError';

type RegisterNewPlaceModalProps = {
  onClickCloseInnerModal: () => void;
};

const convertToOffsetTime = (time: string): string => {
  return `${time}:00+00:00`;
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
    try {
      const placeCategory = Object.keys(data.placeCategory).map((category) =>
        category.toUpperCase(),
      );
      const place: CreatePlaceDTO = {
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
      };
      const newPlace = await postPlace(place);

      const schedule = [
        {
          weekDay: 'MONDAY',
          openAt: convertToOffsetTime(data.mondayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.mondayClose ?? '18:00'),
        },
        {
          weekDay: 'TUESDAY',
          openAt: convertToOffsetTime(data.tuesdayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.tuesdayClose ?? '18:00'),
        },
        {
          weekDay: 'WEDNESDAY',
          openAt: convertToOffsetTime(data.wednesdayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.wednesdayClose ?? '18:00'),
        },
        {
          weekDay: 'THURSDAY',
          openAt: convertToOffsetTime(data.thursdayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.thursdayClose ?? '18:00'),
        },
        {
          weekDay: 'FRIDAY',
          openAt: convertToOffsetTime(data.fridayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.fridayClose ?? '18:00'),
        },
        {
          weekDay: 'SATURDAY',
          openAt: convertToOffsetTime(data.saturdayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.saturdayClose ?? '18:00'),
        },
        {
          weekDay: 'SUNDAY',
          openAt: convertToOffsetTime(data.sundayOpen ?? '08:00'),
          closeAt: convertToOffsetTime(data.sundayClose ?? '18:00'),
        },
      ];
      await postSchedule(schedule, newPlace.id);
      // reset();
    } catch (e) {
      if (e instanceof ServiceError) {
        console.error('Erro no serviço:', e.message, e.cause);
      } else {
        console.error('Erro inesperado:', e);
      }
    }
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
