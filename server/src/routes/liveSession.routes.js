import express from "express";

import {
  getLiveSessions,
  getUpcomingLiveSessions,
  getLiveSessionById,
  createLiveSession,
  updateLiveSession,
  deleteLiveSession,
} from "../controllers/liveSession.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Dashboard
router.get(
  "/upcoming",
  protect,
  getUpcomingLiveSessions
);

// All live sessions
router.get("/", protect, getLiveSessions);

// Details
router.get("/:id", protect, getLiveSessionById);

// Admin only
router.post(
  "/",
  protect,
  authorize("admin"),
  createLiveSession
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateLiveSession
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteLiveSession
);

export default router;