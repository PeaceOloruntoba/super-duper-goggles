import validator from "validator";
import asyncHandler from "express-async-handler";

const validateUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role, department } = req.body;

  if (!name || !validator.isLength(name, { min: 2 })) {
    res.status(400);
    throw new Error("Name must be at least 2 characters");
  }

  if (!email || !validator.isEmail(email)) {
    res.status(400);
    throw new Error("Invalid email address");
  }

  if (password && !validator.isLength(password, { min: 6 })) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }

  if (!["Admin", "Staff", "Student"].includes(role)) {
    res.status(400);
    throw new Error("Invalid role");
  }

  if (role !== "Admin" && !department) {
    res.status(400);
    throw new Error("Department is required for non-Admin users");
  }

  next();
});

const validateMemo = asyncHandler(async (req, res, next) => {
  const { recipients, department, content } = req.body;

  if (!recipients && !department) {
    res.status(400);
    throw new Error("Must specify recipients or department");
  }

  if (!content || typeof content !== "object") {
    res.status(400);
    throw new Error("Content is required and must be an object");
  }

  next();
});

export { validateUser, validateMemo };
