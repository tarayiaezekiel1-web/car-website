import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// ✅ Enable CORS for frontend
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true, // if you’ll send cookies or auth tokens
}));

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("✅ Server running on port 5000");
});
