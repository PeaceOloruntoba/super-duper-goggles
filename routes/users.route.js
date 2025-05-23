import express from "express";
import { protect, restrictTo } from "../middlewares/auth.js";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protect, restrictTo("Admin"));
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
