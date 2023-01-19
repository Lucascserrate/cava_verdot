const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const midlewareValidation = async (req, res, next) => {
  const barerToken = req.headers.authorization?.split(" ");
  try {
    const token =
      barerToken && barerToken[0] === "Bearer" ? barerToken[1] : null;
    if (!barerToken || !token) {
      res.status(401).send({ message: "Not authorized" });
    } else {
      const payload = jwt.verify(token, JWT_SECRET);
      req.verifyId = payload.id;
      req.role = payload.role;
      next();
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { midlewareValidation };
