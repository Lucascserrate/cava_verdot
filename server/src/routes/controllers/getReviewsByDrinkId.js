const { RatingAndReview, User } = require("../../db.js");

const getReviewsByDrinkId = async (req, res) => {
  const { drinkId } = req.params;
  try {
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
        console.log(userImage);
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

module.exports = getReviewsByDrinkId;
