import dateTransform from "..";
import { TimeOperator, TimeUnit } from "../../types/dateTypes";

function monthTransport(op: TimeOperator, amount?: number) {
  const performOperation = (date: Date, amt: number): Date => {
    date.setUTCMonth(date.getUTCMonth() + amt);
    return date;
  };

  const roundOperation = (date: Date): Date => {
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const middleOfMonth = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      Math.ceil(daysInMonth / 2)
    );

    if (date >= middleOfMonth) {
      date.setUTCMonth(date.getUTCMonth() + 1, 1);
    } else {
      date.setUTCMonth(date.getUTCMonth(), 1);
    }

    return date;
  };

  return dateTransform(
    op,
    amount,
    TimeUnit.MONTH,
    performOperation,
    roundOperation
  );
}

export default monthTransport;
