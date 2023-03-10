const { User, Drink, RatingAndReview } = require("../../db");
const { Op } = require("sequelize");

const postReview = async (req, res) => {
  const { userId, drinkId } = req.query;
  const { punctuation, review } = req.body;
  try {
    const errors = {};
    console.log(punctuation)
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
    //verificar si este usuario ya ha realizado comentario para este producto
    const searchOld = await RatingAndReview.findOne({
      where: {
        [Op.and]: [{ userId }, { drinkId }],
      },
    });
    searchOld
      ? (errors.searchOld = `This user already made a post for this product ID:${searchOld.id}`)
      : null;
    //respuesta de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    //si todo va bien
    await RatingAndReview.create({
      userId: parseInt(userId),
      drinkId: parseInt(drinkId),
      punctuation,
      review,
    });
    //si existe punctuation y es mayor que cero se actualiza la informacion en drik.rating
    //se obtiene suma de puntuaciones omite los de valor 0
    const totalPoints = await RatingAndReview.sum("punctuation", {
      where: {
        drinkId: drinkId,
        punctuation: {
          [Op.not]: 0,
        },
      },
    });
    //se obtiene total de votantes se omite los valores 0
    const totalVoters = await RatingAndReview.findAndCountAll({
      where: {
        drinkId: drinkId,
        punctuation: {
          [Op.not]: 0,
        },
      },
    });
    //obtenemos el promedio y actualizamos el rating
    const rating = Math.round(totalPoints / totalVoters.count);
    const drinkUpdate = await Drink.findByPk(drinkId);
    await drinkUpdate.update({
      rating,
    });
    //obtenemos todas las votaciones para enviarlas
    const allReviews = await RatingAndReview.findAll({
      where: {
        drinkId,
      },
    });
    await Promise.all(
      allReviews.map(async (review) => {
        let userImage = await User.findByPk(review.userId, {
          attributes: ["image"],
        });
        review.dataValues.userImage = userImage.dataValues.image;
        return review;
      })
    ).then((e) => e);
    res.status(200).send(allReviews);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = postReview;
