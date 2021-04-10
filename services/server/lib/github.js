import { Router } from "express";
import passport from "passport";
import { Strategy } from "passport-github";
import { addUserByGitHubId, findUserByGitHubId } from "./db.js";

const {
  APP_BASE_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_PATH,
} = process.env;

export function githubStrategy() {
  return new Strategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_PATH,
    },
    async (accessToken, refreshToken, profile, next) => {
      try {
        let id = await findUserByGitHubId(profile.id);

        if (!id) {
          id = await addUserByGitHubId(profile.id);
        }

        next(null, id);
      } catch (error) {
        next(error);
      }
    }
  );
}

export function githubRouter() {
  const router = Router();

  router.get("/login/github", passport.authenticate("github"));

  router.get(
    GITHUB_CALLBACK_PATH,
    passport.authenticate("github", { failureRedirect: APP_BASE_URL }),
    (req, res) => res.redirect(APP_BASE_URL)
  );

  return router;
}
