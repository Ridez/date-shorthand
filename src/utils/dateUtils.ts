import { extractDateTransforms } from "../dateTransform/dateTransformationExtractor";
import dayTimeDifference from "../timeDifference/units/dayTimeDifferenceHandler";
import hourTimeDifference from "../timeDifference/units/hourTimeDifferenceHandler";
import minuteTimeDifference from "../timeDifference/units/minuteTimeDifferenceHandler";
import monthTimeDifference from "../timeDifference/units/monthTimeDifferenceHandler";
import secondTimeDifference from "../timeDifference/units/secondTimeDifferenceHandler";
import weekTimeDifference from "../timeDifference/units/weekTimeDifferenceHandler";
import yearTimeDifference from "../timeDifference/units/yearTimeDifferenceHandler";
import { DateString, DateTransform } from "../types/dateTypes";

function parse(dateString: DateString): Date {
  let current = new Date();
  const timeModifiers = extractDateTransforms(dateString);

  return timeModifiers.reduce((carry, modifier) => {
    return modifier.execute(carry);
  }, current);
}

function stringify(date: Date): DateString {
  const timeUnits = [
    yearTimeDifference(),
    monthTimeDifference(),
    weekTimeDifference(),
    dayTimeDifference(),
    hourTimeDifference(),
    minuteTimeDifference(),
    secondTimeDifference(),
  ];

  const differences: DateTransform[] = [];
  let current = new Date();

  for (const unit of timeUnits) {
    const difference = unit.difference(current, date);
    if (difference) {
      differences.push(difference);
      current = difference.execute(current);
    }

    const isRounded = unit.isRounded(current, date);
    if (isRounded) {
      differences.push(isRounded);
      break;
    }
  }

  return differences.reduce((carry, current) => {
    return carry + current.describe();
  }, "now");
}

export { parse, stringify };
