import {
  DateString,
  DateTransform,
  TimeOperator,
  TimeUnit,
} from "../types/dateTypes";
import dateTransformationFactory from "./dateTransformationFactory";

function extractDateTransforms(dateString: DateString): DateTransform[] {
  return [
    ...constructCalculationOperations(dateString),
    ...constructRoundOperations(dateString),
  ];
}

function constructCalculationOperations(
  dateString: DateString
): DateTransform[] {
  const calculationOperations = dateString.match(/[+-]?\d+[dMyhmsw]/g) ?? [];

  return calculationOperations.map((modifier: string): DateTransform => {
    const operator = modifier[0] as TimeOperator;
    const unit = modifier[modifier.length - 1] as TimeUnit;
    const value = Number(modifier.slice(1, -1));

    return dateTransformationFactory(operator, unit, value);
  });
}

function constructRoundOperations(dateString: DateString): DateTransform[] {
  const roundOperations = dateString.match(/\/[dMyhmsw]/g) ?? [];

  return roundOperations.map((modifier: string): DateTransform => {
    const operator = modifier[0] as TimeOperator;
    const unit = modifier[modifier.length - 1] as TimeUnit;

    return dateTransformationFactory(operator, unit);
  });
}

export {
  extractDateTransforms,
  constructCalculationOperations,
  constructRoundOperations,
};
