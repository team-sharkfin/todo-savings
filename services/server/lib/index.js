// https://expressjs.com/en/starter/hello-world.html
import bodyParser from "body-parser";
import express from "express";
import passport from "passport";
import { apiRouter } from "./api.js";
import { githubStrategy, githubRouter } from "./github.js";
import session from "./session.js";

passport.use(githubStrategy());
passport.serializeUser((id, done) => done(null, id));
passport.deserializeUser((id, done) => done(null, id));

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session());
app.use(passport.initialize());
app.use(passport.session());
app.use(apiRouter());
app.use(githubRouter());

const port = 3000;

app.listen(port, () => {
  console.log(`Express listening on http://localhost:${port}`);
});
