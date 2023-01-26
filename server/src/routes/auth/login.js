const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

router.post("/", passport.authenticate("local"), async (req, res) => {
  try {
    const { oldUserId } = req.body;
    const token = jwt.sign(
      {
        id: req.user.id,
        role: req.user.roleId,
        image: req.user.image,
        name: req.user.name,
        surname: req.user.surname,
        email: req.user.email,
        emailProvider: req.user.emailProvider,
        age: req.user.age,
      },
      JWT_SECRET,
      { expiresIn: "3h" }
    );
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
    return res.status(200).send(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
