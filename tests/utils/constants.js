const VALID_TALK = {
  watchedAt: "22/10/2019",
  rate: 5
}

const VALID_TALKER = {
  name: "Danielle Santos",
  age: 56,
  talk: {
    watchedAt: "22/10/2019",
    rate: 5
  }
}

const VALID_EMAIL = "mail@test.com"
const INVALID_EMAIL = "invalid_email"
const VALID_PASSWORD = "senhaforte123"
const INVALID_PASSWORD = "12"

const VALID_MIN_LENGTH = 4
const INVALID_MIN_LENGTH = 10

const RANGE_ERROR_MESSAGE = "O campo \"rate\" deve ser um inteiro de 0 à 5"
const FIELD_EXISTS_ERROR_MESSAGE = "O campo \"any_field\" é obrigatório"
const MIN_LENGTH_ERROR_MESSAGE = "O \"any_field\" deve ter pelo menos 10 caracteres"
const MIN_AGE_ERROR_MESSAGE = "A pessoa palestrante deve ser maior de idade"
const EMAIL_ERROR_MESSAGE = 'O "email" deve ter o formato "email@email.com"'
const TOKEN_NOT_FOUND_ERROR_MESSAGE = 'Token não encontrado'
const TOKEN_INVALID_ERROR_MESSAGE = "Token inválido"
const WATCHEDAT_ERROR_MESSAGE =  "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
const TALK_ERROR_MESSAGE = "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios"
const customExistsErrorMessage = (field) => `O campo \"${field}\" é obrigatório`
const customMinFieldValueErrorMessage = (field, minLength) => `O \"${field}\" deve ter pelo menos ${minLength} caracteres`

module.exports = {
  VALID_TALKER,
  VALID_EMAIL,
  VALID_TALK,
  INVALID_EMAIL,
  VALID_PASSWORD,
  INVALID_PASSWORD,
  VALID_MIN_LENGTH,
  INVALID_MIN_LENGTH,
  RANGE_ERROR_MESSAGE,
  FIELD_EXISTS_ERROR_MESSAGE,
  MIN_LENGTH_ERROR_MESSAGE,
  MIN_AGE_ERROR_MESSAGE,
  EMAIL_ERROR_MESSAGE,
  TOKEN_NOT_FOUND_ERROR_MESSAGE,
  TOKEN_INVALID_ERROR_MESSAGE,
  WATCHEDAT_ERROR_MESSAGE,
  TALK_ERROR_MESSAGE,
  customExistsErrorMessage,
  customMinFieldValueErrorMessage
}