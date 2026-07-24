import express from "express";

import authRoutes from "./auth.routes.js";
import courseRoutes from "./course.routes.js";
import liveSessionRoutes from "./liveSession.routes.js";

const router = express.Router();

// Health Check
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 LearnSpace API is running",
  });
});

// Auth Routes
router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/live-sessions", liveSessionRoutes);

export default router;