
const TalkerController = require('../../../src/controllers/talker-controller')
const TalkerService = require('../../../src/services/talker-service')

describe('#TalkerController - Create', () => {
  const response = {}
  const request = {}

  const body = {
    name: "Danielle Santos",
    age: 56,
    talk: {
      watchedAt: "22/10/2019",
      rate: 5
    }
  }

  beforeEach(() => {
    request.body = body
    request.headers = {
      authorization: 'any_token'
    }

    response.json =  jest.fn(() => {})
    response.status = jest.fn(() => response)
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return status code 403 when token is not provided", () => {
    request.body = {
      email:"invalidemail",
      password:"invalid_password"
    }
    request.headers.authorization = ''

    TalkerService.create = jest.fn().mockImplementation(() => {return {status: 403, errorMessage: "any_message" }})
    
    TalkerController.create(request, response)

    expect(response.status).toHaveBeenCalledWith(403);
  })

  it("should return status code 400 when field are invalid", () => {
    request.body = {
      email:"invalidemail",
      password:"invalid_password"
    }

    TalkerService.create = jest.fn().mockImplementation(() => {return {status: 400, errorMessage: "any_message" }})
    TalkerController.create(request, response)

    expect(response.status).toHaveBeenCalledWith(400);
  })

  it('should return status 201 when field are valid', () => {
    TalkerService.create = jest.fn().mockImplementation(() => body)
    TalkerController.create(request, response)

    expect(response.status).toHaveBeenCalledWith(201);
  })

}); 