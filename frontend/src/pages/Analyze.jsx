import React from "react";
import InputForm from "../components/InputForm";
import AnalysisResult from "../components/AnalysisResult";
import { useTheme } from '../contexts/ThemeContext';

const Analyze = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-12 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text animate-hologram">
            AI Resume Analyzer
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1`}>
            Upload your resume and provide a job description to receive an in-depth AI-powered analysis.
            Get tailored insights to optimize your resume and improve your chances of landing your desired job.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center animate-fade-in-up stagger-2">
          <InputForm />
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm mt-6 max-w-2xl text-center animate-fade-in-up stagger-3`}>
            Our AI analyzes key skills, qualifications, and job fit, helping you create a stronger, 
            more competitive resume that stands out to recruiters and passes ATS systems.
          </p>
          <AnalysisResult />
        </div>
      </div>
    </div>
  );
};

export default Analyze;
