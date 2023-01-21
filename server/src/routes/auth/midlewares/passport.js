const passport = require("passport");
const PassportLocal = require("passport-local");
const { User } = require("../../../db");
const { compareHash } = require("../../../utils/password.js");

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new PassportLocal.Strategy(
    {
      usernameField: "email",
      session: false,
    },
    async (email, password, done) => {
      try {
        const userFound = await User.findOne({
          where: {
            email,
          },
          attributes: [
            "id",
            "password",
            "roleId",
            "image",
            "email",
            "name",
            "surname",
          ],
        });
        if (userFound && compareHash(password, userFound.password)) {
          done(null, userFound);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);
