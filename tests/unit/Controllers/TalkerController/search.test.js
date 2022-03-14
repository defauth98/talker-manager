
const TalkerController = require('../../../../src/controllers/TalkerController')
const TalkerService = require('../../../../src/services/talker')

describe('#TalkerController - Search', () => {
  const response = {}
  const request = {}

  beforeEach(() => {
    request.body = {}
    request.headers = {
      authorization: 'any_token'
    }
    request.query = {
      q:'any_query'
    }

    response.json =  jest.fn(() => {})
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return status code 401 when token is invalid', () => {
    request.headers.authorization = 'any_token'

    TalkerService.searchTalker = jest.fn().mockImplementation(() => {return { status: 401, message: "any_message"}})
    TalkerController.search(request, response)

    expect(response.status).toHaveBeenCalledWith(401);
  })

  it('should return status code 200', () => {
    request.headers.authorization = 'any_token'

    TalkerService.searchTalker = jest.fn().mockImplementation(() => {return {status: 200}})
    TalkerController.search(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

  it('should return status code 404 when talker not found', () => {
    request.headers.authorization = 'any_token'

    TalkerService.searchTalker = jest.fn().mockImplementation(() => {return { status: 404, message: "any_message"}})
    TalkerController.search(request, response)

    expect(response.status).toHaveBeenCalledWith(404);
  })

}); 