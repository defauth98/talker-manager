const { Router } = require('express');

const getAllTalkers = require('./getAllTalkers');
const getTalkerById = require('./getTalkerById');

const routes = Router();

routes.get('/talker', getAllTalkers);

routes.get('/talker/:id', getTalkerById);

module.exports = routes;