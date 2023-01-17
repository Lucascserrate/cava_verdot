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
          attributes: ["email", "password", "roleId"],
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

/* const PassportJWT = require("passport-jwt");
const { JWT_SECRET } = process.env;
passport.use(
  new PassportJWT.Strategy(
    {
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (payload, done) => {
      try {
        done(null, payload);
      } catch (error) {
        done(error);
      }
    }
  )
); */
