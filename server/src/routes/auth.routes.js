import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { register, login, getMe } from "../controllers/auth.controller.js";
import { 
  validateRegister, 
  validateLogin,
} from "../validators/auth.validator.js";

const router = express.Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);
router.get("/me", protect, getMe);

export default router;