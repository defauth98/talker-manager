const TalkerService = require("../../../src/services/talker-service")
const { validUserInfo } = require('../../utils/userData');
const exec = require('child_process').exec;


describe("updateTalker", () => {
  afterEach(() => {
    exec("cp tests/seed.json talker.json")
  })

  it("should update a talker with valid infos", () => {
    const updateTalkerResponse = TalkerService.update(validUserInfo.token, validUserInfo, 3)

    expect(updateTalkerResponse.status).toBe(200)
  })

  it("should not create talker without a token", () => {
    const createTalkerResponse = TalkerService.update('', validUserInfo)

    expect(createTalkerResponse.status).toBe(403)
    expect(createTalkerResponse.errorMessage).toBe("Token não encontrado")
  })
})