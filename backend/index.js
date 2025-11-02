import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // For ES Module __dirname fix

import authRoutes from "./routes/authRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import { connectDB } from "./config/db.js";

// --- ES MODULE PATH FIX ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
// --------------------------

dotenv.config();

const app = express();

// --- MIDDLEWARE & API ROUTES ---
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());


// 1. DEVELOPMENT CONFIG (CORS)
if (process.env.NODE_ENV !== "production") {
  // Only enable CORS for the development frontend origin
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
}

// 2. API Routes (MUST be before static serving)
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);


// 3. PRODUCTION STATIC SERVING AND CATCH-ALL
if (process.env.NODE_ENV === "production") {
  
  const frontendDistPath = path.resolve(__dirname, "../frontend/dist");

  // 3a. Serve the static assets (JS, CSS, images) from the 'dist' folder
  app.use(express.static(frontendDistPath));

  // 3b. Fallback: Catch-all using app.use (The resilient method).
  // This will catch every request that wasn't handled by the static files or API routes above.
  // ⭐️ FIX IS HERE: Using app.use() instead of app.get('*')
  app.use((req, res) => {
    res.sendFile(path.resolve(frontendDistPath, "index.html"));
  });
} 

const PORT = 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
