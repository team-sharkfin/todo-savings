// https://expressjs.com/en/starter/hello-world.html
import bodyParser from "body-parser";
import express from "express";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { GITHUB_STRATEGY_CONFIG } from "./config.js";
import router from "./router.js";
import session from "./session.js";

// https://github.com/passport/express-4.x-facebook-example/blob/master/server.js
passport.use(
  new GitHubStrategy(
    GITHUB_STRATEGY_CONFIG,
    (accessToken, refreshToken, profile, cb) => cb(null, profile)
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Listen on port 3000 when running in Docker or port 9000 when running locally.
// Listening on a different port when running locally allows webpack to listen
// on port 3000 and proxy requests to Express so the authentication callback
// URLs will work in both environments.
const port = process.env.NODE_ENV === "production" ? 3000 : 9000;

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.listen(port, () => {
  console.log(`Express listening on http://localhost:${port}`);
});
