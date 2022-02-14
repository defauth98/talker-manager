const TalkerService = require('../services/talker');

module.exports = { 
  create(req, res) {
    const { name, age, talk } = req.body;
    const token = req.headers.authorization;

    const loginReponse = TalkerService.createTalker(token, name, age, talk);

    if (loginReponse.status) {
      return res.status(loginReponse.status).json({ message: loginReponse.message });
    }

    return res.status(201).json(loginReponse);
  },

  delete(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    const deleteTalkerReponse = TalkerService.deleteTalker(token, id);

    return res.status(deleteTalkerReponse.status).json({ message: deleteTalkerReponse.message });
  },

  index(_req, res) {
    return res.status(200).json(TalkerService.getAllTalkers());
  },

  show(req, res) {
    const { id } = req.params;

    const getByResponse = TalkerService.getTalkerById(id);

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

    const searchReponse = TalkerService.searchTalker(token, q);

    if (searchReponse.message) {
      return res.status(searchReponse.status).json({ message: searchReponse.message });
    }

    return res.status(searchReponse.status).json(searchReponse.result);
  },

  update(req, res) {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const token = req.headers.authorization;

    const updateReponse = TalkerService.updateTalker(token, { name, age, talk }, id);

    if (updateReponse.message) {
      return res.status(updateReponse.status).json({ message: updateReponse.message });
    }

    return res.status(updateReponse.status).json(updateReponse.updatedTalker);
  },

};