const { User } = require("../../db.js");
const { uploadImage } = require("../../Cloudinary/cloudinary.js");

const putUser = async (req, res) => {
  console.log(req.params);
  const { userId } = req.params;
  const role = req.role;
  const verifyId = req.verifyId;
  const { name, surname, email, age, newImage } = req.body;
  try {
    //Capa de seguridad
    if (role < 3) {
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
    if (newImage) {
      result.url
        ? !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(
            image.url
          )
          ? (errors.image = "URL invalid")
          : null
        : null;
    }
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
    //Subiendo imagen a Cloudinary
    let image;
    if (newImage) {
      image = await uploadImage(newImage);
    }
    //cargando roles a la base de datos solo si aún no han sido cargadas
    const oldUser = await User.findByPk(userId, {
      attributes: ["id", "name", "surname", "age", "image", "emailProvider"],
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
        image: newImage ? image.url : oldUser.image,
        email: email ? email : oldUser.email,
      });
    } else {
      newUser = await oldUser.update({
        name: name ? name : oldUser.name,
        surname: surname ? surname : oldUser.surname,
        age: age ? age : oldUser.age,
        image: newImage ? image.url : oldUser.image,
      });
    }
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = putUser;
