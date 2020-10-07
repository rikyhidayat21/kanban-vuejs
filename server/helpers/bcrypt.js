const bcrypt = require('bcryptjs')

function hashPass(password) {
  let salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function comparePass(passwordClient, passwordServer) {
  return bcrypt.compareSync(passwordClient, passwordServer)
}

module.exports = { hashPass, comparePass }