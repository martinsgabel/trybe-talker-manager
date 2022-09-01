const express = require('express');
const ageValidation = require('../middleware/ageValidation');
const nameValidation = require('../middleware/nameValidation');
const rateValidation = require('../middleware/rateValidation');
const talkValidation = require('../middleware/talkValidation');
const tokenValidation = require('../middleware/tokenvalidation');
const watchedValidation = require('../middleware/watchedValidation');
const { fsRead } = require('../utils/fsRead');
const { insertTalker, changeList, deleteTalker } = require('../utils/fsWrite');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkerFile = await fsRead();

  if (!talkerFile.length) {
    return res.status(200).json(talkerFile);
  }
  return res.status(200).json(talkerFile);
});

router.get('/:id', async (req, res) => {
  const talkerFile = await fsRead();

  const selectedTalker = talkerFile.find(({ id }) => id === Number(req.params.id));

  if (selectedTalker) {
    return res.status(200).json(selectedTalker);    
  }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

router.post('/', 
  tokenValidation, 
  nameValidation, 
  ageValidation,
  talkValidation,
  watchedValidation,
  rateValidation,
  async (req, res) => {
  const addedTalker = req.body;
  const addedTalkerList = await insertTalker(addedTalker);
  return res.status(201).json(addedTalkerList);
});

router.put('/:id', 
  tokenValidation, 
  nameValidation, 
  ageValidation,
  talkValidation,
  watchedValidation,
  rateValidation,
  async (req, res) => {
    const { id } = req.params;
    const toUpdate = req.body;
    const changedTalker = await changeList(toUpdate, id);
    return res.status(200).json(changedTalker);
});

router.delete('/:id', 
tokenValidation,
async (req, res) => {
  const { id } = req.params;
  await deleteTalker(id);
  return res.status(204).json();
});

module.exports = router;
