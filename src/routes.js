const { Router } = require('express');

const getAllTalkers = require('./getAllTalkers');

const routes = Router();

routes.get('/talker', getAllTalkers);

module.exports = routes;