const { getAll, create, getOne, remove, update, setMoviesActors, setMoviesDirectors, setMoviesGenres } = require('../controllers/movie.controller');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(getAll)
    .post(create);

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);
movieRouter.route("/movies/:id/actors")
    .post(setMoviesActors)

movieRouter.route("/movies/:id/directors")
    .post(setMoviesDirectors)

movieRouter.route("/movies/:id/genres")
    .post(setMoviesGenres)

module.exports = movieRouter;