const express = require('express');
const router = express.Router();
const { getPrograms, getProgramById } = require('../controllers/programController');

router.route('/').get(getPrograms);
router.route('/:id').get(getProgramById);

module.exports = router;
