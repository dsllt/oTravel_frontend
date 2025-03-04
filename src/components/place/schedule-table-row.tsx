import { UseFormRegister } from 'react-hook-form';
import { weekDays } from '../../domain/models/place';
import { PlaceSchema } from '../../domain/schemas/place-schema';

type ScheduleTableRowProps = {
  register: UseFormRegister<PlaceSchema>;
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
  const openId = `${weekDay}Open` as keyof PlaceSchema;
  const closeId = `${weekDay}Close` as keyof PlaceSchema;
  return (
    <tr className="flex justify-between items-center" key={weekDay}>
      <td className="whitespace-nowrap w-24">{formattedWeekDay}</td>
      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
        <input
          type="time"
          className="bg-transparent rounded-lg border border-gray-600 py-2 px-3"
          id={openId}
          {...register(openId)}
          defaultValue={openTime}
        />
      </td>
      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
        <input
          type="time"
          className="bg-transparent rounded-lg border border-gray-600 py-2 px-3"
          id={closeId as string}
          {...register(closeId)}
          defaultValue={closeTime}
        />
      </td>
    </tr>
  );
};

export default ScheduleTableRow;
