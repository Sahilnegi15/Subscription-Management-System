import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";
import { JWT_SECRET } from "../config/env.js";

const authorized = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1]; // ✅ Corrected syntax
    }

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized - No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Fetch user from DB (optional: you can attach full user or just ID)
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = user; // Attach user info to request
    next(); // Proceed to next middleware/controller
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authorized;
