import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function hourTransform(timeOperator: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCHours(date.getUTCHours() + amt);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const middleOfHour = 30;
    if (date.getUTCMinutes() >= middleOfHour) {
      date.setUTCHours(date.getUTCHours() + 1);
    }
    date.setUTCMinutes(0, 0, 0);
    return date;
  };

  return dateTransform(
    timeOperator,
    amount,
    TimeUnit.HOUR,
    performOperation,
    roundOperation
  );
}

export default hourTransform;
