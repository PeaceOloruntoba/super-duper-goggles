import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import memoRoutes from "./routes/memos.js";
import fieldRoutes from "./routes/fields.js";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/memos", memoRoutes);
app.use("/api/fields", fieldRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server Error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
