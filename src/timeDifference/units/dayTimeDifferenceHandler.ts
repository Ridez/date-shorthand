import createTimeDifference from "..";
import dayTransform from "../../dateTransform/units/dayTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";
import { timeConversionUtils } from "../../utils/timeConversionUtils";

function dayTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return dayTransform(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const isFutureDate = timeDifferenceHandler.isFutureDate(current, date);
    const msInDay = timeConversionUtils.toMilliseconds.days(1);

    const days = Math.floor(
      Math.abs((current.getTime() - date.getTime()) / msInDay)
    );

    return timeDifferenceHandler.add(days * (isFutureDate ? 1 : -1));
  };

  return {
    ...timeDifferenceHandler,
    difference,
  };
}

export default dayTimeDifferenceHandler;
