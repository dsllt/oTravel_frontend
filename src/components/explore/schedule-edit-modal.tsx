import React, { useRef } from 'react';
import { Schedule } from '../../domain/models/place';

type ScheduleEditModalProps = {
  placeSchedule: Schedule[];
  setPlaceSchedule: React.Dispatch<React.SetStateAction<Schedule[]>>;
};

export default function ScheduleEditModal({
  placeSchedule,
  setPlaceSchedule,
}: ScheduleEditModalProps) {
  const openTimeRefs = useRef<(HTMLInputElement | null)[]>([]);
  const closeTimeRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleUpdateSchedule(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const updatedSchedule = placeSchedule.map((day, index) => ({
      ...day,
      open_time: openTimeRefs.current[index]?.value || day.open_time,
      close_time: closeTimeRefs.current[index]?.value || day.close_time,
    }));

    setPlaceSchedule(updatedSchedule);

    const dialog = document.getElementById(
      'schedule-edit',
    ) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }

  return (
    <dialog id="schedule-edit" className="modal">
      <div className="modal-box">
        <form>
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

          <div className="modal-action flex justify-center">
            <button className="btn" onClick={handleUpdateSchedule}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
