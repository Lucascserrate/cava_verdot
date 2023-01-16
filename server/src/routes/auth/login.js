const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const passport = require("passport");

router.post("/", passport.authenticate("local"), async (req, res) => {
  try {
    const token = jwt.sign(
      { email: req.user.email, role: req.user.roleId },
      JWT_SECRET,
      { expiresIn: "3h" }
    );
    return res.status(200).send(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
