const TalkerService = require('../../../src/services/talker');
const { validUserInfo } = require('../../utils/userData');

describe("updateTalker", () => {
  it("should update a talker with valid infos", () => {
    const updateTalkerResponse = TalkerService.updateTalker(validUserInfo.token, validUserInfo, 3)

    expect(updateTalkerResponse.status).toBe(200)
  })

  it("should not create talker without a token", () => {
    const createTalkerResponse = TalkerService.updateTalker('', validUserInfo)

    expect(createTalkerResponse.status).toBe(401)
    expect(createTalkerResponse.message).toBe("Token não encontrado")
  })
})