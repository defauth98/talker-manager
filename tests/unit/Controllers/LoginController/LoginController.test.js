const LoginController = require('../../../../src/controllers/login-controller')
const LoginService = require('../../../../src/services/login-service')

describe('#LoginController - Login', () => {
  const response = {}
  const request = {}

  describe('When fields are valid', () => {
    it('should return status 200', () => {
      request.body = {
        email:"ribeiro@mail.com",
        password:"123123"
      }

      response.json =  jest.fn(() => {})
      response.status = jest.fn(() => response)

      LoginService.exec = jest.fn().mockImplementation(() => {
        return {token: "any_token"}}
      )
      LoginController.login(request, response)

      expect(response.status).toHaveBeenCalledWith(200);
    })
  });

  describe("When fields are invalid", () => {
    it("shloud return status code 400", () => {
      request.body = {
        email:"invalidemail",
        password:"invalid_password"
      }
  
      response.json =  jest.fn(() => {})
      response.status = jest.fn(() => response)

      LoginService.exec = jest.fn().mockImplementation(() => {
        return {errorMessage: "error_message"}}
      )
  
      LoginController.login(request, response)
      expect(response.status).toHaveBeenCalledWith(400);
    })
  })
}); 