const { Router } = require("express");
const { User } = require("../../db.js");
const bcrypt = require("bcrypt");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

async function compareHash(password, passwordHashed) {
  const validate = await bcrypt.compare(password, passwordHashed);
  return validate;
}

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) return res.status(404).send("Email is required");
    if (!password) return res.status(404).send("password is required");
    //validando email
    const emailExists = await User.findOne({
      where: {
        email,
      },
      attributes: ["password", "roleId"],
    });
    if (emailExists === null)
      return res.status(401).send("Invalid credentials");
    //validando password
    const passwordValidation = await compareHash(
      password,
      emailExists.password
    );
    if (passwordValidation) {
      const token = jwt.sign(
        { email: email, role: emailExists.roleId },
        JWT_SECRET,
        { expiresIn: "3h" }
      );
      return res.status(200).send(token);
    }
    return res.status(401).send("Invalid credentials");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
