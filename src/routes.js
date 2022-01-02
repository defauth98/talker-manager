const { Router } = require('express');

const getAllTalkers = require('./services/talker/getAllTalkers');
const searchTalker = require('./services/talker/searchTalker');
const getTalkerById = require('./services/talker/getTalkerById');
const createTalker = require('./services/talker/createTalker');
const updateTalker = require('./services/talker/updateTalker');
const deleteTalker = require('./services/talker/deleteTalker');
const LoginController = require('./controllers/LoginController');

const routes = Router();

routes.post('/login', LoginController.login);

routes.get('/talker/search', searchTalker);
routes.get('/talker', getAllTalkers);
routes.get('/talker/:id', getTalkerById);
routes.post('/talker', createTalker);
routes.put('/talker/:id', updateTalker);
routes.delete('/talker/:id', deleteTalker);

module.exports = routes;
