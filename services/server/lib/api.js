import cors from "cors";
import { Router } from "express";

export function apiRouter() {
  const router = Router();

  // eslint-disable-next-line no-unused-vars
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

  router.get("/session", (req, res) => {
    const session = typeof req.user !== "undefined";
    res.json({ session });
  });

  return router;
}
