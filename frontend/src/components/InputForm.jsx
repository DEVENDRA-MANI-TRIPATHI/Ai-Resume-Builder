import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url";
import AnalysisResult from "./AnalysisResult";
import { FaFileUpload, FaSearch, FaCheckCircle } from "react-icons/fa";
import { Toast, ToastToggle } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const InputForm = () => {
  const [fileName, setFileName] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [coverLetterResult, setCoverLetterResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coverLoading, setCoverLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please select a PDF file only.');
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File size must be less than 5MB.');
        return;
      }
      
      setFileName(file.name);
      setError(null);
      
      try {
        await extractTextFromPDF(file, setPdfText);
      } catch (err) {
        setError('Failed to extract text from PDF. Please try another file.');
      }
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
              .filter(text => text.length > 0)
              .join(" ");
            extractedText += pageText + "\n\n";
          }

          if (extractedText.trim().length < 50) {
            throw new Error('PDF appears to be empty or contains insufficient text');
          }

          setPdfText(extractedText);
          resolve(extractedText);
        } catch (error) {
          console.error('PDF extraction error:', error);
          reject(error);
        }
      };

      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsArrayBuffer(file);
    });
  };

  const handleAnalyze = async () => {
    if (!pdfText || !jobDescription) {
      setShowToast(true);
      return;
    }

    if (pdfText.trim().length < 50) {
      setError('Resume text is too short. Please upload a proper resume.');
      return;
    }

    if (jobDescription.trim().length < 20) {
      setError('Job description is too short. Please provide more details.');
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/resume/analyze`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          resumeText: pdfText.trim(), 
          jobDescription: jobDescription.trim() 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setAnalysisResult(data);
    } catch (error) {
      console.error('Analysis error:', error);
      setError(error.message || 'Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCoverLetter = async () => {
    if (!pdfText || !jobDescription) {
      setShowToast(true);
      return;
    }

    if (pdfText.trim().length < 50) {
      setError('Resume text is too short. Please upload a proper resume.');
      return;
    }

    if (jobDescription.trim().length < 20) {
      setError('Job description is too short. Please provide more details.');
      return;
    }

    setCoverLoading(true);
    setError(null);
    setCoverLetterResult(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/resume/cover-letter`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ 
          resumeText: pdfText.trim(), 
          jobDescription: jobDescription.trim() 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setCoverLetterResult(data);
    } catch (error) {
      console.error('Cover letter error:', error);
      setError(error.message || 'Failed to generate cover letter. Please try again.');
    } finally {
      setCoverLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-800 text-white rounded-xl w-full md:w-3/4 mx-auto text-center p-6 shadow-xl transition-transform hover:scale-101">
        <div className="mt-5">
          <textarea
            className="w-full min-h-40 p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 bg-gray-900 resize-vertical"
            placeholder="Paste or type the job description here... (minimum 20 characters)"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            maxLength={5000}
          ></textarea>
          <div className="text-right text-xs text-gray-500 mt-1">
            {jobDescription.length}/5000 characters
          </div>
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
            <span className="text-sm font-medium">Upload Resume (PDF only, max 5MB)</span>
          </label>

          {fileName && (
            <p className="text-green-400 text-sm mt-1 font-semibold">✔ {fileName} selected</p>
          )}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={handleAnalyze}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || coverLoading}
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
          
          <button
            onClick={handleCoverLetter}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-md shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || coverLoading}
          >
            {coverLoading ? (
              <>
                <FaSearch className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <FaCheckCircle />
                Generate Cover Letter
              </>
            )}
          </button>
        </div>
        
        {error && (
          <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded-lg">
            <p className="text-red-300 font-medium">{error}</p>
          </div>
        )}
        
        {analysisResult && <AnalysisResult result={analysisResult} />}
      </div>
      
      {coverLetterResult && (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg w-full md:w-3/4 mx-auto">
          <h3 className="text-lg font-bold text-green-400 mb-3">Generated Cover Letter:</h3>
          <div className="text-gray-300 text-left whitespace-pre-wrap leading-relaxed">
            {coverLetterResult.coverLetter}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(coverLetterResult.coverLetter)}
            className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
          >
            Copy to Clipboard
          </button>
        </div>
      )}

      {showToast && (
        <div className="fixed top-5 right-5 z-50 w-full max-w-xs">
          <Toast className="bg-yellow-100 text-yellow-800 border border-yellow-300">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-200 text-yellow-700">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-medium">
              Please upload a resume and enter the job description.
            </div>
            <ToastToggle onDismiss={() => setShowToast(false)} />
          </Toast>
        </div>
      )}
    </>
  );
};

export default InputForm;
