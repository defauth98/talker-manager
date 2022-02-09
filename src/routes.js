const { Router } = require('express');

const LoginController = require('./controllers/LoginController');
const TalkerController = require('./controllers/TalkerController');

const routes = Router();

routes.post('/login', LoginController.login);

routes.get('/talker/search', TalkerController.search);
routes.get('/talker', TalkerController.index);
routes.get('/talker/:id', TalkerController.show);
routes.post('/talker', TalkerController.create);
routes.put('/talker/:id', TalkerController.update);
routes.delete('/talker/:id', TalkerController.delete);

module.exports = routes;
