const LoginService = require('../services/login/LoginService');

module.exports = { 
  login(req, res) {
    const { email, password } = req.body;

    const loginReponse = LoginService.login(email, password);

    if (loginReponse && loginReponse.errorMessage) {
      return res.status(400).json({ message: loginReponse.errorMessage });
    }

    return res.status(200).json({ token: loginReponse.token });
  },  
};