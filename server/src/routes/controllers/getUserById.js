const { User } = require("../../db.js");
const { uploadImage } = require("../../Cloudinary/cloudinary.js");

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const role = req.role;
  const verifyId = req.verifyId;
  try {
    console.log(role);
    console.log(verifyId);
    console.log(userId);
    if (role < 3) {
      if (parseInt(userId) !== verifyId)
        return res.status(400).send("Not authorized");
    }
    //cargando roles a la base de datos solo si aún no han sido cargadas
    const userInfo = await User.findByPk(userId, {
      attributes: ["id", "name", "surname", "age", "email", "address", "image"],
    });
    if (userInfo) {
      res.status(200).json(userInfo);
    } else {
      res.status(400).send("userId invalid");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getUserById;
