const TalkerService = require('../services/talker-service');

module.exports = { 
  create(req, res) {
    const { name, age, talk } = req.body;
    const token = req.headers.authorization;

    const createTalkerResponse = TalkerService.create(token, name, age, talk);

    if (createTalkerResponse.errorMessage) {
      return res
        .status(createTalkerResponse.status)
        .json({ message: createTalkerResponse.errorMessage });
    }

    return res.status(201).json(createTalkerResponse);
  },

  delete(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;

    const deleteTalkerReponse = TalkerService.delete(token, id);

    return res.status(deleteTalkerReponse.status).json({ message: deleteTalkerReponse.message });
  },

  index(_req, res) {
    return res.status(200).json(TalkerService.index());
  },

  show(req, res) {
    const { id } = req.params;

    const getByResponse = TalkerService.show(id);

    if (getByResponse.errorMessage) {
      return res
        .status(getByResponse.status)
        .json({ message: getByResponse.errorMessage });
    }

    return res.status(getByResponse.status).json(getByResponse.talker);
  },

  search(req, res) {
    const { q } = req.query;
    const token = req.headers.authorization;

    const searchReponse = TalkerService.search(token, q);

    if (searchReponse.errorMessage) {
      return res.status(searchReponse.status).json({ message: searchReponse.errorMessage });
    }

    return res.status(searchReponse.status).json(searchReponse.result);
  },

  update(req, res) {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const token = req.headers.authorization;

    const updateReponse = TalkerService.update(token, { name, age, talk }, id);

    if (updateReponse && updateReponse.errorMessage) {
      return res.status(updateReponse.status).json({ message: updateReponse.errorMessage });
    }

    return res.status(updateReponse.status).json(updateReponse.updatedTalker);
  },

};