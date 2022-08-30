const talkerIdValidation = (req, res, next) => {
  const content = req.body;

  if (!content.length) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
};

module.exports = talkerIdValidation;