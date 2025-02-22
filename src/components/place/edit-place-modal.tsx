import React from 'react';
import { Place, Schedule } from '../../domain/models/place';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import EditPlaceInputs from './edit-place-inputs';
import EditScheduleInputs from './edit-schedule-inputs';
import {
  EditPlaceSchema,
  EditScheduleSchema,
  editPlaceSchema,
  editScheduleSchema,
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
  const {
    register: registerSchedule,
    handleSubmit: handleSubmitSchedule,
    setValue: setValueSchedule,
    formState: { errors: errorsSchedule },
    reset: resetSchedule,
  } = useForm<EditScheduleSchema>({
    resolver: zodResolver(editScheduleSchema),
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
  const handleSaveSchedule = (data: EditScheduleSchema) => {
    console.log(data);
  };
  console.log(errors, errorsSchedule);
  return (
    <dialog id="place-edit" className="modal">
      <div className="modal-box max-w-2xl">
        <form
          onSubmit={
            handleSubmit(handleSave) && handleSubmitSchedule(handleSaveSchedule)
          }
        >
          <EditPlaceInputs
            place={place}
            errors={errors}
            register={register}
            setValue={setValue}
          />
          <EditScheduleInputs
            placeSchedule={placeSchedule}
            register={registerSchedule}
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
