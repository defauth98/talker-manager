const AuthorizationError = require("../../../src/helpers/authorization-error")
const ErrorHandler = require("../../../src/helpers/error-handler")
const ValidationError = require("../../../src/helpers/validation-error")

describe("errorHandler", () => {
  it("should return status 401 when error is ValidationError", () => {
    const error = ErrorHandler.handle(new ValidationError())

    expect(error.status).toBe(401)
  })

  it("should return status 401 when error is AuthorizationError", () => {
    const error = ErrorHandler.handle(new AuthorizationError())

    expect(error.status).toBe(403)
  })
})