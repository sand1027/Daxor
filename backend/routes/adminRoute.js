import express from "express";
import { createAdmin, loginAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/register", createAdmin); // Register a new admin
adminRouter.post("/login", loginAdmin); // Login an admin

export default adminRouter;
