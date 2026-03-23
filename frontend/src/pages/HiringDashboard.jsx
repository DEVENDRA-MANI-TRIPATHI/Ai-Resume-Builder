import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Search,
  Filter,
  Download,
  Eye,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Upload
} from 'lucide-react';

const HiringDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const stats = [
    { icon: <FileText className="w-6 h-6" />, label: "Total Resumes", value: "1,247", change: "+12%" },
    { icon: <Users className="w-6 h-6" />, label: "Active Candidates", value: "89", change: "+5%" },
    { icon: <CheckCircle className="w-6 h-6" />, label: "Shortlisted", value: "23", change: "+18%" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "Match Rate", value: "87%", change: "+3%" }
  ];

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Software Engineer",
      score: 94,
      experience: "5+ years",
      skills: ["React", "Node.js", "Python"],
      status: "shortlisted",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Data Scientist",
      score: 89,
      experience: "3+ years",
      skills: ["Python", "ML", "SQL"],
      status: "pending",
      uploadDate: "2024-01-14"
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "UX Designer",
      score: 92,
      experience: "4+ years",
      skills: ["Figma", "UI/UX", "Research"],
      status: "reviewed",
      uploadDate: "2024-01-13"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="min-h-screen theme-bg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="font-orbitron font-bold text-3xl theme-text mb-2">
            Hiring Manager Dashboard
          </h1>
          <p className="theme-text-secondary">
            AI-powered resume analysis and candidate management
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl hover-lift"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-cyan-400">{stat.icon}</div>
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <div className="font-orbitron font-bold text-2xl theme-text mb-1">
                {stat.value}
              </div>
              <div className="theme-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          className="flex space-x-1 mb-8 glass p-2 rounded-lg w-fit"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {[
            { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
            { id: 'candidates', label: 'Candidates', icon: <Users className="w-4 h-4" /> },
            { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="w-4 h-4" /> }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'theme-text-secondary hover:theme-text'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'candidates' && (
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search candidates..."
                    className="w-full pl-10 pr-4 py-3 theme-bg-secondary theme-border border rounded-lg theme-text focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <motion.button 
                  className="btn-secondary px-6 py-3 rounded-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </motion.button>
                <motion.button 
                  className="btn-primary px-6 py-3 rounded-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Upload className="w-4 h-4" />
                  Bulk Upload
                </motion.button>
              </div>

              {/* Candidates Table */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="theme-bg-secondary">
                      <tr>
                        <th className="px-6 py-4 text-left theme-text font-semibold">Candidate</th>
                        <th className="px-6 py-4 text-left theme-text font-semibold">Position</th>
                        <th className="px-6 py-4 text-left theme-text font-semibold">AI Score</th>
                        <th className="px-6 py-4 text-left theme-text font-semibold">Status</th>
                        <th className="px-6 py-4 text-left theme-text font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidates.map((candidate, index) => (
                        <motion.tr
                          key={candidate.id}
                          className="border-b theme-border hover:theme-bg-secondary transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <td className="px-6 py-4">
                            <div>
                              <div className="font-semibold theme-text">{candidate.name}</div>
                              <div className="text-sm theme-text-secondary">{candidate.experience}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 theme-text">{candidate.position}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                                  style={{ width: `${candidate.score}%` }}
                                />
                              </div>
                              <span className="font-semibold theme-text">{candidate.score}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              candidate.status === 'shortlisted' ? 'bg-green-100 text-green-800' :
                              candidate.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {candidate.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <motion.button 
                                className="p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Eye className="w-4 h-4" />
                              </motion.button>
                              <motion.button 
                                className="p-2 text-green-400 hover:bg-green-400/10 rounded-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <CheckCircle className="w-4 h-4" />
                              </motion.button>
                              <motion.button 
                                className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <XCircle className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-xl theme-text mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: "New resume uploaded", candidate: "John Doe", time: "2 hours ago" },
                    { action: "Candidate shortlisted", candidate: "Sarah Johnson", time: "4 hours ago" },
                    { action: "Interview scheduled", candidate: "Michael Chen", time: "1 day ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 theme-bg-secondary rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="theme-text font-medium">{activity.action}</div>
                        <div className="theme-text-secondary text-sm">{activity.candidate} • {activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-xl theme-text mb-4">Top Skills in Demand</h3>
                <div className="space-y-3">
                  {[
                    { skill: "React.js", count: 45, percentage: 85 },
                    { skill: "Python", count: 38, percentage: 72 },
                    { skill: "Node.js", count: 32, percentage: 60 },
                    { skill: "AWS", count: 28, percentage: 53 }
                  ].map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="theme-text font-medium">{skill.skill}</span>
                        <span className="theme-text-secondary text-sm">{skill.count} candidates</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div 
                className="glass p-6 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-xl theme-text mb-4">Hiring Funnel</h3>
                <div className="space-y-4">
                  {[
                    { stage: "Applications", count: 1247, percentage: 100 },
                    { stage: "Screened", count: 456, percentage: 37 },
                    { stage: "Interviewed", count: 89, percentage: 7 },
                    { stage: "Hired", count: 23, percentage: 2 }
                  ].map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="theme-text">{stage.stage}</span>
                        <span className="theme-text font-semibold">{stage.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div 
                          className="bg-gradient-to-r from-green-400 to-cyan-400 h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${stage.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="glass p-6 rounded-xl lg:col-span-2"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-xl theme-text mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { metric: "Time to Hire", value: "14 days", trend: "down" },
                    { metric: "Cost per Hire", value: "$2,450", trend: "down" },
                    { metric: "Quality Score", value: "8.7/10", trend: "up" },
                    { metric: "Retention Rate", value: "94%", trend: "up" }
                  ].map((metric, index) => (
                    <div key={index} className="text-center p-4 theme-bg-secondary rounded-lg">
                      <div className="theme-text-secondary text-sm mb-1">{metric.metric}</div>
                      <div className="font-orbitron font-bold text-2xl theme-text mb-2">{metric.value}</div>
                      <div className={`text-xs ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {metric.trend === 'up' ? '↗' : '↘'} vs last month
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HiringDashboard;