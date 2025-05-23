import express from "express";
import {
  createMemoField,
  getMemoFields,
} from "../controllers/field.controller.js";
import { protect, restrictTo } from "../middlewares/auth.js";

const router = express.Router();

router.use(protect);
router.post("/", restrictTo("Admin"), createMemoField);
router.get("/", getMemoFields);

export default router;
