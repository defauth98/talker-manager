const LoginService = require('../services/login-service');

module.exports = { 
  login(req, res) {
    const { email, password } = req.body;

    const loginReponse = LoginService.exec(email, password);

    if (loginReponse && loginReponse.errorMessage) {
      return res.status(400).json({ message: loginReponse.errorMessage });
    }

    return res.status(200).json({ token: loginReponse.token });
  },  
};