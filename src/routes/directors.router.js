const { getAll, create, getOne, remove, update } = require('../controllers/director.controller');
const express = require('express');

const directorRouter = express.Router();

directorRouter.route('/directors')
    .get(getAll)
    .post(create);

directorRouter.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directorRouter;