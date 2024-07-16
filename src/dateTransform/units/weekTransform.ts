import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function weekTransform(op: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCDate(date.getUTCDate() + amt * 7);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const dayOfWeek = date.getDay();
    const middleOfWeek = 3.5;

    if (dayOfWeek >= middleOfWeek) {
      date.setUTCDate(date.getUTCDate() + (7 - dayOfWeek));
    } else {
      date.setUTCDate(date.getUTCDate() - dayOfWeek);
    }

    return date;
  };

  return dateTransform(
    op,
    amount,
    TimeUnit.WEEK,
    performOperation,
    roundOperation
  );
}

export default weekTransform;
