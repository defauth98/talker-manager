const TalkerService = require('../../src/services/talker');

const createUser = {
  token: "5e6f246df54a2b48ca21cd56c7aeba4da5630de195797df9806ddba3e0b02ee9",
  name: "Valid Talker Name",
  age: 25,
  talk: {
    watchedAt: "23/10/2020",
    rate: 5
  }
}

describe("#TalkerService", () => {
  describe("createTalker", () => {
    it("should not create talker without a token", () => {
      const createTalkerResponse = TalkerService.createTalker()

      expect(createTalkerResponse.status).toBe(401)
      expect(createTalkerResponse.message).toBe("Token não encontrado")
    })

    it("should not create talker without a name", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token)

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe('O campo "name" é obrigatório')
    })

    it("should not create talker without a age", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, createUser.name)

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe('O campo "age" é obrigatório')
    })

    it("should not create talker without a talk", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, createUser.name, createUser.age)

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe( "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios")
    })

    it("should not create talker with invalid token", () => {
      const createTalkerResponse = TalkerService.createTalker("invalid_token")

      expect(createTalkerResponse.status).toBe(401)
      expect(createTalkerResponse.message).toBe("Token inválido")
    })

    it("should not create talker with invalid name", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, "a")

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe("O \"name\" deve ter pelo menos 3 caracteres")
    })

    it("should not create talker with invalid age", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, createUser.name, 17)

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe("A pessoa palestrante deve ser maior de idade")
    })

    it("should not create talker with invalid talk date", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, createUser.name, createUser.age,{
          "watchedAt": "invalid_data",
          "rate": 5
        }
      )

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe("O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\"")
    })

    it("should not create talker with invalid talk rate", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, createUser.name, createUser.age,{
          "watchedAt": "23/10/2020",
          "rate": "invalid_rate"
        }
      )

      expect(createTalkerResponse.status).toBe(400)
      expect(createTalkerResponse.message).toBe("O campo \"rate\" deve ser um inteiro de 1 à 5")
    })

    it("should create a talker with valid infos", () => {
      const createTalkerResponse = TalkerService.createTalker(createUser.token, createUser.name, createUser.age, createUser.talk)
      
      expect(createTalkerResponse.name).toBe(createUser.name)
      expect(createTalkerResponse.age).toBe(createUser.age)
      expect(createTalkerResponse.talk).toBe(createUser.talk)
    })
  })
})