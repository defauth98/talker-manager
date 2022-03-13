const login = require('../../../../src/services/login/login')
const { loginValidUserInfo, loginInvaliduserInfo } = require('../../../utils/userData')

describe("#LoginService", () => {
  it("should not login with no email", () => {
    const {error} = login()

    expect(error).toEqual('O campo "email" é obrigatório')
  })

  it("should not login with invalid email", () => {
    const {error} = login(loginInvaliduserInfo.email, loginInvaliduserInfo.password)

    expect(error).toEqual('O "email" deve ter o formato "email@email.com"')
  })

  it("should not logn with no password", () => {
    const {error} = login(loginValidUserInfo.email)

    expect(error).toEqual('O campo "password" é obrigatório')
  })

  it("should not login with invalid password", () => {
    const {error} = login(loginValidUserInfo.email, loginInvaliduserInfo.password)

    expect(error).toEqual('O "password" deve ter pelo menos 6 caracteres')
  })

  it("should login with valid credentials", () => {
    const {token} = login(loginValidUserInfo.email, loginValidUserInfo.password)

    expect(token.length).toBeGreaterThan(14)
  })
})