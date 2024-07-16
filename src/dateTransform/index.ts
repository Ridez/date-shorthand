import { DateTransform, TimeOperator, TimeUnit } from "../types/dateTypes";

type PerformOperation = (date: Date, amount: number) => Date;
type RoundOperation = (date: Date) => Date;

function dateTransform(
  timeOperator: TimeOperator,
  amount: number | undefined,
  unit: TimeUnit,
  performOperation: PerformOperation,
  roundOperation: RoundOperation
): DateTransform {
  const isRoundingOperation = (): boolean =>
    timeOperator === TimeOperator.ROUND && amount === undefined;

  const execute = (date: Date): Date => {
    if (isRoundingOperation()) {
      return roundOperation(new Date(date));
    } else {
      const actualAmount =
        timeOperator === TimeOperator.SUBTRACT
          ? -Math.abs(amount!)
          : Math.abs(amount!);
      return performOperation(new Date(date), actualAmount);
    }
  };

  const describe = (): string => {
    return isRoundingOperation()
      ? `${timeOperator}${unit}`
      : `${timeOperator}${Math.abs(amount!)}${unit}`;
  };

  return {
    execute,
    describe,
    getUnit: (): TimeUnit => unit,
  };
}

export default dateTransform;
