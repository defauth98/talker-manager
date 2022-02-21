const validUserInfo = {
  token: "5e6f246df54a2b48ca21cd56c7aeba4da5630de195797df9806ddba3e0b02ee9",
  name: "Valid Talker Name",
  age: 25,
  talk: {
    watchedAt: "23/10/2020",
    rate: 5
  }
}

const loginValidUserInfo = {
  email: "validEmail@mail.com",
  password: "validPassword"
}

const loginInvaliduserInfo = {
  email: "valid_email@mail.com",
  password: "1234"
}

module.exports = {
  validUserInfo,
  loginValidUserInfo,
  loginInvaliduserInfo
}