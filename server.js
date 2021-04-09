// https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const passport = require("passport");
const { Strategy: GitHubStrategy } = require("passport-github");

// https://github.com/passport/express-4.x-facebook-example/blob/master/server.js
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/return",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

const app = express();
const port = 3000;

app.use(require("body-parser").urlencoded({ extended: true }));

app.use(
  require("express-session")({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/login/github", passport.authenticate("github"));

app.get(
  "/return",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
