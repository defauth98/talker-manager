const TalkerService = require("../../../src/services/talker-service")
const { validUserInfo } = require('../../utils/userData');
const exec = require('child_process').exec;


describe('deleteTalker', () => {
  afterEach(() => {
    exec("cp tests/seed.json talker.json")
  })


  it("should not delete a talker if no token is provided", () => {
    const deleteTalkerResponse = TalkerService.delete('')

    expect(deleteTalkerResponse.status).toEqual(403)
    expect(deleteTalkerResponse.errorMessage).toEqual('Token não encontrado')
  })

  it("should not delete a talker if invalid token is provided", () => {
    const deleteTalkerResponse = TalkerService.delete('invalid')

    expect(deleteTalkerResponse.status).toEqual(403)
    expect(deleteTalkerResponse.errorMessage).toEqual('Token inválido')
  })
  
  it('should delete a talker', () => {
    const deleteTalkerResponse = TalkerService.delete(validUserInfo.token, 1)

    expect(deleteTalkerResponse.status).toEqual(200)
    expect(deleteTalkerResponse.message).toEqual( 'Pessoa palestrante excluída com sucesso')
  })
})