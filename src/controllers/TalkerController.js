const createTalker = require('../services/talker/createTalker');
const deleteTalker = require('../services/talker/deleteTalker');

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

  delete(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    const deleteTalkerReponse = deleteTalker(token, id);

    return res.status(deleteTalkerReponse.status).json({ message: deleteTalkerReponse.message });
  },

  // index(req, res) {
    
  // },

  // show(req, res) {
    
  // },

  // search(req, res) {
    
  // },

  // update(req, res) {

  // },

};