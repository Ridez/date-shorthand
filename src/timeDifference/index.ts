import {
  DateTransform,
  TimeDifference,
  TimeOperator,
} from "../types/dateTypes";

function createTimeDifference(
  changeFn: (timeOperator: TimeOperator, amount?: number) => DateTransform
): Omit<TimeDifference, "difference"> {
  const change = changeFn;

  const round = (): DateTransform => {
    return change(TimeOperator.ROUND);
  };

  const add = (amount: number): DateTransform | undefined => {
    if (amount === 0) {
      return undefined;
    }

    return change(
      amount > 0 ? TimeOperator.ADD : TimeOperator.SUBTRACT,
      amount
    );
  };

  const isRounded = (current: Date, date: Date): DateTransform | undefined => {
    let modifiedCurrent: Date = new Date(current);
    modifiedCurrent = round().execute(modifiedCurrent);

    const isRounded: boolean =
      current.getTime() !== modifiedCurrent.getTime() &&
      date.getTime() === modifiedCurrent.getTime();

    if (!isRounded) {
      return undefined;
    }

    return round();
  };

  const start = (a: Date, b: Date): Date => {
    return a > b ? b : a;
  };

  const end = (a: Date, b: Date): Date => {
    return a > b ? a : b;
  };

  const isFutureDate = (now: Date, date: Date): boolean => {
    return date > now;
  };

  return {
    change,
    round,
    add,
    isRounded,
    start,
    end,
    isFutureDate,
  };
}

export default createTimeDifference;
