const express = require('express');
const router = express.Router();
const { getTrainers, createTrainer, deleteTrainer } = require('../controllers/trainerController');

router.route('/').get(getTrainers).post(createTrainer);
router.route('/:id').delete(deleteTrainer);

module.exports = router;
