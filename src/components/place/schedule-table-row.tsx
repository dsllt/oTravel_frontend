import { UseFormRegister } from 'react-hook-form';
import { EditPlaceSchema } from '../../domain/schemas/edit-place-schema';
import { weekDays } from '../../domain/models/place';

type ScheduleTableRowProps = {
  register: UseFormRegister<EditPlaceSchema>;
  weekDay: string;
  closeTime: string;
  openTime: string;
};
const ScheduleTableRow = ({
  closeTime,
  openTime,
  register,
  weekDay,
}: ScheduleTableRowProps) => {
  const formattedWeekDay = weekDays[weekDay];
  const openId = `${weekDay}Open` as keyof EditPlaceSchema;
  const closeId = `${weekDay}Close` as keyof EditPlaceSchema;
  return (
    <tr className="flex justify-between items-center" key={weekDay}>
      <td className="whitespace-nowrap w-24">{formattedWeekDay}</td>
      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
        <input
          type="time"
          className="bg-transparent rounded-lg border border-gray-600 py-2 px-3"
          id={openId as string}
          {...register(openId)}
          defaultValue={openTime}
          name={weekDay}
        />
      </td>
      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
        <input
          type="time"
          className="bg-transparent rounded-lg border border-gray-600 py-2 px-3"
          defaultValue={closeTime}
          id={closeId as string}
          {...register(closeId)}
          name={weekDay}
        />
      </td>
    </tr>
  );
};

export default ScheduleTableRow;
