import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import { connectDB } from "./config/db.js";

// ⭐ Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// ✅ Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// ✅ CORS only in development
if (NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

// ✅ Serve Frontend in Production
if (NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "frontend", "dist");
  app.use(express.static(frontendPath));

  // ⭐ FIX: Serve index.html for ALL routes (React Router fallback)
 app.use((req, res) => {
  res.sendFile(path.resolve(frontendDistPath, "index.html"));
});


} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error("💥 Error:", err.message);
  res.status(500).json({ message: "Server Error", error: err.message });
});

// ✅ Start Server
app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running in ${NODE_ENV} mode on port ${PORT}`);
});
