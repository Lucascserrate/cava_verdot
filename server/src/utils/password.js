const bcrypt = require("bcrypt");

module.exports = async function generateHash(password) {
  const hash = await bcrypt.hash(password, 12);
  return hash;
};

async function compareHash(password, passwordHashed) {
  const validate = await bcrypt.compare(password, passwordHashed);
  return validate;
}

module.exports = { compareHash };
