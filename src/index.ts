export function convertNumberToNumeral(num: number) {
  if (!Number.isInteger(num))
    throw new Error(
      "num must be an integer. The Romans did not have decimal point number notation."
    );
  if (num > 3000) {
    throw new Error(
      "The Romans didn't tend to go higher than 3000, so we won't either!"
    );
  }

  const numerals = ["I", "V", "X", "L", "C", "D", "M"] as const;
  let oneNumeralIndex = 0;
  let fiveNumeralIndex = 1;
  let tenNumeralIndex = 2;

  return [...num.toString()].reduceRight((accString, currVal) => {
    const digit = Number(currVal);
    const numeral = oneToNineNumeralPattern(
      digit,
      numerals[oneNumeralIndex],
      numerals[fiveNumeralIndex],
      numerals[tenNumeralIndex]
    );

    oneNumeralIndex += 2;
    fiveNumeralIndex += 2;
    tenNumeralIndex += 2;

    return numeral + accString;
  }, "");
}

function oneToNineNumeralPattern(
  num: number,
  oneNumeral: string,
  fiveNumeral: string,
  tenNumeral: string
) {
  let numeralString = "";

  if (num <= 3) {
    numeralString = oneNumeral.repeat(num);
  } else if (num === 4) {
    numeralString = oneNumeral + fiveNumeral;
  } else if (num === 5) {
    numeralString = fiveNumeral;
  } else if (num <= 8) {
    numeralString = fiveNumeral + oneNumeral.repeat(num - 5);
  } else if (num === 9) {
    numeralString = oneNumeral + tenNumeral;
  }

  return numeralString;
}
