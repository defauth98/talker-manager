const login = require('../services/login/login');

module.exports = { 
  login(req, res) {
    const { email, password } = req.body;

    const response = login(email, password);

    if (response && response.error) {
      return res.status(400).json({ message: response.error });
    }

    return res.status(200).json({ token: response.token });
  },
};