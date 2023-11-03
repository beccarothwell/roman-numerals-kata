export function convertNumberToNumeral(num: number) {
  if (num > 3000) {
    return "The Romans didn't tend to go higher than 3000, so we won't either!";
  }

  const numeralPatternArrs = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"],
    ["M", "", ""],
  ] as const;

  const numString = num.toString();
  let numeralString = "";
  let numeralPatternIndex = 0;
  for (let i = numString.length - 1; i >= 0; i--) {
    const digit = Number(numString[i]);
    const pattern = numeralPatternArrs[numeralPatternIndex] as [
      string,
      string,
      string
    ];
    const numeral = numeralPatternHelper(digit, ...pattern);
    numeralPatternIndex++;

    numeralString = numeral + numeralString;
  }

  return numeralString;
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
