const LoginService = require('../../../src/services/login-service')
const { loginValidUserInfo, loginInvaliduserInfo } = require('../../utils/userData')

describe("#LoginService", () => {
  it("should not login with no email", () => {
    const {errorMessage} = LoginService.exec()

    expect(errorMessage).toEqual('O campo "email" é obrigatório')
  })

  it("should not login with invalid email", () => {
    const {errorMessage} = LoginService.exec(loginInvaliduserInfo.email, loginInvaliduserInfo.password)

    expect(errorMessage).toEqual('O "email" deve ter o formato "email@email.com"')
  })

  it("should not logn with no password", () => {
    const {errorMessage} = LoginService.exec(loginValidUserInfo.email)

    expect(errorMessage).toEqual('O campo "password" é obrigatório')
  })

  it("should not login with invalid password", () => {
    const {errorMessage} = LoginService.exec(loginValidUserInfo.email, loginInvaliduserInfo.password)

    expect(errorMessage).toEqual('O "password" deve ter pelo menos 7 caracteres')
  })

  it("should login with valid credentials", () => {
    const {token} = LoginService.exec(loginValidUserInfo.email, loginValidUserInfo.password)

    expect(token.length).toBeGreaterThan(14)
  })
})