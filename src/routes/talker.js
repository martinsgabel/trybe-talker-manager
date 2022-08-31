const express = require('express');
const { fsRead } = require('../utils/fsRead');

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

module.exports = router;
