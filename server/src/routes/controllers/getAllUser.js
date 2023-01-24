const { User } = require("../../db");

const getAllUser = async () => {

  return await User.findAll()
}

module.exports = getAllUser 