# Date Shorthand Utility

This project provides utility functions for parsing and stringifying date shorthand notations. The goal is to easily construct dates using a shorthand syntax like `now-1d/d`.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Functions](#functions)
- [Examples](#examples)
- [Glossary](#glossary)

## Getting Started

Install the dependencies using Yarn:

```bash
$ yarn install
```

## Usage

### Building the Project

To build the project, compile the TypeScript files using:

```bash
$ yarn build
```

### Running the Test Script

You can run and play with the `testScript.ts` file to see how the utility functions work.

```bash
$ node dist/testScript.js
```

## Testing

To run the tests, use the following command:

```bash
$ yarn test
```

## Functions

#### Parse
Converts a shorthand date string to a `Date` object.

#### Stringify
Converts a `Date` object to a shorthand date string.

### Signature:

```typescript
type DateString = String;

fn parse(datestring: DateString): Date;
fn stringify(date: Date): DateString;
```

## Examples

Given the current date and time is `2020-05-01T00:00:00.000Z`:

```
now-1y/y  -> 2019-01-01T00:00:00.000Z - now minus one year rounded to the nearest year
now/y     -> 2020-01-01T00:00:00.000Z - now rounded to the nearest year
now-1d    -> 2020-04-30T00:00:00.000Z - now minus 1 day
now+1d    -> 2020-05-02T00:00:00.000Z - now add 1 day
now-4d-4h -> 2020-04-26T20:00:00.000Z - now minus four days and four hours
```

## Glossary

### Units

This is an exhaustive list of units of time:

```
d day
M month
y year
h hour
m minute
s second
w week
```

### Operators

This is an exhaustive list of operators:

```
- subtract
+ add
/{unit} round to closest unit
```
