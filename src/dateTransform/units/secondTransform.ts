import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function secondTransform(op: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCSeconds(date.getUTCSeconds() + amt);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const middleOfSecond = 500;
    if (date.getMilliseconds() >= middleOfSecond) {
      date.setUTCSeconds(date.getUTCSeconds() + 1);
    }
    date.setMilliseconds(0);
    return date;
  };

  return dateTransform(
    op,
    amount,
    TimeUnit.SECOND,
    performOperation,
    roundOperation
  );
}

export default secondTransform;
