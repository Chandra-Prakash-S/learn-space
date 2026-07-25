import express from "express";

import {
  getLiveSessions,
  getUpcomingLiveSessions,
  getLiveSessionById,
} from "../controllers/liveSession.controller.js";

const router = express.Router();

// Dashboard - Upcoming sessions only
router.get("/upcoming", getUpcomingLiveSessions);

// All live sessions
router.get("/", getLiveSessions);

// Live session details
router.get("/:id", getLiveSessionById);

export default router;