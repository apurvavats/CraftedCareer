import fs from "fs";

import PDFDocument from "pdfkit";
import { GoogleGenerativeAI } from "@google/generative-ai";

import dotenv from "dotenv";
import PDFParser from "pdf2json"; // <-- 1. Import the new library

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// This is a helper function to make pdf2json work with async/await
const getTextFromPdf = (pdfPath) => {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser(this, 1);

    pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
    pdfParser.on("pdfParser_dataReady", () => {
      resolve(pdfParser.getRawTextContent());
    });

    pdfParser.loadPDF(pdfPath);
  });
};


export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No resume file uploaded." });
    }

    const resumePath = req.file.path;
    const resumeText = await getTextFromPdf(resumePath);
    const jobDescription = req.body.jobDescription || "a software engineer role";

    // ✅ 3. Set up the Gemini model and the prompt
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const prompt = `You are a professional resume optimizer. Rewrite the following resume to be tailored for the given job description, highlighting key skills and using strong action verbs. Ensure it is ATS-friendly. Here is the resume:\n${resumeText}\n\nHere is the job description:\n${jobDescription}`;

    // ✅ 4. Call the Gemini API to generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const updatedResume = response.text();
    
    // The rest of the function stays the same
    const pdfPath = `/processed/${Date.now()}-updated.pdf`;
    const doc = new PDFDocument();
    
    doc.pipe(fs.createWriteStream(pdfPath));
    doc.fontSize(12).text(updatedResume, { align: "left" });
    doc.end();
    
    fs.unlinkSync(resumePath);

    res.json({ downloadUrl: `http://localhost:5000/processed/${pdfPath.split('/').pop()}` });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong processing the resume." });
  }
};

// Your transformResume function can stay the same
export const transformResume = async (req, res) => {
    // ...
};
