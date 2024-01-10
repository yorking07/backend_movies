const express = require('express');
const router = express.Router();
const genreRouter = require('./genres.router')
const actorRouter = require('./actors.router')
const directorRouter = require('./directors.router'); 
const movieRouter = require('./movies.router');


router.use(genreRouter)
router.use(actorRouter)
router.use(directorRouter)
router.use(movieRouter)






module.exports = router;