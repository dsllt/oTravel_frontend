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
    weekDay: 'monday',
    openAt: '08:00',
    closeAt: '18:00',
  },
  {
    weekDay: 'tuesday',
    openAt: '08:00',
    closeAt: '18:00',
  },
  {
    weekDay: 'wednesday',
    openAt: '08:00',
    closeAt: '18:00',
  },
  {
    weekDay: 'thursday',
    openAt: '08:00',
    closeAt: '18:00',
  },
  {
    weekDay: 'friday',
    openAt: '08:00',
    closeAt: '18:00',
  },
  {
    weekDay: 'saturday',
    openAt: '08:00',
    closeAt: '18:00',
  },
  {
    weekDay: 'sunday',
    openAt: '08:00',
    closeAt: '18:00',
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
            {schedule.map(({ closeAt, openAt, weekDay }) => (
              <ScheduleTableRow
                key={weekDay}
                openTime={openAt}
                closeTime={closeAt}
                weekDay={weekDay}
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
