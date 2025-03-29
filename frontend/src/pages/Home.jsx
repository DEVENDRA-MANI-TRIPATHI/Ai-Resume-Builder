import { Link } from "react-router-dom";
import { FaUpload, FaSearch, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold text-blue-400 mb-4 animate-fade-in">
        AI-Powered Resume Analyzer
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-6 animate-slide-up">
        Optimize your resume for your dream job. Get AI-driven insights on how well your resume matches job descriptions.
      </p>

      {/* How It Works Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mt-6">
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaUpload className="text-blue-400 text-5xl mb-3" />
          <h3 className="text-xl font-semibold">Upload Resume</h3>
          <p className="text-gray-400 text-sm text-center mt-2">
            Upload your resume in PDF format and let our AI analyze it.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaSearch className="text-green-400 text-5xl mb-3" />
          <h3 className="text-xl font-semibold">Compare with Job</h3>
          <p className="text-gray-400 text-sm text-center mt-2">
            Enter the job description and see how well your resume matches.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaCheckCircle className="text-yellow-400 text-5xl mb-3" />
          <h3 className="text-xl font-semibold">Get Insights</h3>
          <p className="text-gray-400 text-sm text-center mt-2">
            Receive AI-powered suggestions to improve your resume.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <Link
        to="/analyze"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
      >
        Try Now
      </Link>
    </div>
  );
};

export default Home;
