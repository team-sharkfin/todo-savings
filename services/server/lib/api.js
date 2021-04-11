import cors from "cors";
import { Router } from "express";
import { addReward, findRewards } from "./db.js";

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

  router.get("/rewards", protect, async (req, res) => {
    try {
      const rewards = await findRewards(req.user);
      res.json(rewards);
    } catch (error) {
      console.error(error.message);
      res.status(500).end();
    }
  });

  router.post("/rewards", protect, async (req, res) => {
    try {
      const rewardId = await addReward({ ...req.body, userId: req.user });
      res.json({ rewardId });
    } catch (error) {
      console.error(error.message);
      res.status(500).end();
    }
  });

  router.get("/session", (req, res) => {
    const session = typeof req.user !== "undefined";
    res.json({ session });
  });

  return router;
}
