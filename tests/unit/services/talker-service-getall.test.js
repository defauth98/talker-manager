const TalkerService = require("../../../src/services/talker-service")

describe('getAllTalkers', () => { 
  it("should list all talkers", () => {
    const getAllResponse = TalkerService.getAllTalkers()

    expect(getAllResponse.length).toBeGreaterThan(3)
  })
 }
)