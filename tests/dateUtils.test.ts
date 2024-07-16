import { parse, stringify } from "../src/utils/dateUtils";

const originalDateNow = Date.now;

beforeAll(() => {
  global.Date.now = jest.fn(() =>
    new Date("2020-05-01T00:00:00.000Z").getTime()
  );
});

afterAll(() => {
  global.Date.now = originalDateNow;
});

const testCases = [
  { input: "now-1y/y", expectedDate: new Date("2019-01-01T00:00:00.000Z") },
  { input: "now/y", expectedDate: new Date("2020-01-01T00:00:00.000Z") },
  { input: "now-1d", expectedDate: new Date("2020-04-30T00:00:00.000Z") },
  { input: "now+1d", expectedDate: new Date("2020-05-02T00:00:00.000Z") },
  { input: "now-4d-4h", expectedDate: new Date("2020-04-26T20:00:00.000Z") },
];

const additionalParseTestCases = [
  {
    input: "now-1y+1M-1d+1h",
    expectedDate: new Date("2019-05-31T01:00:00.000Z"),
  },
  { input: "now+1y", expectedDate: new Date("2021-05-01T00:00:00.000Z") },
  { input: "now+1M-1d", expectedDate: new Date("2020-05-31T00:00:00.000Z") },
];

describe("dateUtils", () => {
  describe("parse", () => {
    testCases.forEach(({ input, expectedDate }) => {
      it(`should parse ${input} correctly`, () => {
        const parsedDate = parse(input);
        expect(parsedDate).toEqual(expectedDate);
      });
    });

    additionalParseTestCases.forEach(({ input, expectedDate }) => {
      console.log(new Date());
      it(`should parse ${input} correctly`, () => {
        const parsedDate = parse(input);
        expect(parsedDate).toEqual(expectedDate);
      });
    });
  });

  describe("stringify", () => {
    testCases.forEach(({ input, expectedDate }) => {
      it(`should stringify ${expectedDate.toISOString()} correctly`, () => {
        const dateString = stringify(expectedDate);
        expect(dateString).toEqual(input);
      });
    });
  });
});
