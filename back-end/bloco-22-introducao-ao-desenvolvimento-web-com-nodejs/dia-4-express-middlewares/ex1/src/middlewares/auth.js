module.exports = (req, res, next) => {
  console.log(req.header('authorization'))
  const { authorization } = req.headers;

  if(!authorization || authorization.length !== 16) res.status(401).json({message: 'Token inválido!'})
  next();
}