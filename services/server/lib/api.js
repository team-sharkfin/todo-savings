import cors from "cors";
import { Router } from "express";

export function apiRouter() {
  const router = Router();

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
