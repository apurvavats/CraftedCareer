import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import resumeRoutes from "./routes/resumeRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js"; // ✅ new route

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",              // during development
    "https://crafted-career.vercel.app"   // <-- replace after frontend is live
  ],
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use("/processed", express.static("processed"));

// Welcome route
app.get("/", (req, res) => {
  res.send("🎉 Resume Transformer API is running!");
});

// API routes
app.use("/api", resumeRoutes);
app.use("/api", feedbackRoutes); // ✅ feedback

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
