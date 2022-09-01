const validateString = require("./ValidateString");

describe("remove anything except alphanumeric characters and spaces, then trim spaces from start and end", () => {
  test("remove spaces at start and end of string", () => {
    const input = "   hello world   ";
    const expected = "hello world";
    const actual = validateString(input);
    expect(actual).toBe(expected);
  });

  test("remove ! from string", () => {
    const input = "!!!hello world";
    const expected = "hello world";
    const actual = validateString(input);
    expect(actual).toBe("expected");
  });
});
