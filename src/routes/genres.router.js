const { getAll, create, getOne, remove, update } = require('../controllers/genre.controller');
const express = require('express');

const routerName = express.Router();

routerName.route('/genres')
    .get(getAll)
    .post(create);

routerName.route('/genres/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerName;