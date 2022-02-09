const createTalker = require('../services/talker/createTalker');

module.exports = { 
  create(req, res) {
    const { name, age, talk } = req.body;
    const token = req.headers.authorization;

    const loginReponse = createTalker(token, name, age, talk);

    if (loginReponse.status) {
      return res.status(loginReponse.status).json({ message: loginReponse.message });
    }

    return res.status(201).json(loginReponse);
  },

  // delete(req, res) {
    
  // },

  // index(req, res) {
    
  // },

  // show(req, res) {
    
  // },

  // search(req, res) {
    
  // },

  // update(req, res) {

  // },

};