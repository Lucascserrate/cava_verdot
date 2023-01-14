const bcrypt = require("bcrypt");

module.exports = async function generateHash(password) {
  const hash = await bcrypt.hash(password, 12);
  return hash;
};

module.exports = function compareHash(password, hashed) {
  return bcrypt.compare(password, hashed);
};
