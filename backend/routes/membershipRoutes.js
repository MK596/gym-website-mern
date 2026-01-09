const express = require('express');
const router = express.Router();
const { getMemberships } = require('../controllers/membershipController');

router.route('/').get(getMemberships);

module.exports = router;
