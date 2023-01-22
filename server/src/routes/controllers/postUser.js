const { User, Role, ShopingCart } = require("../../db");
const { roles } = require("../../../api.js");
const jwt = require("jsonwebtoken");
const { generateHash } = require("../../utils/password.js");
const { JWT_SECRET } = process.env;
const { desEncriptar } = require("../../utils/password.js");

const postUser = async (req, res) => {
  const {
    name,
    surname,
    age,
    email,
    password,
    image,
    oldUserId,
    emailProvider,
  } = req.body;
  try {
    let errors = {};
    //validando datos recibidos
    !name ? (errors.name = "name is required") : null;
    !/^[a-záéíóúäëïöü ]*$/i.test(name)
      ? (errors.nameAlpha =
          "the name must only contain characters of the alphabet")
      : null;
    !/^[a-záéíóúäëïöü ]*$/i.test(surname)
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
    !password ? (errors.password = "password is requiered") : null;

    image
      ? !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(
          image
        )
        ? (errors.image = "URL invalid")
        : null
      : null;
    let providerOptions = ["local", "google"];
    if (!emailProvider || !providerOptions.includes(emailProvider)) {
      errors.emailProvider =
        "emailProvider is required and must be 'local' or 'google'";
    }
    if (Object.keys(errors).length)
      //respuesta en caso de errores
      return res.status(400).send(errors);
    //cargando roles a la base de datos solo si aún no han sido cargadas
    let allRoles = await Role.findAll();
    if (!allRoles.length) {
      allRoles = await Role.bulkCreate(roles);
    }
    //encriptando password
    //para pruebas en postmam
    //const pws = await generateHash(password);
    const pws = await generateHash(desEncriptar(password));
    //creando nuevo usuario
    const newUser = await User.create({
      name,
      surname,
      age,
      email,
      password: pws,
      image: image
        ? image
        : "https://img2.freepng.es/20180325/wlw/kisspng-computer-icons-user-profile-avatar-5ab7528676bb25.9036280415219636544863.jpg",
      roleId: 2,
      emailProvider: emailProvider,
    });
    if (oldUserId) {
      const searchCart = await ShopingCart.findAll({
        where: {
          userId: oldUserId,
        },
      });
      if (searchCart !== null) {
        await Promise.all(
          searchCart.map((product) =>
            ShopingCart.update(
              { userId: newUser.id },
              {
                where: {
                  userId: oldUserId,
                },
              }
            )
          )
        );
      }
      await User.destroy({
        where: {
          userId: oldUserId,
        },
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
      },
      JWT_SECRET,
      { expiresIn: "3h" }
    );

    return res.status(200).send(token);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = { postUser };
