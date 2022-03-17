
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

    response.json =  jest.fn(() => {})
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return status code 401 when token is not provided", () => {
    request.headers.authorization = ''

    TalkerService.updateTalker = jest.fn().mockImplementation(() => {return {status: 401, message: "any_message" }})
    TalkerController.update(request, response)

    expect(response.status).toHaveBeenCalledWith(401);
    expect(response.json).toHaveBeenCalledWith({ message: "any_message"});
  })

  it("should return status code 400 when field are invalid", () => {
    TalkerService.updateTalker = jest.fn().mockImplementation(() => {return {status: 400, message: "any_message" }})
    TalkerController.update(request, response)

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ message: "any_message"});
  })

  it("should return status code 200 when talker is updated", () => {
    TalkerService.updateTalker = jest.fn().mockImplementation(() => {
      return {
        status: 200
      }
    })
    TalkerController.update(request, response)

    expect(response.status).toHaveBeenCalledWith(200);
  })

}); 