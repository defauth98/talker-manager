const TalkerController = require('../../../src/controllers/talker-controller')
const TalkerService = require('../../../src/services/talker-service')

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

  it("should return status code 403 when token is not provided", () => {
    request.headers.authorization = ''

    TalkerService.delete = jest.fn().mockImplementation(() => {return {status: 403, errorMessage: "any_message" }})
    TalkerController.delete(request, response)

    expect(response.status).toHaveBeenCalledWith(403);
  })

  it('should return status code 200 when talker is deleted', () => {
    TalkerService.delete = jest.fn().mockImplementation(() => {return {status: 200, message: 'any_message'}})
    TalkerController.delete(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

}); 