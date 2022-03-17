
const TalkerController = require('../../../src/controllers/talker-controller')
const TalkerService = require('../../../src/services/talker-service')

describe('#TalkerController - Index', () => {
  const response = {}
  const request = {}

  beforeEach(() => {
    request.body = {}
    request.headers = {
      authorization: 'any_token'
    }

    response.json =  jest.fn(() => {})
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return status code 200', () => {
    request.headers.authorization = 'any_token'

    TalkerService.getAllTalkers = jest.fn().mockImplementation(() => {return []})
    TalkerController.index(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

}); 