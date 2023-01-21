const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/', songController.getAllSongs);
router.get('/search',songController.searchSongs);
router.get('/justsongs', songController.JustSongs);
router.get('/:id', songController.getSong);

module.exports = router;
