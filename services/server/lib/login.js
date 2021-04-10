import { Router } from "express";
import passport from "passport";

export const BASE_LOGIN_PATH = "/login";
export const GITHUB_LOGIN_PATH = `${BASE_LOGIN_PATH}/github`;
export const GITHUB_CALLBACK_PATH = `${GITHUB_LOGIN_PATH}/callback`;

export const GITHUB_STRATEGY_CONFIG = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_PATH,
};

export function loginRouter() {
  const router = Router();

  router.get(GITHUB_LOGIN_PATH, passport.authenticate("github"));

  router.get(
    GITHUB_CALLBACK_PATH,
    passport.authenticate("github", { failureRedirect: BASE_LOGIN_PATH }),
    function (req, res) {
      res.redirect("/");
    }
  );

  return router;
}
