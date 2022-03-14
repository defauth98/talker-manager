
const TalkerController = require('../../../../src/controllers/TalkerController')
const TalkerService = require('../../../../src/services/talker')

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

  it("should return status code 401 when token is not provided", () => {
    request.body = {
      email:"invalidemail",
      password:"invalid_password"
    }
    request.headers.authorization = ''

    TalkerService.createTalker = jest.fn().mockImplementation(() => {return {status: 401, message: "any_message" }})
    TalkerController.create(request, response)

    expect(response.status).toHaveBeenCalledWith(401);
  })

  it("should return status code 400 when field are invalid", () => {
    request.body = {
      email:"invalidemail",
      password:"invalid_password"
    }

    TalkerService.createTalker = jest.fn().mockImplementation(() => {return {status: 400, message: "any_message" }})
    TalkerController.create(request, response)

    expect(response.status).toHaveBeenCalledWith(400);
  })

  it('should return status 201 when field are valid', () => {
    TalkerService.createTalker = jest.fn().mockImplementation(() => body)
    TalkerController.create(request, response)

    expect(response.status).toHaveBeenCalledWith(201);
  })

}); 