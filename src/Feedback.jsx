import React, { useState } from "react";
import "./feedback.css";

function Feedback() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  // ✅ Use environment variable (fallback to localhost in dev)
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Feedback submitted successfully!");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (err) {
      console.error("Feedback error:", err);
      setStatus("❌ Server error. Please check backend.");
    }
  };

  return (
    <div className="feedback-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="feedback-card">
        <h2> We Value Your Feedback 💌</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Submit ✨</button>
        </form>
        {status && <p className="status">{status}</p>}
      </div>
    </div>
  );
}

export default Feedback;
