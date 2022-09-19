const config = {
  username: "root",
  password: "root",
  database: "associations",
  host: "localhost",
  port: 33060,
  dialect: "mysql"
}

module.exports = {
  development: config,
  test: config,
  production: config
}
