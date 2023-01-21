const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/', songController.getAllSongs);
router.get('/search',songController.searchSongs);
router.get('/:id', songController.getSong);
router.get('/justsongs', songController.JustSongs);

module.exports = router;
