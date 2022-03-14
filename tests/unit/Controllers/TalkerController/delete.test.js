
const TalkerController = require('../../../../src/controllers/TalkerController')
const TalkerService = require('../../../../src/services/talker')

describe('#TalkerController - Delete', () => {
  const response = {}
  const request = {}

  beforeEach(() => {
    request.body = {}
    request.headers = {
      authorization: 'any_token'
    }
    request.params = {id: 1}

    response.json =  jest.fn(() => {})
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return status code 401 when token is not provided", () => {
    request.headers.authorization = ''

    TalkerService.deleteTalker = jest.fn().mockImplementation(() => {return {status: 401, message: "any_message" }})
    TalkerController.delete(request, response)

    expect(response.status).toHaveBeenCalledWith(401);
  })

  it('should return status code 200 when talker is deleted', () => {
    request.headers.authorization = 'any_token'

    TalkerService.deleteTalker = jest.fn().mockImplementation(() => {return {status: 200, message: "any_message" }})
    TalkerController.delete(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

}); 