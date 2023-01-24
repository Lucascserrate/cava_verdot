const { User, Drink, RatingAndReview } = require("../../db");

const postReview = async (req, res) => {
  const { userId, drinkId } = req.query;
  const { punctuation, review } = req.body;
  try {
    const errors = {};
    //capa de seguridad
    if (!userId) {
      errors.userId = "userId is required";
    } else {
      const userExist = await User.findByPk(parseInt(userId));
      !userExist ? (errors.userId = "userId not found") : null;
    }
    //verificar exitencia de la bebida
    if (!drinkId) {
      errors.drinkId = "drinkId is required";
    } else {
      const drinkExist = await Drink.findByPk(parseInt(drinkId));
      !drinkExist ? (errors.drinkId = "drinkId not found") : null;
    }
    //verificar puntuacion
    if (punctuation) {
      punctuation < 0 || punctuation > 5
        ? (errors.punctuation = "punctuation out of range")
        : null;
    }
    //verificar longitud de comentario
    if (review) {
      review.length > 250 ? (errors.review = "review is very large") : null;
    }
    //respuesta de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //si existe punctuation y es mayor que cero se actualiza la informacion en drik.rating
    let suma;
    if (punctuation && punctuation > 0) {
      suma = await RatingAndReview.findAll({
        where: {
          drinkId: drinkId,
          punctuation: {
            [Op.not]: 0,
          },
        },
      });
    }
    console.log(suma);
    //si todo va bien
    await RatingAndReview.create({
      userId: parseInt(userId),
      drinkId: parseInt(drinkId),
      punctuation,
      review,
    });
    res.status(200).send(`Success`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = postReview;
