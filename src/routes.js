const { Router } = require('express');

const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');
const createTalker = require('./createTalker');
const login = require('./login');

const routes = Router();

routes.get('/talker', getAllTalkers);

routes.get('/talker/:id', getTalkerById);

routes.post('/login', login);

routes.post('/talker', createTalker);

module.exports = routes;