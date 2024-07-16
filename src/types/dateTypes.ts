export enum TimeOperator {
  ADD = "+",
  SUBTRACT = "-",
  ROUND = "/",
}

export enum TimeUnit {
  DAY = "d",
  MONTH = "M",
  YEAR = "y",
  HOUR = "h",
  MINUTE = "m",
  SECOND = "s",
  WEEK = "w",
}
export type DateString = string;

export interface DateTransform {
  execute(date: Date): Date;
  describe(): string;
  getUnit(): TimeUnit;
}

export type TimeDifference = {
  change: (timeOperator: TimeOperator, amount?: number) => DateTransform;
  round: () => DateTransform;
  add: (amount: number) => DateTransform | undefined;
  difference: (current: Date, date: Date) => DateTransform | undefined;
  isRounded: (current: Date, date: Date) => DateTransform | undefined;
  start: (a: Date, b: Date) => Date;
  end: (a: Date, b: Date) => Date;
  isFutureDate: (now: Date, date: Date) => boolean;
};
