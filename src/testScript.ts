import { DateString } from "./types/dateTypes";
import { parse, stringify } from "./utils/dateUtils";

// Example usage
const dateString: DateString = "now-1y+1M";
const parsedDate = parse(dateString);
console.log(parsedDate);

const date = new Date("2019-07-01T00:00:00.000Z");
const stringifiedDate = stringify(date);
console.log(stringifiedDate);
