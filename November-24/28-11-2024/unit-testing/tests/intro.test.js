import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the greater number when the first number is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the greater number when the second number is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the greater number when the numbers are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it('should return "Fizz" when the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it('should return "Buzz" when the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it('should return "FizzBuzz" when the number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return the number as a string when the number is not divisible by 3 or 5", () => {
    const number = 77;
    expect(fizzBuzz(number)).toBe(number.toString());
  });
});
