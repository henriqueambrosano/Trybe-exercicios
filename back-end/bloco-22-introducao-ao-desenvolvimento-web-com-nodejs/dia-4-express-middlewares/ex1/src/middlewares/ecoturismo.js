const validateName = (req, res, next) => {
  const nameKey = req.body.name;
  if(!nameKey) return res.status(400).json( {message: "O campo name é obrigatório"} )
  if(nameKey.length < 5) return res.status(400).json({ message: "O campo name deve ter no minimo 4 caracteres"})
  next();
};

const validatePrice = (req, res, next) => {
  const priceKey = req.body.price;
  if(priceKey === undefined) return res.status(400).json( {message: "O campo price é obrigatório"} ) 
  if(+priceKey < 0) return res.status(400).json( {message: "O campo price deve ser um numeri maior ou igual a zero"} )
  next();
};

const validateDescription = (req, res, next) => {
  const isDescription = req.body.description;
  console.log(isDescription)
  const descriptionKeys = ['createdAt', 'rating', 'difficulty'];
  if(!isDescription) return res.status(400).json({message: "O campo description é obrigatório"})
  if(!descriptionKeys.every((property) => property in isDescription)) return res.status(400).json({message: 'faltam atributos'});
  next()
}

const validateCreatedAt = (req, res, next) => {
  const createdAtKey = req.body.description.createdAt;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if(!isFormatDate.test(createdAtKey)) return res.status(400).json({message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"});
  next();
};

const validateRating = (req, res, next) => {
  const ratingKey = req.body.description.rating;
  if(ratingKey < 1 || ratingKey > 5) return res.status(400).json({message: 'O campo rating deve ser um número inteiro entre 1 e 5'});
  next();
};

validateDifficulty = (req, res, next) => {
  const difficultyKey = req.body.description.difficulty;
  const difficultyValues = ['Fácil', 'Médio', 'Difícil']
  if(!difficultyValues.includes(difficultyKey)) return res.status(400).json({
    message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"
  });
  next();
};

validatePerson = (req, res, next) => {
  const person = req.body;
  console.log(person)
  const personAttributes = ['email', 'password', 'firstName', 'phone'];
  if(!person || !personAttributes.every((attribute) => attribute in person)) return res.status(401).json({message: "Campos ausentes!"});
  next();
};


module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validatePerson,
}