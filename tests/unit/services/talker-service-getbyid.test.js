const TalkerService = require("../../../src/services/talker-service")
const exec = require('child_process').exec;


describe('GetTalkerById', () => { 
  afterEach(() => {
    exec("cp tests/seed.json talker.json")
  })

  it("should not get a talker with invalid id", () => {
    const getTalkerByIdResponse = TalkerService.show(999)

    expect(getTalkerByIdResponse.status).toEqual(404)
    expect(getTalkerByIdResponse.errorMessage).toEqual('Pessoa palestrante não encontrada')
  })

  it("should  get a talker with valid id", () => {
    const getTalkerByIdResponse = TalkerService.show(1)

    expect(getTalkerByIdResponse.status).toEqual(200)
    expect(getTalkerByIdResponse).toHaveProperty('talker')
  })
}
)
