import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { protect, restrictTo } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", protect, restrictTo("Admin"), registerUser);
router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
