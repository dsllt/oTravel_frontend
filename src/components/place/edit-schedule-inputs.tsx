import { useRef } from 'react';
import { Schedule } from '../../domain/models/place';
import { UseFormRegister } from 'react-hook-form';
import { EditScheduleSchema } from '../../domain/schemas/edit-place-schema';

type EditScheduleInputsProps = {
  placeSchedule: Schedule[];
  register: UseFormRegister<EditScheduleSchema>;
};
type idTypes = keyof EditScheduleSchema;

const EditScheduleInputs = ({
  placeSchedule,
  register,
}: EditScheduleInputsProps) => {
  const openTimeRefs = useRef<(HTMLInputElement | null)[]>([]);
  const closeTimeRefs = useRef<(HTMLInputElement | null)[]>([]);
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
            {placeSchedule.map((day, index) => {
              const idOpen = `${day.week_day}Open` as idTypes;
              const idClose = `${day.week_day}Close` as idTypes;
              return (
                <tr
                  className="flex justify-between items-center"
                  key={day.week_day}
                >
                  <td className="whitespace-nowrap w-24">{day.week_day}</td>
                  <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                    <input
                      type="time"
                      className="bg-transparent rounded-lg border border-gray-600 py-2 px-3"
                      id={idOpen}
                      {...register(idOpen)}
                      defaultValue={day.open_time}
                      ref={(el) => {
                        openTimeRefs.current[index] = el;
                      }}
                    />
                  </td>
                  <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                    <input
                      type="time"
                      className="bg-transparent rounded-lg border border-gray-600 py-2 px-3"
                      defaultValue={day.close_time}
                      id={idClose}
                      {...register(idClose)}
                      ref={(el) => {
                        closeTimeRefs.current[index] = el;
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditScheduleInputs;
