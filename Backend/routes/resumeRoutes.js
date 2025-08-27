import express from "express";
import { transformResume , uploadResume } from "../controllers/resumeController.js";
import multer from "multer";

const router = express.Router();

// Configure multer for PDF uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "Uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage, fileFilter: (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(new Error("Only PDF allowed"));
}});

router.post("/upload", upload.single("resume"), uploadResume);
router.post("/transform", transformResume);

export default router;
