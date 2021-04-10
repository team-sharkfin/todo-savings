// https://expressjs.com/en/starter/hello-world.html
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { API_BASE_PATH, apiRouter } from "./api.js";
import {
  BASE_LOGIN_PATH,
  GITHUB_STRATEGY_CONFIG,
  loginRouter,
} from "./github.js";
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

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session());
app.use(passport.initialize());
app.use(passport.session());
app.use(API_BASE_PATH, cors(), apiRouter());
app.use(BASE_LOGIN_PATH, loginRouter());

const port = 3000;

app.listen(port, () => {
  console.log(`Express listening on http://localhost:${port}`);
});
