import { Router } from "express";
import passport from "passport";

const {
  APP_BASE_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_PATH,
} = process.env;

export const GITHUB_STRATEGY_CONFIG = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_PATH,
};

export function githubLoginRouter() {
  const router = Router();

  router.get("/login/github", passport.authenticate("github"));

  router.get(
    GITHUB_CALLBACK_PATH,
    passport.authenticate("github", { failureRedirect: APP_BASE_URL }),
    (req, res) => res.redirect(APP_BASE_URL)
  );

  return router;
}
