import createTimeDifference from "..";
import weekTransform from "../../dateTransform/units/weekTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";
import { timeConversionUtils } from "../../utils/timeConversionUtils";

function weekTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return weekTransform(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const isFutureDate = timeDifferenceHandler.isFutureDate(current, date);
    const msInWeek = timeConversionUtils.toMilliseconds.weeks(1);

    const difference = Math.floor(
      Math.abs(current.getTime() - date.getTime()) / msInWeek
    );

    return timeDifferenceHandler.add(difference * (isFutureDate ? 1 : -1));
  };

  return {
    ...timeDifferenceHandler,
    difference,
  };
}

export default weekTimeDifferenceHandler;
