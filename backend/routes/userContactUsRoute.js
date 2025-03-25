import express from "express";
import { sendMessage } from "../controllers/UserContactUsController.js";

const contactUSRouter = express.Router();

contactUSRouter.post("/send-message", sendMessage);

export default contactUSRouter;
