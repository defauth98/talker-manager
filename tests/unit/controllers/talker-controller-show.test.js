
const TalkerController = require('../../../src/controllers/talker-controller')
const TalkerService = require('../../../src/services/talker-service')

describe('#TalkerController - Show', () => {
  const response = {}
  const request = {}

  beforeEach(() => {
    request.body = {}
    request.headers = {
      authorization: 'any_token'
    }
    request.params = {
      id: 1
    }

    response.json =  jest.fn(() => {})
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return status code 200', () => {
    request.headers.authorization = 'any_token'

    TalkerService.show = jest.fn().mockImplementation(() => {return {status: 200}})
    TalkerController.show(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

  it('should return status code 404 when talker not found', () => {
    request.headers.authorization = 'any_token'

    TalkerService.show = jest.fn().mockImplementation(() => {return { status: 404, errorMessage: "any_message"}})
    TalkerController.show(request, response)

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({message: "any_message"});
  })

}); 