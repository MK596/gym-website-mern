const express = require('express');
const router = express.Router();
const { getTrainers, getTrainerById } = require('../controllers/trainerController');

router.route('/').get(getTrainers);
router.route('/:id').get(getTrainerById);

module.exports = router;
