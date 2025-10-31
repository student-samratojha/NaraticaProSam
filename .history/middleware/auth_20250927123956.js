const jwt = require("jsonwebtoken");

// Auth Middleware
const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token; // assume token stored in cookies
    if (!token) return res.status(401).json({ message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    c
    req.user = decoded; // decoded contains userId + role
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin Middleware
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied, admin only" });
  }
  next();
};

// User Middleware
const userMiddleware = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(403).json({ message: "Access denied, user only" });
  }
  next();
};

// ✅ Export all three middlewares together
module.exports = { authMiddleware, adminMiddleware, userMiddleware };
