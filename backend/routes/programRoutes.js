const express = require('express');
const router = express.Router();
const { getPrograms, getProgramById, createProgram, deleteProgram } = require('../controllers/programController');

router.route('/').get(getPrograms).post(createProgram);
router.route('/:id').get(getProgramById).delete(deleteProgram);

module.exports = router;
