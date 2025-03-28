import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import pdfWorker from "pdfjs-dist/legacy/build/pdf.worker?url"; // Correct import

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker; // Ensures correct version

const InputForm = () => {
  const [fileName, setFileName] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [jobDescription,setJobDescription]=useState("")

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
      extractTextFromPDF(file);
    } else {
      setFileName("");
      setPdfText("");
    }
  };

  const extractTextFromPDF = async (file) => {
    const reader = new FileReader();

    reader.onload = async function () {
      const typedArray = new Uint8Array(reader.result);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
      let extractedText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        extractedText += pageText + "\n";
      }
      console.log("pdf Text : ", extractedText);
      console.log("jobDescription: ", jobDescription);

      setPdfText(extractedText);
    };

    reader.readAsArrayBuffer(file);
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
            />
            Click here
          </label>
        </div>

        {fileName && (
          <p className="text-green-400 mt-2 text-sm">Selected file: {fileName}</p>
        )}
      </div>

      <button className="rounded-lg hover:bg-blue-400 bg-blue-500 p-2 mt-4 transition duration-200">
        Analyze
      </button>
    </div>
  );
};

export default InputForm;
