const TalkerService = require("../../../src/services/talker-service")
const { validUserInfo } = require('../../utils/userData');
const exec = require('child_process').exec;


describe("createTalker", () => {
  afterEach(() => {
    exec("cp tests/seed.json talker.json")
  })

  it("should not create talker without a token", () => {
    const createTalkerResponse = TalkerService.create()

    expect(createTalkerResponse.status).toBe(403)
    expect(createTalkerResponse.errorMessage).toBe("Token não encontrado")
  })

  it("should not create talker without a name", () => {
    const createTalkerResponse = TalkerService.create(validUserInfo.token)

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.errorMessage).toBe('O campo "name" é obrigatório')
  })

  it("should not create talker without a age", () => {
    const createTalkerResponse = TalkerService.create(validUserInfo.token, validUserInfo.name)

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.errorMessage).toBe('O campo "age" é obrigatório')
  })

  it("should not create talker without a talk", () => {
    const createTalkerResponse = TalkerService.create(validUserInfo.token, validUserInfo.name, validUserInfo.age)

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.errorMessage).toBe( "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios")
  })

  it("should not create talker with invalid token", () => {
    const createTalkerResponse = TalkerService.create("invalid_token")

    expect(createTalkerResponse.status).toBe(403)
    expect(createTalkerResponse.errorMessage).toBe("Token inválido")
  })

  it("should not create talker with invalid name", () => {
    const createTalkerResponse = TalkerService.create(validUserInfo.token, "a", 20, validUserInfo.talk)

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.errorMessage).toBe("O \"name\" deve ter pelo menos 3 caracteres")
  })

  it("should not create talker with invalid age", () => {
    const createTalkerResponse = TalkerService.create(validUserInfo.token, validUserInfo.name, 17, validUserInfo.talk)

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.errorMessage).toBe("A pessoa palestrante deve ser maior de idade")
  })

  it("should create a talker with valid infos", () => {
    const createTalkerResponse = TalkerService.create(validUserInfo.token, validUserInfo.name, validUserInfo.age, validUserInfo.talk)
    
    expect(createTalkerResponse.name).toBe(validUserInfo.name)
    expect(createTalkerResponse.age).toBe(validUserInfo.age)
    expect(createTalkerResponse.talk).toBe(validUserInfo.talk)
  })
})