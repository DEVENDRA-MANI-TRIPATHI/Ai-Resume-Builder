import React from "react";

const AnalysisResult = ({ result }) => {
  if (!result || !result.score) return null;

  const { ats_score, strengths, weaknesses, missing_keywords, improvements } = result.score;

  return (
    <div className="bg-gray-800 rounded-lg mt-8 text-gray-400 w-full min-h-80 p-4">
      <h1 className="text-2xl text-white mb-4">Analysis Result</h1>

      <div className="grid sm:grid-cols-[200px_auto] gap-y-4 gap-x-4 text-left">
        <span className="font-bold text-white">ATS Score:</span>
        <span className="text-gray-400">{ats_score ?? "N/A"}</span>

        <span className="font-bold text-white">Strengths:</span>
        <span className="text-gray-400">{strengths?.length ? strengths.join(", ") : "N/A"}</span>

        <span className="font-bold text-white">Weaknesses:</span>
        <span className="text-gray-400">{weaknesses?.length ? weaknesses.join(", ") : "N/A"}</span>

        <span className="font-bold text-white">Missing Keywords:</span>
        <span className="text-gray-400">{missing_keywords?.length ? missing_keywords.join(", ") : "None"}</span>

        <span className="font-bold text-white">Improvements:</span>
        <div className="text-gray-400">
          {improvements?.length ? (
            <ul className="list-disc pl-5">
              {improvements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No suggestions available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
