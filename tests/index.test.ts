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
