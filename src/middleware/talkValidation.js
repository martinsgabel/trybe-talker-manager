const talkValidation = (req, res, next) => {
  const talkField = req.body.talk;

  if (!talkField) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });  
  }

  return next();
};

module.exports = talkValidation;