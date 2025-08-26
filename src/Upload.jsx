import React from 'react';
import { useState } from 'react';
import './upload.css';

function Upload() {
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.type !== "application/pdf") {
      setErr("Please upload a PDF file.");
      e.target.value = "";
      setFile(null);
      return;
    }
    setErr("");
    setFile(f);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return setErr("Please upload your resume (PDF).");
    if (!job.trim()) return setErr("Please paste the job description or title.");

    setLoading(true);
    setErr("");

    try {
      const form = new FormData();
      form.append("resume", file);
      form.append("jobDescription", job);

      // 1. Calling the correct '/api/upload' endpoint
      const res = await fetch(`${process.env.REACT_APP_API_BASE || "http://localhost:5000"}/api/upload`, {
        method: "POST",
        body: form
      });

      if (!res.ok) {
        const msg = await res.json();
        throw new Error(msg.error || "Failed to generate resume.");
      }

      // 2. Handling the JSON response to get the download URL
      const result = await res.json();
      
      // 3. Using the URL to trigger the download
      window.location.href = result.downloadUrl;

    } catch (e) {
      setErr(e.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Upload">
      <div className="upload-card">
        <h1 className="upload-title">Tailor Your Resume</h1>
        <p className="upload-sub">Upload your PDF and paste the job description. We’ll tailor and return a clean, ATS-friendly PDF.</p>

        <form onSubmit={submit} className="upload-form" noValidate>
          <label className="field">
            <span>Resume (PDF only)</span>
            <input type="file" name="resume" accept="application/pdf" onChange={onFile} required />
            {file && <span className="file-name">Selected: {file.name}</span>}
          </label>

          <label className="field">
            <span>Job Description / Title</span>
            <textarea
              rows={8}
              name="jobDescription"
              placeholder="Paste the job description, or at least the role title + key responsibilities."
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            />
          </label>

          {err && <div className="error">{err}</div>}

          <button className="cta" type="submit" disabled={loading}>
            {loading ? "Crafting your resume…" : "Generate Tailored PDF"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;