import React from 'react';
import { Schedule } from '../../domain/models/place';
import { UseFormRegister } from 'react-hook-form';
import { EditPlaceSchema } from '../../domain/schemas/edit-place-schema';
import ScheduleTableRow from './schedule-table-row';

type EditScheduleInputsProps = {
  placeSchedule: Schedule[];
  register: UseFormRegister<EditPlaceSchema>;
};

const EditScheduleInputs = ({
  placeSchedule,
  register,
}: EditScheduleInputsProps) => {
  return (
    <div>
      <h3>Edite os horários</h3>
      <div className="flex flex-col mb-1">
        <table className="table">
          <tbody>
            <tr className="flex justify-between">
              <td className="whitespace-nowrap w-24"></td>
              <td className="whitespace-nowrap">Abertura</td>
              <td className=" whitespace-nowrap">Fechamento</td>
            </tr>
            {placeSchedule.map(({ close_time, open_time, week_day }) => (
              <ScheduleTableRow
                key={week_day}
                openTime={open_time}
                closeTime={close_time}
                weekDay={week_day}
                register={register}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditScheduleInputs;
