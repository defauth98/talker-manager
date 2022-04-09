const TalkerService = require("../../../src/services/talker-service")
const { validUserInfo } = require('../../utils/userData');
const exec = require('child_process').exec;

describe('SearchTalker', () => { 
  afterEach(() => {
    exec("cp tests/seed.json talker.json")
  })

  it("should not find a talker with no token", () => {
    const searchTalkerResponse = TalkerService.search('')

    expect(searchTalkerResponse.status).toEqual(403)
    expect(searchTalkerResponse.errorMessage).toEqual('Token não encontrado')
  })

  it("should not find a talker with invalid token", () => {
    const searchTalkerResponse = TalkerService.search('invalid_token')

    expect(searchTalkerResponse.status).toEqual(403)
    expect(searchTalkerResponse.errorMessage).toEqual('Token inválido')
  })

  it("should  find a talker with valid name", () => {
    const searchTalkerResponse = TalkerService.search(validUserInfo, "Marcos")

    expect(searchTalkerResponse.status).toEqual(200)
    expect(searchTalkerResponse.result.length).toBeGreaterThanOrEqual(1)
  })
})