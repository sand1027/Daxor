import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  const userId = req.body.userId || req.query.userId; // Assuming userId is sent in request body or query parameter

  if (userId) {
    try {
      const user = await User.findById(userId).select("-password");
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, userId not provided" });
  }
};
