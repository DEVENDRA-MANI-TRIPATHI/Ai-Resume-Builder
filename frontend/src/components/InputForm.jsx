import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url";
import AnalysisResult from "./AnalysisResult"; 

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const InputForm = () => {

  const [fileName, setFileName] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.value);
    event.target.style.height = "auto"; // Reset height first
    event.target.style.height = event.target.scrollHeight + "px"; // Set to content height
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      extractTextFromPDF(file,setPdfText);
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
  
            
            const pageText = textContent.items
              .map((item) => item.str.trim())
              .join(" ");
  
            extractedText += pageText + "\n\n";
          }
          console.log(extractedText);
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
      const response = await fetch("http://localhost:8000/api/v1/resume/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume: pdfText,
          jobDescription: jobDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze");
      }

      const data = await response.json();
      console.log(data);
      setAnalysisResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-md w-full text-center md:w-2/3 p-4 shadow-lg">
      <div className="p-2 w-full">
        <textarea
          className="w-full min-h-40 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste or type the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        ></textarea>

        <div className="mt-3">
          <span className="text-gray-400">Upload your resume: </span>
          <label className="text-blue-400 cursor-pointer hover:underline">
            <input
              type="file"
              className="hidden"
              accept="application/pdf"
              id="pdfUpload"
              onChange={handleFileChange}
              onInput={handleInput}
            />
            Click here
          </label>
        </div>

        {fileName && (
          <p className="text-green-400 mt-2 text-sm">Selected file: {fileName}</p>
        )}
      </div>

      <button
        onClick={handleAnalyze}
        className="rounded-lg hover:bg-blue-400 bg-blue-500 p-2 mt-4 transition duration-200"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p className="text-red-400 mt-2">{error}</p>}

      {analysisResult && <AnalysisResult result={analysisResult} />}
    </div>
  );
};

export default InputForm;
