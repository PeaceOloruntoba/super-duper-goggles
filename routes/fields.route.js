import express from "express";
import {
  createMemoField,
  getMemoFields,
} from "../controllers/fieldController.js";
import { protect, restrictTo } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);
router.post("/", restrictTo("Admin"), createMemoField);
router.get("/", getMemoFields);

export default router;
