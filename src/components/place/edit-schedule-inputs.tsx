import React from 'react';
import { Schedule } from '../../domain/models/place';
import { UseFormRegister } from 'react-hook-form';
import ScheduleTableRow from './schedule-table-row';
import { PlaceSchema } from '../../domain/schemas/place-schema';

type EditScheduleInputsProps = {
  placeSchedule?: Schedule[];
  register: UseFormRegister<PlaceSchema>;
};

const emptySchedule = [
  {
    week_day: 'monday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'tuesday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'wednesday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'thursday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'friday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'saturday',
    open_time: '08:00',
    close_time: '18:00',
  },
  {
    week_day: 'sunday',
    open_time: '08:00',
    close_time: '18:00',
  },
];

const EditScheduleInputs = ({
  placeSchedule,
  register,
}: EditScheduleInputsProps) => {
  const schedule = placeSchedule ?? emptySchedule;
  const title = placeSchedule ? 'Edite os horários' : 'Defina os horários';
  return (
    <div>
      <h3>{title}</h3>
      <div className="flex flex-col mb-1">
        <table className="table">
          <tbody>
            <tr className="flex justify-between">
              <td className="whitespace-nowrap w-24"></td>
              <td className="whitespace-nowrap">Abertura</td>
              <td className=" whitespace-nowrap">Fechamento</td>
            </tr>
            {schedule.map(({ close_time, open_time, week_day }) => (
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
