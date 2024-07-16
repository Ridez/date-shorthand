import createTimeDifference from "..";
import monthTransport from "../../dateTransform/units/monthTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";

function monthTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return monthTransport(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const start: Date = timeDifferenceHandler.start(current, date);
    const end: Date = timeDifferenceHandler.end(current, date);
    const isFutureDate: boolean = timeDifferenceHandler.isFutureDate(
      current,
      date
    );

    const dayDiff = end.getUTCDate() - start.getUTCDate();
    let onYearDifference: number = end.getUTCMonth() - start.getUTCMonth();

    if (dayDiff < 0) {
      onYearDifference = onYearDifference - 1;
    }

    const nonCurrentYearDifference: number =
      12 * (end.getUTCFullYear() - start.getUTCFullYear());

    return timeDifferenceHandler.add(
      (onYearDifference + nonCurrentYearDifference) * (isFutureDate ? 1 : -1)
    );
  };

  return {
    ...timeDifferenceHandler,
    difference,
  };
}

export default monthTimeDifferenceHandler;
