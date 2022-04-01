const TalkerService = require("../../../src/services/talker-service")
const exec = require('child_process').exec;

describe('getAllTalkers', () => { 
  afterEach(() => {
    exec("cp tests/seed.json talker.json")
  })

  it("should list all talkers", () => {
    const getAllResponse = TalkerService.index()

    expect(getAllResponse.length).toBeGreaterThan(3)
  })
 }
)