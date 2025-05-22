import mongoose from "mongoose";

const memoFieldSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ["text", "date", "select", "file"],
    required: true,
  },
  required: { type: Boolean, default: false },
  options: [{ type: String }], // For 'select' type fields
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("MemoField", memoFieldSchema);
