const TalkerService = require('../../../../src/services/talker');
const { validUserInfo } = require('../../../utils/userData');

describe("createTalker", () => {
  it("should not create talker without a token", () => {
    const createTalkerResponse = TalkerService.createTalker()

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.message).toBe("Token não encontrado")
  })

  it("should not create talker without a name", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token)

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe('O campo "name" é obrigatório')
  })

  it("should not create talker without a age", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, validUserInfo.name)

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe('O campo "age" é obrigatório')
  })

  it("should not create talker without a talk", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, validUserInfo.name, validUserInfo.age)

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe( "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios")
  })

  it("should not create talker with invalid token", () => {
    const createTalkerResponse = TalkerService.createTalker("invalid_token")

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.message).toBe("Token inválido")
  })

  it("should not create talker with invalid name", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, "a")

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe("O \"name\" deve ter pelo menos 3 caracteres")
  })

  it("should not create talker with invalid age", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, validUserInfo.name, 17)

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe("A pessoa palestrante deve ser maior de idade")
  })

  it("should not create talker with invalid talk date", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, validUserInfo.name, validUserInfo.age,{
        "watchedAt": "invalid_data",
        "rate": 5
      }
    )

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe("O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\"")
  })

  it("should not create talker with invalid talk rate", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, validUserInfo.name, validUserInfo.age,{
        "watchedAt": "23/10/2020",
        "rate": "invalid_rate"
      }
    )

    expect(createTalkerResponse.status).toBe(400)
    expect(createTalkerResponse.message).toBe("O campo \"rate\" deve ser um inteiro de 1 à 5")
  })

  it("should create a talker with valid infos", () => {
    const createTalkerResponse = TalkerService.createTalker(validUserInfo.token, validUserInfo.name, validUserInfo.age, validUserInfo.talk)
    
    expect(createTalkerResponse.name).toBe(validUserInfo.name)
    expect(createTalkerResponse.age).toBe(validUserInfo.age)
    expect(createTalkerResponse.talk).toBe(validUserInfo.talk)
  })
})