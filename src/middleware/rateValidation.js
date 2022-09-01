const rateValidation = (req, res, next) => {
  const talkField = req.body.talk;
  const rateValue = req.body.talk.rate;

  if (!talkField.rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });  
  }

  if (Number.isInteger(rateValue) === false || rateValue < 1 || rateValue > 5) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });  
  }

  return next();
};

module.exports = rateValidation;