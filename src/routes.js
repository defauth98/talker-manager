const { Router } = require('express');

const getAllTalkers = require('./services/talker/getAllTalkers');
const searchTalker = require('./services/talker/searchTalker');
const getTalkerById = require('./services/talker/getTalkerById');
const updateTalker = require('./services/talker/updateTalker');
const LoginController = require('./controllers/LoginController');
const TalkerController = require('./controllers/TalkerController');

const routes = Router();

routes.post('/login', LoginController.login);

routes.get('/talker/search', searchTalker);
routes.get('/talker', getAllTalkers);
routes.get('/talker/:id', getTalkerById);
routes.post('/talker', TalkerController.create);
routes.put('/talker/:id', updateTalker);
routes.delete('/talker/:id', TalkerController.delete);

module.exports = routes;
