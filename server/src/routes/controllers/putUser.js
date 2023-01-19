const { User } = require("../../db.js");
const { uploadImage } = require("../../Cloudinary/cloudinary.js");

const putUser = async (req, res) => {
  console.log(req.params);
  const { userId } = req.params;
  const { name, surname, address, age, newImage } = req.body;
  try {
    //validaciones
    let errors = {};
    //Subiendo imagen a Cloudinary
    let image;
    if (newImage) {
      image = await uploadImage(newImage);
    }
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
    //respuesta en caso de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //cargando roles a la base de datos solo si aún no han sido cargadas
    const oldUser = await User.findByPk(userId, {
      attributes: ["id", "name", "surname", "age", "email", "address", "image"],
    });
    const newUser = await oldUser.update({
      name: name ? name : oldUser.name,
      surname: surname ? surname : oldUser.surname,
      address: address ? address : oldUser.address,
      age: age ? age : oldUser.age,
      image: newImage ? image.url : oldUser.image,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = putUser;
