import { Router } from "express";
import passport from "passport";
import {
  GITHUB_LOGIN_PATH,
  GITHUB_CALLBACK_PATH,
  LOGIN_PATH,
} from "./config.js";

const router = Router();

router.get(GITHUB_LOGIN_PATH, passport.authenticate("github"));

router.get(
  GITHUB_CALLBACK_PATH,
  passport.authenticate("github", { failureRedirect: LOGIN_PATH }),
  function (req, res) {
    res.redirect("/");
  }
);

export default router;
