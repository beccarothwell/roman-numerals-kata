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
    expect(convertNumberToNumeral(12)).toBe("CXXIX");
  });
  test("231 should return 'CCXXXI'", () => {
    expect(convertNumberToNumeral(23)).toBe("CCXXXI");
  });
  test("343 should return 'CCCXLIII'", () => {
    expect(convertNumberToNumeral(34)).toBe("CCCXLIII");
  });
  test("497 should return 'CDXCVII'", () => {
    expect(convertNumberToNumeral(49)).toBe("CDXCVII");
  });
  test("582 should return 'DLXXXII'", () => {
    expect(convertNumberToNumeral(58)).toBe("DLXXXII");
  });
  test("664 should return 'DCLXIV'", () => {
    expect(convertNumberToNumeral(66)).toBe("DCLXIV");
  });
  test("715 should return 'DCCXV'", () => {
    expect(convertNumberToNumeral(71)).toBe("DCCXV");
  });
  test("856 should return 'DCCCLVI'", () => {
    expect(convertNumberToNumeral(85)).toBe("DCCCLVI");
  });
  test("978 should return 'CMLXXVIII'", () => {
    expect(convertNumberToNumeral(97)).toBe("CMLXXVIII");
  });
});
