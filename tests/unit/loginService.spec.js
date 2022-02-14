const login = require('../../src/services/login/login')

const validUserData = {
  email: "validEmail@mail.com",
  password: "validPassword"
}

const invaliduserData = {
  email: "valid_email@mail.com",
  password: "1234"
}

describe("#LoginService", () => {
  it("should not login with no email", () => {
    const {error} = login()

    expect(error).toEqual('O campo "email" é obrigatório')
  })

  it("should not login with invalid email", () => {
    const {error} = login(invaliduserData.email, invaliduserData.password)

    expect(error).toEqual('O "email" deve ter o formato "email@email.com"')
  })

  it("should not logn with no password", () => {
    const {error} = login(validUserData.email)

    expect(error).toEqual('O campo "password" é obrigatório')
  })

  it("should not login with invalid password", () => {
    const {error} = login(validUserData.email, invaliduserData.password)

    expect(error).toEqual('O "password" deve ter pelo menos 6 caracteres')
  })

  it("should login with valid credentials", () => {
    const {token} = login(validUserData.email, validUserData.password)

    expect(token.length).toBeGreaterThan(14)
  })
})