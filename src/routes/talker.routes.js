const express = require('express');
const talker = require('../talker.json');

const router = express.Router();

router.get('/talker', (_req, res) => res.status(200).json(talker));

module.exports = router;