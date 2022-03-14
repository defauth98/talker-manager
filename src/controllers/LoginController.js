const LoginService = require('../services/login/LoginService');

module.exports = { 
  login(req, res) {
    const { email, password } = req.body;

    const response = LoginService.login(email, password);

    if (response && response.error) {
      return res.status(400).json({ message: response.error });
    }

    return res.status(200).json({ token: response.token });
  },  
};