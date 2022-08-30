const express = require('express');
const talker = require('../talker.json');
const talkerListValidation = require('../middlewares/talkerListValidation');
const talkerIdValidation = require('../middlewares/talkerIdValidation');

const router = express.Router();

router.get('/talker', talkerListValidation, (_req, res) => res.status(200).json(talker));

router.get('/talker/:id', talkerIdValidation, (req, res) => {
  const selectedTalker = talker.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(selectedTalker);
});

module.exports = router;