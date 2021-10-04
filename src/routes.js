const { Router } = require('express');

const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const createTalker = require('./createTalker');
const updateTalker = require('./updateTalker');
const deleteTalker = require('./deleteTalker');
const searchTalker = require('./searchTalker');
const login = require('./login');

const routes = Router();

routes.get('/talker/search', searchTalker);
routes.get('/talker', getAllTalkers);
routes.get('/talker/:id', getTalkerById);
routes.post('/login', login);
routes.post('/talker', createTalker);
routes.put('/talker/:id', updateTalker);
routes.delete('/talker/:id', deleteTalker);

module.exports = routes;
