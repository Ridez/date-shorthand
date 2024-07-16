import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function yearTransform(op: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCFullYear(date.getUTCFullYear() + amt);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const middleOfYear = new Date(date.getUTCFullYear(), 5, 16);

    if (date >= middleOfYear) {
      date.setUTCFullYear(date.getUTCFullYear() + 1, 0, 1);
    } else {
      date.setUTCFullYear(date.getUTCFullYear(), 0, 1);
    }

    return date;
  };

  return dateTransform(
    op,
    amount,
    TimeUnit.YEAR,
    performOperation,
    roundOperation
  );
}

export default yearTransform;
