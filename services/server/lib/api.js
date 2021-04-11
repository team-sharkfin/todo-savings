import cors from "cors";
import { Router } from "express";
import { setTaskComplete } from "./db.js";
import {
  addReward,
  findRewards,
  findRewardUserId,
  addTask,
  findTasks,
  findTaskUserId,
  findCompleteRewardsAll,
  countCompleteRewardsAll,
  countCompleteRewardsTime,
  countDueTasksAll,
  countDueTasksTime,
  findLastRewardMet,
  findLastTaskSet,
} from "./db.js";

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

  router.get("/tasks", protect, async (req, res) => {
    try {
      const rewards = await findTasks(req.user);
      res.json(rewards);
    } catch (error) {
      console.error(error.message);
      res.status(500).end();
    }
  });

  router.post("/tasks", protect, async (req, res) => {
    try {
      // First make sure the user has access to this reward
      const rewardUserId = await findRewardUserId(req.body.rewardId);

      if (req.user !== rewardUserId) {
        return res.status(401).end();
      }

      const taskId = await addTask(req.body);
      res.json({ taskId });
    } catch (error) {
      console.error(error.message);
      res.status(500).end();
    }
  });

  router.patch("/tasks", protect, async (req, res) => {
    try {
      const { taskId, isComplete } = req.body;
      // First make sure the user has access to this task
      const taskUserId = await findTaskUserId(taskId);

      if (req.user !== taskUserId) {
        return res.status(401).end();
      }

      await setTaskComplete(taskId, isComplete);
      res.json({ taskId });
    } catch (error) {
      console.error(error.message);
      res.status(500).end();
    }
  });

  router.get("/session", (req, res) => {
    const session = typeof req.user !== "undefined";
    res.json({ session });
  });

  router.get("/profile", protect, async (req, res) => {
    try {
      const compRewards = await findCompleteRewardsAll(req.user);
      const countRAll = await countCompleteRewardsAll(req.user);
      const countRYear = await countCompleteRewardsTime(req.user, 366);
      const countRMonth = await countCompleteRewardsTime(req.user, 31);
      const countRWeek = await countCompleteRewardsTime(req.user, 8);
      const countTAll = await countDueTasksAll(req.user);
      const countTYear = await countDueTasksTime(req.user, 366);
      const countTMonth = await countDueTasksTime(req.user, 31);
      const countTWeek = await countDueTasksTime(req.user, 8);
      const lastRMet = await findLastRewardMet(req.user);
      const lastTSet = await findLastTaskSet(req.user);
      res.json({
        rewardList: compRewards,
        cRewardAll: countRAll,
        cRewardYear: countRYear,
        cRewardMonth: countRMonth,
        cRewardWeek: countRWeek,
        cTaskAll: countTAll,
        cTaskYear: countTYear,
        cTaskMonth: countTMonth,
        cTaskWeek: countTWeek,
        lastReward: lastRMet,
        lastTask: lastTSet,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).end();
    }
  });

  return router;
}
