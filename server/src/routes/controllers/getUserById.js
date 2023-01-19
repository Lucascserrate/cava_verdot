const { User } = require("../../db.js");
const { uploadImage } = require("../../Cloudinary/cloudinary.js");

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
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
