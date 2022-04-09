const AuthorizationError = require('./authorization-error');
// const ValidationError = require('./validation-error');

class ErrorHandler {
  static handle(error) {
    if (error.name === AuthorizationError.name) {
      return {
        status: 403,
        errorMessage: error.message,
      };
    }
    
    return {
      status: 401,
      errorMessage: error.message,
    }; 
  }
}

module.exports = ErrorHandler;