import ScheduleEditModal from '@ui/explore/schedule-edit-modal';
import { Schedule } from '../../domain/models/place';

type PlaceScheduleProps = {
  placeSchedule: Schedule[];
  setPlaceSchedule: React.Dispatch<React.SetStateAction<Schedule[]>>;
};

const PlaceSchedule = ({
  placeSchedule,
  setPlaceSchedule,
}: PlaceScheduleProps) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl font-dmSans mb-4">Horários</h1>
      <div className="bg-base-300 p-4 rounded-lg">
        <div className="flex gap-8">
          <div className="align-top w-1/2">
            <table className="table">
              <tbody>
                {placeSchedule.slice(0, 4).map((day) => {
                  return (
                    <tr
                      className="hover:bg-base-100 flex justify-between"
                      key={day.week_day}
                    >
                      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                        {day.week_day}
                      </td>
                      <td className="rounded-r-md py-2 px-1 whitespace-nowrap ">
                        {day.open_time} - {day.close_time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="align-top w-1/2">
            <table className="table">
              <tbody>
                {placeSchedule.slice(4, 7).map((day) => {
                  return (
                    <tr
                      className="hover:bg-base-100 flex justify-between"
                      key={day.week_day}
                    >
                      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                        {day.week_day}
                      </td>
                      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                        {day.open_time} - {day.close_time}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceSchedule;
