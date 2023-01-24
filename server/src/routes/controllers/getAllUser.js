const { User } = require("../../db");

const getAllUser = async (req, res) => {
  
 const result = await User.findAll()

 res.send(result);

  
}

module.exports = {getAllUser} 