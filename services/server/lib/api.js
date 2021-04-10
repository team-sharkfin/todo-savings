import { Router } from "express";

export const API_BASE_PATH = "/api";
export const SESSION_CHECK_PATH = "/session";

function checkSession(req, res) {
  const session = typeof req.user !== "undefined";
  res.json({ session });
}

export function apiRouter() {
  const router = Router();

  router.get(SESSION_CHECK_PATH, checkSession);

  return router;
}
