
const TalkerController = require('../../../src/controllers/talker-controller')
const TalkerService = require('../../../src/services/talker-service')

describe('#TalkerController - Update', () => {
  const response = {}
  const request = {}

  const bodyResponse = {
    name: "Danielle Santos",
    age: 56,
    talk: {
      watchedAt: "22/10/2019",
      rate: 5
    }
  }

  beforeEach(() => {
    request.body = bodyResponse
  
    request.params = {
      id: 1
    }
    request.headers = {
      authorization: 'any_token'
    }

    response.json =  jest.fn((any) => any)
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return status code 403 when token is not provided", () => {
    request.headers.authorization = ''

    TalkerService.update = jest.fn().mockImplementation(() => {return {status: 403, message: "any_message" }})
    TalkerController.update(request, response)

    expect(response.status).toHaveBeenCalledWith(403);
  })

  it("should return status code 401 when field are invalid", () => {
    TalkerService.update = jest.fn().mockImplementation(() => {return {status: 401, message: "any_message" }})
    TalkerController.update(request, response)

    expect(response.status).toHaveBeenCalledWith(401);
  })

  it("should return status code 200 when talker is updated", () => {
    TalkerService.update = jest.fn().mockImplementation(() => {
      return {
        status: 200
      }
    })
    TalkerController.update(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

}); 