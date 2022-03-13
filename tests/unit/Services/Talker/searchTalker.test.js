const TalkerService = require('../../../../src/services/talker');
const { validUserInfo } = require('../../../utils/userData');

describe('SearchTalker', () => { 
  it("should not find a talker with no token", () => {
    const searchTalkerResponse = TalkerService.searchTalker('')

    expect(searchTalkerResponse.status).toEqual(401)
    expect(searchTalkerResponse.message).toEqual('Token não encontrado')
  })

  it("should not find a talker with invalid token", () => {
    const searchTalkerResponse = TalkerService.searchTalker('invalid_token')

    expect(searchTalkerResponse.status).toEqual(401)
    expect(searchTalkerResponse.message).toEqual('Token inválido')
  })

  it("should not find a talker with invalid name", () => {
    const searchTalkerResponse = TalkerService.searchTalker(validUserInfo, "invalid_search")

    expect(searchTalkerResponse.status).toEqual(200)
    expect(searchTalkerResponse.result.length).toEqual(0)
  })

  it("should  find a talker with valid name", () => {
    const searchTalkerResponse = TalkerService.searchTalker(validUserInfo, "Heloísa")

    expect(searchTalkerResponse.status).toEqual(200)
    expect(searchTalkerResponse.result.length).toBeGreaterThanOrEqual(1)
  })
})