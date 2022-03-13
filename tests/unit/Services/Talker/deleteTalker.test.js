const TalkerService = require('../../../../src/services/talker');
const { validUserInfo } = require('../../../utils/userData');

describe('deleteTalker', () => {
  it("should not delete a talker if no token is provided", () => {
    const deleteTalkerResponse = TalkerService.deleteTalker('')

    expect(deleteTalkerResponse.status).toEqual(401)
    expect(deleteTalkerResponse.message).toEqual('Token não encontrado')
  })

  it("should not delete a talker if invalid token is provided", () => {
    const deleteTalkerResponse = TalkerService.deleteTalker('invalid')

    expect(deleteTalkerResponse.status).toEqual(401)
    expect(deleteTalkerResponse.message).toEqual('Token inválido')
  })
  
  it('should delete a talker', () => {
    const deleteTalkerResponse = TalkerService.deleteTalker(validUserInfo.token, 1)

    expect(deleteTalkerResponse.status).toEqual(200)
    expect(deleteTalkerResponse.message).toEqual( 'Pessoa palestrante excluída com sucesso')
  })
})