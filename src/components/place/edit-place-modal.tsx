import React from 'react';
import { Place, Schedule } from '../../domain/models/place';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import EditPlaceInputs from './edit-place-inputs';
import EditScheduleInputs from './edit-schedule-inputs';
import {
  EditPlaceSchema,
  editPlaceSchema,
} from '../../domain/schemas/edit-place-schema';

type ScheduleEditModalProps = {
  placeSchedule: Schedule[];
  place: Place;
};

export default function EditPlaceModal({
  placeSchedule,
  place,
}: ScheduleEditModalProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<EditPlaceSchema>({
    resolver: zodResolver(editPlaceSchema),
  });

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const dialog = document.getElementById('place-edit') as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  };

  const handleSave = (data: EditPlaceSchema) => {
    console.log(data);
  };
  return (
    <dialog id="place-edit" className="modal">
      <div className="modal-box max-w-2xl">
        <form onSubmit={handleSubmit(handleSave)}>
          <EditPlaceInputs
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
