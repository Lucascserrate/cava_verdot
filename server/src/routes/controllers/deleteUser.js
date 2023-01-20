const { User } = require("../../db.js");

const deleteUser = async (req, res) => {
  console.log(req.params);
  const { userId } = req.params;
  const {status} = req.body
    try {
    
    const oldUser = await User.findByPk(userId, {
      attributes: ["status"],
    });
    const newUser = await oldUser.update({
      status: status ? status : oldUser.status,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteUser;
