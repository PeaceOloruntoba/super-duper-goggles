import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect, restrictTo } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", protect, restrictTo("Admin"), registerUser);
router.post("/login", loginUser);

export default router;
