import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Extract token from header
const getTokenFromHeader = (req) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    return authHeader.split(" ")[1];
  }

  return null;
};

// ================================
// PROTECT (must be logged in)
// ================================
export const protect = async (req, res, next) => {
  const token = getTokenFromHeader(req);

  if (!token) {
    return res.status(401).json({
      message: "Not authorized: Token missing",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

// Admin only
export const adminOnly = (req, res, next) => {
  if (req.user?.role === "admin") {
    return next();
  }

  return res.status(403).json({
    message: "Access denied: Admins only",
  });
};

// Stylist only 
export const stylistOnly = (req, res, next) => {
  if (req.user?.role === "stylist") {
    return next();
  }

  return res.status(403).json({
    message: "Access denied: Stylists only",
  });
};

// Admin or Stylist
export const stylistOrAdmin = (req, res, next) => {
  if (["stylist", "admin", "superadmin"].includes(req.user?.role)) {
    return next();
  }

  return res.status(403).json({
    message: "Access denied: Stylists or Admins only",
  });
};

// Flexible role middleware (BEST ONE)
export const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied: Only [${roles.join(
          ", "
        )}] allowed`,
      });
    }

    next();
  };
};