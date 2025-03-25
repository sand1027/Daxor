import express from "express";
import {
  loginUser,
  registerUser,
  fetchUsers,
} from "../controllers/userController.js";
import {
  getUserProfile,
  updateUserProfile,
  changeUserPassword,
} from "../controllers/userUpdateController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/users", fetchUsers);
userRouter.get("/profile/:userId", getUserProfile);
userRouter.put("/profile/:userId", updateUserProfile);
userRouter.put("/change-password/:userId", changeUserPassword);
export default userRouter;
