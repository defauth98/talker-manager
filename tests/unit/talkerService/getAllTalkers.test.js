const TalkerService = require("../../../src/services/talker")

describe('get all talkers', () => { 
  it("should list all talkers", () => {
    const getAllResponse = TalkerService.getAllTalkers()

    expect(getAllResponse.length).toBeGreaterThan(3)
  })
 })