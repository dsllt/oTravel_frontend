import React from 'react';
import { Place, Schedule } from '../../domain/models/place';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import PlaceInputs from './place-inputs';
import EditScheduleInputs from './edit-schedule-inputs';
import { PlaceSchema, placeSchema } from '../../domain/schemas/place-schema';

type EditPlaceModalProps = {
  placeSchedule: Schedule[];
  place: Place;
};

export default function EditPlaceModal({
  placeSchedule,
  place,
}: EditPlaceModalProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<PlaceSchema>({
    resolver: zodResolver(placeSchema),
  });

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const dialog = document.getElementById('place-edit') as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  };

  const handleSave = (data: PlaceSchema) => {
    console.log(data);
  };
  return (
    <dialog id="place-edit" className="modal">
      <div className="modal-box max-w-2xl">
        <form onSubmit={handleSubmit(handleSave)}>
          <PlaceInputs
            place={place}
            errors={errors}
            register={register}
            setValue={setValue}
          />
          <EditScheduleInputs
            placeSchedule={placeSchedule}
            register={register}
          />

          <div className="modal-action flex justify-center">
            <button className="btn" type="submit">
              Salvar
            </button>
            <button
              className="btn btn-outline btn-error"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
