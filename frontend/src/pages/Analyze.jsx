import React from "react";
import InputForm from "../components/InputForm";
import AnalysisResult from "../components/AnalysisResult";

const Analyze = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-center p-6">
      <h1 className="text-gray-400 text-3xl font-semibold">AI-Powered Resume Analyzer</h1>
      <p className="text-gray-500 text-lg mt-2 max-w-2xl mx-auto">
        Upload your resume and provide a job description to receive an in-depth AI-powered analysis.
        Get tailored insights to optimize your resume and improve your chances of landing your desired job.
      </p>

      <div className="flex flex-col justify-center items-center mt-6">
        <InputForm />
        <p className="text-gray-500 text-sm mt-3 max-w-lg">
          Our AI analyzes key skills, qualifications, and job fit, helping you create a stronger, more competitive resume.
        </p>
        <AnalysisResult />
      </div>
    </div>
  );
};

export default Analyze;
