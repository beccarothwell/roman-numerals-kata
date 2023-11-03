export function convertNumberToNumeral(num: number) {
  /*switch (num) {
    case 1:
      return "I";
    case 5:
      return "V";
    case 10:
      return "X";
    case 50:
      return "L";
    case 100:
      return "C";
    case 500:
      return "D";
    case 1000:
      return "M";
    default:
      return "Cannot parse this number to numeral yet";
  }*/

  return numeralPatternHelper(num, "I", "V", "X");
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
    numeralString = five + one.repeat(num);
  } else if (num === 9) {
    numeralString = one + ten;
  }

  return numeralString;
}
