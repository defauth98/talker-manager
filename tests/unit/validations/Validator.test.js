
const ValidationError = require("../../../src/helpers/validation-error")
const AuthorizationError = require("../../../src/helpers/authorization-error")
const Validator = require("../../../src/validations/validator")
const constants = require("../../utils/constants")

describe("#Validator", () => {

  describe("validateRange", () => {
    it("should return ValidationError when range is invalid", () => {
      expect(() => {
        Validator.validateRange(10, 0, 5, "rate")
      }).toThrow(ValidationError)
    })

    it("should return a correct error message when range is invalid", () => {
      expect(() => {
        Validator.validateRange(10, 0, 5, "rate")
      }).toThrow(constants.RANGE_ERROR_MESSAGE)
    })

    it("should not return ValidationError when range is valid", () => {
      expect(() => {
        Validator.validateRange(4, 0, 5, "rate")
      }).not.toThrow(ValidationError)
    })

    it("should not return error message when range is valid", () => {
      expect(() => {
        Validator.validateRange(4, 0, 5, "rate")
      }).not.toThrow(constants.RANGE_ERROR_MESSAGE)
    })

  })

  describe("validateField", () => {

    it("should return ValidationError when field is not provided", () => {
      expect(() => {
        Validator.validateFieldExists("any_field")
      }).toThrow(ValidationError)
    })


    it("should return correct error message when field is not provided", () => {
      expect(() => {
        Validator.validateFieldExists("any_field")
      }).toThrow(constants.FIELD_EXISTS_ERROR_MESSAGE)
    })


    it("should not return ValidationError when field is provided", () => {
      expect(() => {
        Validator.validateFieldExists("any_field", "any_name")
      }).not.toThrow(ValidationError)
    })

    it("should not return error message when field is provided", () => {
      expect(() => {
        Validator.validateFieldExists("any_field")
      }).toThrow(constants.FIELD_EXISTS_ERROR_MESSAGE)
    })

  })

  describe("validateFieldMinLength", () => {

    it("should return ValidationError when field has an invalid min length", () => {
      expect(() => {
        Validator.validateFieldMinLength("any_field", "", constants.INVALID_MIN_LENGTH)
      }).toThrow(ValidationError)
    })

    it("should return correct error message when field has an invalid min length", () => {
      expect(() => {
        Validator.validateFieldMinLength("any_field", "", constants.INVALID_MIN_LENGTH)
      }).toThrow(constants.MIN_LENGTH_ERROR_MESSAGE)
    })

    it("should not return ValidationError when field has an valid min length", () => {
      expect(() => {
        Validator.validateFieldMinLength("any_field", "any_value", constants.VALID_MIN_LENGTH)
      }).not.toThrow(ValidationError)
    })

    it("should not return error message when field has an valid min length", () => {
      expect(() => {
        Validator.validateFieldMinLength("any_field", "any_value", constants.VALID_MIN_LENGTH)
      }).not.toThrow(constants.MIN_LENGTH_ERROR_MESSAGE)
    })

  })

  describe("validadeMinAge", () => {

    it("should return ValidationError when has an invalid min age", () => {
      expect(() => {
        Validator.validateMinAge(12, 18)
      }).toThrow(ValidationError)
    })

    it("should return correct error message when has an invalid min age", () => {
      expect(() => {
        Validator.validateMinAge(12, 18)
      }).toThrow(constants.MIN_AGE_ERROR_MESSAGE)
    })

    it("should not return ValidationError when has an valid min age", () => {
      expect(() => {
        Validator.validateMinAge(21, 18)
      }).not.toThrow(ValidationError)
    })

    it("should not return error message when has an valid min age", () => {
      expect(() => {
        Validator.validateMinAge(21, 18)
      }).not.toThrow(constants.MIN_AGE_ERROR_MESSAGE)
    })

  })

  describe("validateEmail", () => {
    
    it("should return ValidationError when an invalid email is provided", () => {
      expect(() => {
        Validator.validateEmail("a")
      }).toThrow(ValidationError)
    })

    it("should return correct error message when an invalid email is provided", () => {
      expect(() => {
        Validator.validateEmail("a")
      }).toThrow(constants.EMAIL_ERROR_MESSAGE)
    })

    it("should not return ValidationError when an valid email is provided", () => {
      expect(() => {
        Validator.validateEmail("teste@mail.com")
      }).not.toThrow(ValidationError)
    })

    it("should not return an error message when an valid email is provided", () => {
      expect(() => {
        Validator.validateEmail("teste@mail.com")
      }).not.toThrow(constants.EMAIL_ERROR_MESSAGE)
    })
  })

  describe("validateToken", () => {

    it("should return a AuthorizationError when no token is provided", () => {
      expect(() => {
        Validator.validateToken()
      }).toThrow(AuthorizationError)
    })

    it("should return a correct error message when no token is provided", () => {
      expect(() => {
        Validator.validateToken()
      }).toThrow(constants.TOKEN_NOT_FOUND_ERROR_MESSAGE)
    })

    it("should return a AuthorizationError when token is invalid", () => {
      expect(() => {
        Validator.validateToken("invalid")
      }).toThrow(AuthorizationError)
    })

    it("should return a correct error message when token is invalid", () => {
      expect(() => {
        Validator.validateToken("invalid")
      }).toThrow(constants.TOKEN_INVALID_ERROR_MESSAGE)
    })


    it("should not return a AuthorizationError when token is provided", () => {
      expect(() => {
        Validator.validateToken("dmskajfndjsanjfndsajnfjkdsajkfdsan")
      }).not.toThrow(AuthorizationError)
    })

    it("should not return an error message when token is provided", () => {
      expect(() => {
        Validator.validateToken("dmskajfndjsanjfndsajnfjkdsajkfdsan")
      }).not.toThrow(constants.TOKEN_NOT_FOUND_ERROR_MESSAGE)
    })

  })

  describe("validateWatchedAt", () => {
    it("should return ValidationError when invalid watchedAt is provided", () => {
      expect(() => {
        Validator.validateWatchedAt("invalid_date")
      }).toThrow(ValidationError)
    })

    it("should return correct error message when invalid watchedAt is provided", () => {
      expect(() => {
        Validator.validateWatchedAt("invalid_date")
      }).toThrow(constants.WATCHEDAT_ERROR_MESSAGE)
    })

    it("should return ValidationError when invalid watchedAt is provided", () => {
      expect(() => {
        Validator.validateWatchedAt("10/10/2010")
      }).not.toThrow(ValidationError)
    })

    it("should return correct error message when invalid watchedAt is provided", () => {
      expect(() => {
        Validator.validateWatchedAt("10/10/2010")
      }).not.toThrow(constants.WATCHEDAT_ERROR_MESSAGE)
    })

  })

  describe("validateTalk", () => {
    it("should return ValidationError when invalid talk is provided", () => {
      expect(() => {
        Validator.validateTalk({})
      }).toThrow(ValidationError)
    })

    it("should return correct error message when invalid talk is provided", () => {
      expect(() => {
        Validator.validateTalk({})
      }).toThrow(constants.TALK_ERROR_MESSAGE)
    })

    it("should not return ValidationError when invalid talk is provided", () => {
      expect(() => {
        Validator.validateTalk(constants.VALID_TALK)
      }).not.toThrow(ValidationError)
    })

    it("should not return any error message when invalid talk is provided", () => {
      expect(() => {
        Validator.validateTalk(constants.VALID_TALK)
      }).not.toThrow(constants.TALK_ERROR_MESSAGE)
    })
  })

  describe("validateLogin", () => {

    it("should return ValidationError when no email is provided", () => {
      expect(() => {
        Validator.validateLogin()
      }).toThrow(ValidationError)
    })

    it("should return ValidationError when no password is provided", () => {
      expect(() => {
        Validator.validateLogin(constants.VALID_EMAIL)
      }).toThrow(ValidationError)
    })

    it("should return correct error when no email is provided", () => {
      expect(() => {
        Validator.validateLogin()
      }).toThrow(constants.customExistsErrorMessage("email"))
    })

    it("should return correct error when no password is provided", () => {
      expect(() => {
        Validator.validateLogin(constants.VALID_EMAIL)
      }).toThrow(constants.customExistsErrorMessage("password"))
    })

    it("should return ValidationError when email is invalid" , () => {
      expect(() => {
        Validator.validateLogin(constants.INVALID_EMAIL, constants.VALID_PASSWORD)
      }).toThrow(constants.EMAIL_ERROR_MESSAGE)
    })

    it("should return ValidationError when password is invalid", () => {
      expect(() => {
        Validator.validateLogin(constants.VALID_EMAIL, constants.INVALID_PASSWORD) 
      }).toThrow(constants.customMinFieldValueErrorMessage("password", 7))
    })
  })

  describe("validateTalker", () => {

    it("should return ValidationError when no name is provided", () => {
      expect(() => {
        Validator.validateTalker()
      }).toThrow(ValidationError)
    })

    it("should return an correct error message when no name is provided", () => {
      expect(() => {
        Validator.validateTalker()
      }).toThrow(constants.customExistsErrorMessage("name"))
    })

    it("should return ValidationError when no age is provided", () => {
      expect(() => {
        Validator.validateTalker(constants.VALID_TALKER.name)
      }).toThrow(ValidationError)
    })

    it("should return an correct error message when no age is provided", () => {
      expect(() => {
        Validator.validateTalker(constants.VALID_TALKER.name)
      }).toThrow(constants.customExistsErrorMessage("age"))
    })

    it("should return ValidationError when talk is not provided", () => {
      expect(() => {
        Validator.validateTalker(constants.VALID_TALKER.name, constants.VALID_TALKER.age)
      }).toThrow(ValidationError)
    })

    it("should return ValidationError when invalid talk is provided", () => {
      expect(() => {
        Validator.validateTalker(constants.VALID_TALKER.name, constants.VALID_TALKER.age, {})
      }).toThrow(constants.TALK_ERROR_MESSAGE)
    })

    it("should return ValidationError when name is invalid", () => {
      expect(() => {
        Validator.validateTalker("123", constants.VALID_TALKER.age, constants.VALID_TALKER.talk)
      }).toThrow(ValidationError)
    })

    it("should return ValidationError when age is invalid", () => {
      expect(() => {
        Validator.validateTalker(constants.VALID_TALKER.name, 1, constants.VALID_TALKER.talk)
      }).toThrow(ValidationError)
    })
  })
})