import { DateTransform, TimeOperator, TimeUnit } from "../types/dateTypes";
import dayTransform from "./units/dayTransform";
import hourTransform from "./units/hourTransform";
import minuteManipulator from "./units/minuteTransform";
import monthManipulator from "./units/monthTransform";
import secondManipulator from "./units/secondTransform";
import weekManipulator from "./units/weekTransform";
import yearManipulator from "./units/yearTransform";

function dateTransformationFactory(
  op: TimeOperator,
  unit: TimeUnit,
  amount?: number
): DateTransform {
  switch (unit) {
    case TimeUnit.DAY:
      return dayTransform(op, amount);
    case TimeUnit.HOUR:
      return hourTransform(op, amount);
    case TimeUnit.MINUTE:
      return minuteManipulator(op, amount);
    case TimeUnit.MONTH:
      return monthManipulator(op, amount);
    case TimeUnit.SECOND:
      return secondManipulator(op, amount);
    case TimeUnit.WEEK:
      return weekManipulator(op, amount);
    case TimeUnit.YEAR:
      return yearManipulator(op, amount);
    default:
      throw new Error(`Unsupported time unit: ${unit}`);
  }
}

export default dateTransformationFactory;
