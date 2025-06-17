import asyncHandler from "express-async-handler";
import MemoField from "../models/MemoField.js";

const createMemoField = asyncHandler(async (req, res) => {
  const { name, type, required, options } = req.body;

  const field = await MemoField.create({
    name,
    type,
    required,
    options: type === "select" ? options : [],
    createdBy: req.user._id,
  });

  res.status(201).json(field);
});

const getMemoFields = asyncHandler(async (req, res) => {
  const fields = await MemoField.find();
  res.json(fields);
});

export { createMemoField, getMemoFields };
 