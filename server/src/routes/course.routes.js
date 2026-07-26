import express from "express";

import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

// Accessible to authenticated users
router.get("/", protect, getCourses);
router.get("/:id", protect, getCourseById);

// Admin only
router.post(
  "/",
  protect,
  authorize("admin"),
  createCourse
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateCourse
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteCourse
);

export default router;