import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFileAlt, 
  FaChartLine, 
  FaClock, 
  FaDownload,
  FaPlus,
  FaStar,
  FaEye
} from 'react-icons/fa';

const Dashboard = () => {
  // Mock data for demonstration
  const recentAnalyses = [
    {
      id: 1,
      fileName: "John_Doe_Resume.pdf",
      jobTitle: "Senior Software Engineer",
      score: 87,
      date: "2024-12-15",
      status: "completed"
    },
    {
      id: 2,
      fileName: "John_Doe_Resume_v2.pdf",
      jobTitle: "Product Manager",
      score: 92,
      date: "2024-12-14",
      status: "completed"
    },
    {
      id: 3,
      fileName: "John_Doe_Resume.pdf",
      jobTitle: "Data Scientist",
      score: 78,
      date: "2024-12-13",
      status: "completed"
    }
  ];

  const stats = [
    {
      icon: <FaFileAlt className="text-blue-400 text-2xl" />,
      label: "Total Analyses",
      value: "12",
      change: "+3 this week"
    },
    {
      icon: <FaChartLine className="text-green-400 text-2xl" />,
      label: "Average Score",
      value: "85%",
      change: "+5% improvement"
    },
    {
      icon: <FaClock className="text-purple-400 text-2xl" />,
      label: "Time Saved",
      value: "8.5 hrs",
      change: "vs manual review"
    },
    {
      icon: <FaStar className="text-yellow-400 text-2xl" />,
      label: "Success Rate",
      value: "94%",
      change: "interview rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400">Welcome back! Here's your resume optimization overview.</p>
          </div>
          <Link
            to="/analyze"
            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <FaPlus />
            New Analysis
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div>{stat.icon}</div>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
              <p className="text-green-400 text-xs">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Recent Analyses */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold">Recent Analyses</h2>
            <p className="text-gray-400 mt-1">Your latest resume optimization results</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="text-left p-4 font-semibold">Resume</th>
                  <th className="text-left p-4 font-semibold">Job Title</th>
                  <th className="text-center p-4 font-semibold">Score</th>
                  <th className="text-center p-4 font-semibold">Date</th>
                  <th className="text-center p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentAnalyses.map((analysis, index) => (
                  <tr key={analysis.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <FaFileAlt className="text-blue-400" />
                        <span className="font-medium">{analysis.fileName}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-300">{analysis.jobTitle}</td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        analysis.score >= 90 ? 'bg-green-900 text-green-300' :
                        analysis.score >= 80 ? 'bg-yellow-900 text-yellow-300' :
                        'bg-red-900 text-red-300'
                      }`}>
                        {analysis.score}%
                      </span>
                    </td>
                    <td className="p-4 text-center text-gray-400">
                      {new Date(analysis.date).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
                          <FaEye />
                        </button>
                        <button className="p-2 text-green-400 hover:text-green-300 transition-colors">
                          <FaDownload />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Quick Tips</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Use action verbs to start your bullet points</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Quantify your achievements with numbers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Tailor your resume for each job application</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Keep your resume to 1-2 pages maximum</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4">Upgrade Benefits</h3>
            <p className="text-gray-300 mb-4">
              Unlock unlimited analyses and advanced features with our Pro plan.
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Unlimited resume analyses</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Cover letter generation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            <Link
              to="/pricing"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
            >
              Upgrade Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;