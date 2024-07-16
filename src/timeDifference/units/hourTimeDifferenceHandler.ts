import createTimeDifference from "..";
import hourTransform from "../../dateTransform/units/hourTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";
import { timeConversionUtils } from "../../utils/timeConversionUtils";

function hourTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return hourTransform(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const isFutureDate = timeDifferenceHandler.isFutureDate(current, date);
    const msInHour = timeConversionUtils.toMilliseconds.hours(1);

    const diff = Math.floor(
      Math.abs(current.getTime() - date.getTime()) / msInHour
    );

    return timeDifferenceHandler.add(diff * (isFutureDate ? 1 : -1));
  };

  return {
    ...timeDifferenceHandler,
    difference,
  };
}

export default hourTimeDifferenceHandler;
