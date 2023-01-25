const { User } = require("../../db.js");

const deleteUser = async (req, res) => {
  console.log(req.query);
  const { userId } = req.params;
  const {status} = req.query
    try {
    
    const oldUser = await User.findByPk(userId);
    const newUser = await oldUser.update({
      status: status ? status : oldUser.status,
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteUser;
