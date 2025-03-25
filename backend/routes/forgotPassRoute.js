import express from "express";
import {
  forgotPassword,
  verifyOTP,
  resetPassword,
} from "../controllers/forgotPasswordController.js";

const forgotPassRouter = express.Router();

forgotPassRouter.post("/forgot-password", forgotPassword);
forgotPassRouter.post("/verify-otp", verifyOTP);
forgotPassRouter.post("/reset-password", resetPassword);

export default forgotPassRouter;
