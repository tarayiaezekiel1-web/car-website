import express from "express";
import { postCar, getCars, getOneCar, deleteCar } from "../controllers/carController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getCars);
router.get("/:id", getOneCar);

// ✅ Multer middleware for handling the image file
router.post("/", upload.single("image"), postCar);

router.delete("/:id", deleteCar);

export default router;
