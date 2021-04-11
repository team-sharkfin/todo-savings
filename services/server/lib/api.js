import cors from "cors";
import { Router } from "express";
import { findProfile } from "./db.js";

export function apiRouter() {
  const router = Router();

  function protect(req, res, next) {
    if (typeof req.user === "undefined") {
      res.status(401).end();
    }
    next();
  }

  router.use(
    cors({
      credentials: true,
      origin: process.env.APP_BASE_URL,
    })
  );

  router.get("/profile", protect, async (req, res) => {
    try {
      const profile = await findProfile(req.user);

      if (profile) {
        res.json(profile);
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

  router.get("/session", (req, res) => {
    const session = typeof req.user !== "undefined";
    res.json({ session });
  });

  return router;
}
