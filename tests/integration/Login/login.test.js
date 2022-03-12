const request = require("supertest")
const app = require("../../../server")

describe("/login", () => {
  it("should return 200 when valid fields are provided", () => {
    request(app)
      .post('/login')
      .send({	email:"ribeiro@mail.com", password:"123123"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  })
})