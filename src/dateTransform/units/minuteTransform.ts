import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function minuteTransform(timeOperator: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCMinutes(date.getUTCMinutes() + amt);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const middleOfMinute = 30;
    if (date.getUTCSeconds() >= middleOfMinute) {
      date.setUTCMinutes(date.getUTCMinutes() + 1);
    }
    date.setUTCSeconds(0, 0);
    return date;
  };

  return dateTransform(
    timeOperator,
    amount,
    TimeUnit.MINUTE,
    performOperation,
    roundOperation
  );
}

export default minuteTransform;
