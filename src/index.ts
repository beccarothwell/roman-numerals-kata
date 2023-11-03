export function convertNumberToNumeral(num: number) {
  if (num > 3000) {
    return "The Romans didn't tend to go higher than 3000, so we won't either!";
  }

  const numString = num.toString();
  let numeralString = "";

  const singleDigit = Number(numString.at(-1));
  const singleDigitNumeral = numeralPatternHelper(singleDigit, "I", "V", "X");
  numeralString = singleDigitNumeral;

  if (num < 10) {
    return numeralString;
  }

  const doubleDigit = Number(numString.at(-2));
  const doubleDigitNumeral = numeralPatternHelper(doubleDigit, "X", "L", "C");
  numeralString = doubleDigitNumeral + numeralString;

  if (num < 100) {
    return numeralString;
  }

  const tripleDigit = Number(numString.at(-3));
  const tripleDigitNumeral = numeralPatternHelper(tripleDigit, "C", "D", "M");
  numeralString = tripleDigitNumeral + numeralString;

  if (num < 1000) {
    return numeralString;
  }

  const quadDigit = Number(numString.at(-4));
  const quadDigitNumeral = "M".repeat(quadDigit);

  return quadDigitNumeral + numeralString;
}

function numeralPatternHelper(
  num: number,
  one: string,
  five: string,
  ten: string
) {
  let numeralString = "";

  if (num <= 3) {
    numeralString = one.repeat(num);
  } else if (num === 4) {
    numeralString = one + five;
  } else if (num === 5) {
    numeralString = five;
  } else if (num <= 8) {
    numeralString = five + one.repeat(num - 5);
  } else if (num === 9) {
    numeralString = one + ten;
  }

  return numeralString;
}
