import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import { connectDB } from "./config/db.js";

// --- ES MODULE PATH FIX ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --------------------------

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Development CORS
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

// Production static files
if (process.env.NODE_ENV === "production") {
  const frontendDistPath = path.resolve(__dirname, "../frontend/dist");

  // Serve frontend build files
  app.use(express.static(frontendDistPath));

  // Catch-all route
  app.use((req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

// Port (important for deployment)
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(
    `✅ Server running on port ${PORT} in ${
      process.env.NODE_ENV || "development"
    } mode`
  );
});