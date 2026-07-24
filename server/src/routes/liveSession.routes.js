import express from "express";

import {
  getLiveSessions,
  getLiveSessionById,
} from "../controllers/liveSession.controller.js";

const router = express.Router();

router.get("/", getLiveSessions);
router.get("/:id", getLiveSessionById);

export default router;