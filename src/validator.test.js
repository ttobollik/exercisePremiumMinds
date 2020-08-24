const Validator = require("./validator")


test('validate path - correct input', () => {
    const validator = new Validator()
    expect(validator.validatePath("NESONNNNN")).toBe(true)
})


test('validate path - correct input empty', () => {
    const validator = new Validator()
    expect(validator.validatePath("")).toBe(true)
})


test('validate path - correct input long', () => {
    const validator = new Validator()
    expect(validator.validatePath("NSNSNSNSNSNSNSNSNEEEEEEOOOOOOONNNNNNSSSSSOOOOOOOOOOO")).toBe(true)
})


test('validate path - throws exception wrong letter', () => {
    const validator = new Validator()
    expect(() => {
        validator.validatePath("IOB")
    }).toThrow()
})


test('validate path - throws exception number', () => {
    const validator = new Validator()
    expect(() => {
        validator.validatePath("1NNNNNN")
    }).toThrow()
})


test('validate path - throws exception special character', () => {
    const validator = new Validator()
    expect(() => {
        validator.validatePath("&&&")
    }).toThrow()
})
