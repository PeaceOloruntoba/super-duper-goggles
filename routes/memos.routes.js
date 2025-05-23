import express from "express";
import {
  createMemo,
  getMemos,
  updateMemoStatus,
  archiveMemo,
} from "../controllers/memoController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);
router.post("/", createMemo);
router.get("/", getMemos);
router.put("/status", updateMemoStatus);
router.put("/archive/:memoId", archiveMemo);

export default router;
