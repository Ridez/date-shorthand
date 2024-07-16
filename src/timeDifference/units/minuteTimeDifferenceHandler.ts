import createTimeDifference from "..";
import minuteTransform from "../../dateTransform/units/minuteTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";
import { timeConversionUtils } from "../../utils/timeConversionUtils";

function minuteTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return minuteTransform(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const isFutureDate = timeDifferenceHandler.isFutureDate(current, date);
    const msInMin = timeConversionUtils.toMilliseconds.minutes(1);

    const differenceAmount = Math.floor(
      Math.abs(current.getTime() - date.getTime()) / msInMin
    );

    return timeDifferenceHandler.add(
      differenceAmount * (isFutureDate ? 1 : -1)
    );
  };

  return {
    ...timeDifferenceHandler,
    difference,
  };
}

export default minuteTimeDifferenceHandler;
