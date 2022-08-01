const lib = require('../exercise1')

describe('fizzbuzz', () => {
  it("should return error when given input number is not a valid number", () => {
    const args = [null, undefined, "", 'a', ';', false];
    args.forEach((a) => {
      expect(() => { lib.fizzBuzz(a)}).toThrow();
    });
  });

  it("should return if input number is divisible by 3 and 5", () => {
    const result = lib.fizzBuzz(15)
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if input is divisible by 3", () => {
    const result = lib.fizzBuzz(3);
    expect(result).toBe("Fizz");
  })

  it("should return Fizz if input is divisible by 5", () => {
    const result = lib.fizzBuzz(5);
    expect(result).toBe("Buzz");
  })

  it("should return the input number if not divisible by 3,5,15", () => {
    const result = lib.fizzBuzz(2);
    expect(result).toBe(2);
  })
});

    // const args = [null, undefined, "", 'a', ';', false];
    // args.forEach((a) => {
    //   console.log(typeof a)
    // });