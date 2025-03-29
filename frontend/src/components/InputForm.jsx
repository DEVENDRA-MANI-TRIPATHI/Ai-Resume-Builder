import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url";
import AnalysisResult from "./AnalysisResult";
import { FaFileUpload, FaSearch, FaCheckCircle } from "react-icons/fa";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const InputForm = () => {
  const [fileName, setFileName] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      extractTextFromPDF(file, setPdfText);
    } else {
      setFileName("");
      setPdfText("");
    }
  };


  const extractTextFromPDF = async (file, setPdfText) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async function () {
        try {
          const typedArray = new Uint8Array(reader.result);
          const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
          let extractedText = "";

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str.trim()).join(" ");
            extractedText += pageText + "\n\n";
          }

          setPdfText(extractedText);
          resolve(extractedText);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleAnalyze = async () => {
    if (!pdfText || !jobDescription) {
      alert("Please upload a resume and enter the job description.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/resume/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume: pdfText, jobDescription }),
      });

      if (!response.ok) throw new Error("Failed to analyze");

      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-xl w-full max-w-3xl mx-auto text-center p-6 shadow-xl transition-transform hover:scale-105">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-300">Upload Resume & Job Description</h2>
      <p className="text-gray-400 text-sm mt-1">Get an AI-powered analysis to optimize your resume.</p>
      <div className="mt-5">
        <textarea
          className="w-full min-h-40 p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 bg-gray-900"
          placeholder="Paste or type the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-4">
        <label className="flex items-center space-x-2 text-blue-400 cursor-pointer hover:text-blue-500 transition">
          <FaFileUpload size={20} />
          <input
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          <span className="text-sm font-medium">Upload Resume (PDF)</span>
        </label>

        {fileName && (
          <p className="text-green-400 text-sm mt-1 font-semibold">✔ {fileName} selected</p>
        )}
      </div>
      <button
        onClick={handleAnalyze}
        className="mt-6 w-full md:w-auto flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md disabled:opacity-50"
        disabled={loading}
      >
        {loading ? (
          <>
            <FaSearch className="animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <FaCheckCircle />
            Analyze Resume
          </>
        )}
      </button>
      {error && <p className="text-red-400 mt-3 font-medium">{error}</p>}
      {analysisResult && <AnalysisResult result={analysisResult} />}
    </div>
  );
};

export default InputForm;
