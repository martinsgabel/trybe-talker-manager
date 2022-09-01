const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

const watchedValidation = (req, res, next) => {
  const date = req.body.talk.watchedAt;
  const talkField = req.body.talk;

  if (!talkField.watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });  
  }

  if (!dateRegex.test(date)) {
    return res.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });  
  }

  return next();
};

module.exports = watchedValidation;