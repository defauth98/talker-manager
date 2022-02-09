const createTalker = require('../services/talker/createTalker');
const deleteTalker = require('../services/talker/deleteTalker');
const getAllTalkers = require('../services/talker/getAllTalkers');
const getTalkerById = require('../services/talker/getTalkerById');
const searchTalker = require('../services/talker/searchTalker');

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

  index(_req, res) {
    return res.status(200).json(getAllTalkers());
  },

  show(req, res) {
    const { id } = req.params;

    const getByResponse = getTalkerById(id);

    if (getByResponse.message) {
      return res
        .status(getByResponse.status)
        .json({ message: getByResponse.message });
    }

    return res.status(getByResponse.status).json(getByResponse.talker);
  },

  search(req, res) {
    const { q } = req.query;
    const token = req.headers.authorization;

    const searchReponse = searchTalker(token, q);

    if (searchReponse.message) {
      return res.status(searchReponse.status).json({ message: searchReponse.message });
    }

    return res.status(searchReponse.status).json(searchReponse.result);
  },

  // update(req, res) {

  // },

};