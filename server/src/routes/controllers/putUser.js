const { User } = require("../../db.js");
const { uploadImage } = require("../../Cloudinary/cloudinary.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;


const putUser = async (req, res) => {
  const { userId } = req.params;
  const verifyId = req.verifyId;
  const { name, surname, email, age, image } = req.body;
  try {
    //Capa de seguridad
    if (!userId) {
      res.status(400).send("userId is required");
    } else {
      if (parseInt(userId) !== verifyId)
        return res.status(400).send("Not authorized");
    }
    //validaciones
    let errors = {};
    //validando datos recibidos
    if (name) {
      !/^[a-záéíóúäëïöü]*$/i.test(name)
        ? (errors.nameAlpha =
            "the name must only contain characters of the alphabet")
        : null;
    }
    if (surname) {
      !/^[a-záéíóúäëïöü]*$/i.test(surname)
        ? (errors.surnameAlpha =
            "the surname must only contain characters of the alphabet")
        : null;
    }
    if (age) {
      age < 18
        ? (errors.ageMin = "age must be greater than or equal to 18")
        : null;
    }
    image
      ? !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(
          image
        )
        ? (errors.image = "URL invalid")
        : null
      : null;
    let uniqueEmailValidator;
    if (email) {
      uniqueEmailValidator = await User.findAll({
        where: {
          email,
        },
      });
    }
    if (email) {
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
        ? (errors.emailFormat = "invalid email")
        : null;
      email
        ? uniqueEmailValidator.length
          ? (errors.emailExists = "this email already exists")
          : null
        : null;
    }
    //respuesta en caso de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    
    //cargando roles a la base de datos solo si aún no han sido cargadas
    const oldUser = await User.findByPk(userId, {
      attributes: ["id", "name", "surname", "age", "image", "email", "emailProvider"],
    });
    //devolviendo error si intenta cambiar email cuando emailProvider es diferente de "local"
    if (email && oldUser.emailProvider !== "local") {
      errors.email = "You cannot exchange email with a third-party provider";
      return res.status(400).send(errors);
    }
    //actualizando usuario si el email es local
    let newUser;
    if (oldUser.emailProvider === "local") {
      newUser = await oldUser.update({
        name: name ? name : oldUser.name,
        surname: surname ? surname : oldUser.surname,
        age: age ? age : oldUser.age,
        image: image ? image : oldUser.image,
        email: email ? email : oldUser.email,
      });
    } else {
      newUser = await oldUser.update({
        name: name ? name : oldUser.name,
        surname: surname ? surname : oldUser.surname,
        age: age ? age : oldUser.age,
        image: image ? image : oldUser.image,
      });
    }
    const token = jwt.sign(
      {
        id: newUser.id,
        role: newUser.roleId,
        image: newUser.image,
        name: newUser.name,
        surname: newUser.surname,
        email: newUser.email,
        emailProvider: newUser.emailProvider,
        age: newUser.age,
      },
      JWT_SECRET,
      { expiresIn: "3h" }
    );
    res.status(200).json(token);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = putUser;
