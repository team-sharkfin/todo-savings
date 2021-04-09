import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/login/github", passport.authenticate("github"));

router.get(
  "/login/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

export default router;
