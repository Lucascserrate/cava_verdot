const bcrypt = require("bcrypt");
const criptoJS = require("crypto-js");
const { PASSWORD_SECRET } = process.env;

async function generateHash(password) {
  const hash = await bcrypt.hash(password, 12);
  return hash;
}

async function compareHash(password, passwordHashed) {
  const validate = await bcrypt.compare(password, passwordHashed);
  return validate;
}

const desEncriptar = (password) => {
  let bytes = criptoJS.AES.decrypt(password, PASSWORD_SECRET);
  let originalText = bytes.toString(criptoJS.enc.Utf8);
  return originalText;
};

module.exports = { generateHash, compareHash, desEncriptar };
