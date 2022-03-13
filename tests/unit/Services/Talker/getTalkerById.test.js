const TalkerService = require('../../../../src/services/talker');

describe('GetTalkerById', () => { 
  it("should not get a talker with invalid id", () => {
    const getTalkerByIdResponse = TalkerService.getTalkerById(999)

    expect(getTalkerByIdResponse.status).toEqual(404)
    expect(getTalkerByIdResponse.message).toEqual('Pessoa palestrante não encontrada')
  })

  it("should  get a talker with valid id", () => {
    const getTalkerByIdResponse = TalkerService.getTalkerById(2)

    expect(getTalkerByIdResponse.status).toEqual(200)
    expect(getTalkerByIdResponse).toHaveProperty('talker')
  })
}
)
