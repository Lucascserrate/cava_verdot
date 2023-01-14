const { Router } = require("express");
const { User } = require("../../db.js");
const bcrypt = require("bcrypt");
const router = Router();

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
      attributes: ["password"],
    });
    if (emailExists === null)
      return res.status(404).send("Invalid credentials");
    //validando password
    const passwordValidation = await compareHash(
      password,
      emailExists.password
    );
    if (passwordValidation) return res.status(200).send("succesfull");
    return res.status(400).send("Invalid credentials");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
