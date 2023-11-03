import { convertNumberToNumeral } from "../src/index";

/*
 ** Roman Numerals Reference:
 **
 ** I = 1
 ** V = 5
 ** X = 10
 ** L = 50
 ** C = 100
 ** D = 500
 ** M = 1000
 */

describe("test single numerals", () => {
  test("1 should return 'I'", () => {
    expect(convertNumberToNumeral(1)).toBe("I");
  });
  test("5 should return 'V'", () => {
    expect(convertNumberToNumeral(5)).toBe("V");
  });
  test("10 should return 'X'", () => {
    expect(convertNumberToNumeral(10)).toBe("X");
  });
  test("50 should return 'L'", () => {
    expect(convertNumberToNumeral(50)).toBe("L");
  });
  test("100 should return 'C'", () => {
    expect(convertNumberToNumeral(100)).toBe("C");
  });
  test("500 should return 'D'", () => {
    expect(convertNumberToNumeral(500)).toBe("D");
  });
  test("1000 should return 'M'", () => {
    expect(convertNumberToNumeral(1000)).toBe("M");
  });
});
describe("test single digit numbers", () => {
  test("2 should return 'II'", () => {
    expect(convertNumberToNumeral(2)).toBe("II");
  });
  test("3 should return 'III'", () => {
    expect(convertNumberToNumeral(3)).toBe("III");
  });
  test("4 should return 'IV'", () => {
    expect(convertNumberToNumeral(4)).toBe("IV");
  });
  test("6 should return 'VI'", () => {
    expect(convertNumberToNumeral(6)).toBe("VI");
  });
  test("7 should return 'VII'", () => {
    expect(convertNumberToNumeral(7)).toBe("VII");
  });
  test("8 should return 'VIII'", () => {
    expect(convertNumberToNumeral(8)).toBe("VIII");
  });
  test("9 should return 'IX'", () => {
    expect(convertNumberToNumeral(9)).toBe("IX");
  });
});

describe("test double digit numbers", () => {
  test("12 should return 'XII'", () => {
    expect(convertNumberToNumeral(12)).toBe("XII");
  });
  test("23 should return 'XXIII'", () => {
    expect(convertNumberToNumeral(23)).toBe("XXIII");
  });
  test("34 should return 'XXXIV'", () => {
    expect(convertNumberToNumeral(34)).toBe("XXXIV");
  });
  test("49 should return 'XLIX'", () => {
    expect(convertNumberToNumeral(49)).toBe("XLIX");
  });
  test("58 should return 'LVIII'", () => {
    expect(convertNumberToNumeral(58)).toBe("LVIII");
  });
  test("66 should return 'LXVI'", () => {
    expect(convertNumberToNumeral(66)).toBe("LXVI");
  });
  test("71 should return 'LXXI'", () => {
    expect(convertNumberToNumeral(71)).toBe("LXXI");
  });
  test("85 should return 'LXXXV'", () => {
    expect(convertNumberToNumeral(85)).toBe("LXXXV");
  });
  test("97 should return 'XCVII'", () => {
    expect(convertNumberToNumeral(97)).toBe("XCVII");
  });
});

describe("test triple digit numbers", () => {
  test("129 should return 'CXXIX'", () => {
    expect(convertNumberToNumeral(129)).toBe("CXXIX");
  });
  test("231 should return 'CCXXXI'", () => {
    expect(convertNumberToNumeral(231)).toBe("CCXXXI");
  });
  test("343 should return 'CCCXLIII'", () => {
    expect(convertNumberToNumeral(343)).toBe("CCCXLIII");
  });
  test("497 should return 'CDXCVII'", () => {
    expect(convertNumberToNumeral(497)).toBe("CDXCVII");
  });
  test("582 should return 'DLXXXII'", () => {
    expect(convertNumberToNumeral(582)).toBe("DLXXXII");
  });
  test("664 should return 'DCLXIV'", () => {
    expect(convertNumberToNumeral(664)).toBe("DCLXIV");
  });
  test("715 should return 'DCCXV'", () => {
    expect(convertNumberToNumeral(715)).toBe("DCCXV");
  });
  test("856 should return 'DCCCLVI'", () => {
    expect(convertNumberToNumeral(856)).toBe("DCCCLVI");
  });
  test("978 should return 'CMLXXVIII'", () => {
    expect(convertNumberToNumeral(978)).toBe("CMLXXVIII");
  });
});

describe("test quadruple digit numbers up to 3000", () => {
  test("1295 should return 'MCCXCV'", () => {
    expect(convertNumberToNumeral(1295)).toBe("MCCXCV");
  });
  test("2863 should return 'MMDCCCLXIII'", () => {
    expect(convertNumberToNumeral(2863)).toBe("MMDCCCLXIII");
  });
  test("2917 should return 'MMCMXVII'", () => {
    expect(convertNumberToNumeral(2917)).toBe("MMCMXVII");
  });
  test("3000 should return 'MMM'", () => {
    expect(convertNumberToNumeral(3000)).toBe("MMM");
  });
});

describe("don't convert numbers greater than 3000", () => {
  test("3001 should return greater than 3000 message", () => {
    expect(convertNumberToNumeral(3001)).toBe(
      "The Romans didn't tend to go higher than 3000, so we won't either!"
    );
  });
  test("4000 should return greater than 3000 message", () => {
    expect(convertNumberToNumeral(4000)).toBe(
      "The Romans didn't tend to go higher than 3000, so we won't either!"
    );
  });
  test("5000 should return greater than 3000 message", () => {
    expect(convertNumberToNumeral(5000)).toBe(
      "The Romans didn't tend to go higher than 3000, so we won't either!"
    );
  });
  test("30000 should return greater than 3000 message", () => {
    expect(convertNumberToNumeral(30000)).toBe(
      "The Romans didn't tend to go higher than 3000, so we won't either!"
    );
  });
});
