const { createHmac } = require('crypto');
const errorHandler = require('../helpers/error-handler');
const Validator = require('../validations/validator');

class LoginService {
  exec(email, password) {
    try {
      Validator.validateLogin(email, password);
      
      const secret = 'abcdefg';
      const token = createHmac('sha256', secret).digest('hex');
  
      return { token };
    } catch (error) {
      const ErrorHandler = new errorHandler();

      return ErrorHandler.handle(error);
    }
  }
}

module.exports = new LoginService();