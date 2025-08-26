import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// POST: Submit feedback
router.post("/feedback", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ success: false, msg: "All fields required" });
    }

    const newFeedback = new Feedback({ email, message });
    await newFeedback.save();

    res.json({ success: true, msg: "Feedback saved successfully" });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

// GET: Fetch all feedback (optional, for admin)
router.get("/feedback", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json({ success: true, data: feedbacks });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Server error" });
  }
});

export default router;
