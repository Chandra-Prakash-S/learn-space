import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  toggleLike,
  addComment,
} from "../controllers/post.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);

router.post("/", protect, createPost);
router.patch("/:id/like", protect, toggleLike);
router.post("/:id/comments", protect, addComment);

export default router;