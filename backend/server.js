import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import formRouter from "./routes/userFormRoute.js";
import adminRouter from "./routes/adminRoute.js";
import forgotPassRouter from "./routes/forgotPassRoute.js";
import contactUSRouter from "./routes/userContactUsRoute.js";
import "dotenv/config";

// App configuration
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/forms", formRouter);
app.use("/admin", adminRouter);
app.use("/", forgotPassRouter);
app.use("/", contactUSRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
