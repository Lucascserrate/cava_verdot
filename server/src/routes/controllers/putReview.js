const { RatingAndReview } = require("../../db.js");

const putReview = async (req, res) => {
  const { reviewId } = req.params;
  const { review } = req.body;
  try {
    const oldReview = await RatingAndReview.findByPk(reviewId);
    const newReview = await oldReview.update({
      review,
    });
    res.status(200).json(newReview);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = putReview;
