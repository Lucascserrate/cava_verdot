const bcrypt = require('bcrypt')

export function generateHash(password){
  const salt = bcrypt.genSaltSync(12)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export function compareHash(password, hashed){
  return bcrypt.compare(password, hashed)
}