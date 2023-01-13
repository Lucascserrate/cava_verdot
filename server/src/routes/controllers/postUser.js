const { User, Role } = require("../../db");
const { roles } = require("../../../api.js");
const e = require("express");

const postUser = async (req, res) => {
  const { name, surname, age, email, password, address, image } = req.body;
  try {
    //validando datos recibidos
    let errors = {};
    !name ? (errors.name = "name is required") : null;
    !/^[a-záéíóúäëïöü]*$/i.test(name)
      ? (errors.nameAlpha =
          "the name must only contain characters of the alphabet")
      : null;
    !/^[a-záéíóúäëïöü]*$/i.test(surname)
      ? (errors.surnameAlpha =
          "the surname must only contain characters of the alphabet")
      : null;
    !age ? (errors.age = "age is requiered") : null;
    age < 18
      ? (errors.ageMin = "age must be greater than or equal to 18")
      : null;
    !email ? (errors.email = "email is required") : null;
    let uniqueEmailValidator;
    if (email) {
      uniqueEmailValidator = await User.findAll({
        where: {
          email,
        },
      });
    }
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
    !password ? (errors.password = "password is requiered") : null;
    !address ? (errors.address = "address is requiered") : null;
    image
      ? !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(
          image
        )
        ? (errors.image = "URL invalid")
        : null
      : null;
    //respuesta en caso de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //cargando roles a la base de datos solo si aún no han sido cargadas
    let allRoles = await Role.findAll();
    if (!allRoles.length) {
      allRoles = await Role.bulkCreate(roles);
    }
    //creando nuevo usuario
    const newUser = await User.create({
      name,
      surname,
      age,
      email,
      password,
      address,
      image,
      roleId: 1,
    });
    return res
      .status(200)
      .send(`The user "${newUser.name}" has been created successfully`);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { postUser };
