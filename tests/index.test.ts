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
