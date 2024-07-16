import createTimeDifference from "..";
import secondTransform from "../../dateTransform/units/secondTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";
import { timeConversionUtils } from "../../utils/timeConversionUtils";

function secondTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return secondTransform(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const isFutureDate = timeDifferenceHandler.isFutureDate(current, date);
    const msInSec = timeConversionUtils.toMilliseconds.seconds(1);

    const differenceAmount = Math.floor(
      Math.abs(current.getTime() - date.getTime()) / msInSec
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

export default secondTimeDifferenceHandler;
