import { Schedule, weekDays } from '../../domain/models/place';

type PlaceScheduleProps = {
  placeSchedule: Schedule[];
};

const PlaceSchedule = ({ placeSchedule }: PlaceScheduleProps) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl font-dmSans mb-4">Horários</h1>
      <div className="bg-base-300 p-4 rounded-lg">
        <div className="flex gap-8">
          <div className="align-top w-1/2">
            <table className="table">
              <tbody key="place-schedule-tbody-left">
                {placeSchedule.slice(0, 4).map((day) => {
                  const formattedWeekDay = weekDays[day.weekDay];
                  return (
                    <tr
                      className="hover:bg-base-100 flex justify-between"
                      key={day.weekDay}
                    >
                      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                        {formattedWeekDay}
                      </td>
                      <td className="rounded-r-md py-2 px-1 whitespace-nowrap ">
                        {day.openAt} - {day.closeAt}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="align-top w-1/2">
            <table className="table">
              <tbody key="place-schedule-tbody-right">
                {placeSchedule.slice(4, 7).map((day) => {
                  const formattedWeekDay = weekDays[day.weekDay];
                  return (
                    <tr
                      className="hover:bg-base-100 flex justify-between"
                      key={day.weekDay}
                    >
                      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                        {formattedWeekDay}
                      </td>
                      <td className="rounded-l-md py-2 px-1 whitespace-nowrap">
                        {day.openAt} - {day.closeAt}
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
