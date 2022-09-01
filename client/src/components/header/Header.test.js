const validateString = require("./ValidateString")

describe("remove anything except alphanumeric characters and spaces, then trim spaces from start and end", () => {
  test("remove spaces at start and end of string", () => {
    const input = "   hello world   "
    const expected = "hello world"
    const actual = validateString(input)
    expect(actual).toBe(expected)
  })

  test("remove ! from string", () => {
    const input = "!!!hello world"
    const expected = "hello world"
    const actual = validateString(input)
    expect(actual).toBe(expected)
  })
})

describe("Removing unwanted charatcers in string", () => {
  const testingInputs = [
    { input: "hello!world", expected: "hello world" },
    { input: "hello%world", expected: "hello world" },
    { input: "!hello world", expected: "hello world" },
    { input: ";hello?world!", expected: "hello world" },
    { input: "hello;world", expected: "hello world" },
    { input: "hello world?", expected: "hello world" },
    { input: "   hello world   ", expected: "hello world" },
    { input: "!!!hello world", expected: "hello world" },
    { input: "!!!hello()other world)", expected: "hello other world" },
    { input: "!w@o*r%l#d@", expected: "w o r l d" },
    // above will produce failed test if expected is "world"
  ]

  testingInputs.map((unitOne) => {
    it(`Removing non-alphabetic charaters in ${unitOne.input}`, () => {
      const actual = validateString(unitOne.input)

      return expect(actual).toBe(unitOne.expected)
    })
  })
})
