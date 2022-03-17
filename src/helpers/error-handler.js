const authorizationError = require('./authorization-error');

class ErrorHandler {
  handle(error) {
    if (error.name === authorizationError.name) {
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