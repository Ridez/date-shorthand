import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function dayTransform(timeOperator: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCDate(date.getUTCDate() + amt);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const middleOfDay = 12;
    if (date.getUTCHours() >= middleOfDay) {
      date.setUTCDate(date.getUTCDate() + 1);
    }
    date.setUTCHours(0, 0, 0, 0);
    return date;
  };

  return dateTransform(
    timeOperator,
    amount,
    TimeUnit.DAY,
    performOperation,
    roundOperation
  );
}

export default dayTransform;
