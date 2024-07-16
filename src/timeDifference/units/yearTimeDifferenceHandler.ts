import createTimeDifference from "..";
import yearTransform from "../../dateTransform/units/yearTransform";
import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../../types/dateTypes";

function yearTimeDifferenceHandler(): TimeDifference {
  const change = (
    timeOperator: TimeOperator,
    amount?: number
  ): DateTransform => {
    return yearTransform(timeOperator, amount);
  };

  const timeDifferenceHandler = createTimeDifference(change);

  const difference = (current: Date, date: Date): DateTransform | undefined => {
    const isFutureDate = timeDifferenceHandler.isFutureDate(current, date);
    const diffDate = new Date(Math.abs(current.getTime() - date.getTime()));
    const differenceAmount: number = Math.floor(diffDate.getFullYear() - 1970);

    return timeDifferenceHandler.add(
      differenceAmount * (isFutureDate ? 1 : -1)
    );
  };

  return {
    ...timeDifferenceHandler,
    difference,
  };
}

export default yearTimeDifferenceHandler;
