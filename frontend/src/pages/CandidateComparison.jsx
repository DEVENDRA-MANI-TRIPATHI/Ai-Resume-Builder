import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, Star, Award, Briefcase,
  GraduationCap, MapPin, Mail,
  Phone, Calendar, TrendingUp,
  CheckCircle, XCircle, Info
} from 'lucide-react';

const CandidateComparison = () => {
  const [selectedCandidates, setSelectedCandidates] = useState([1, 2, 3]);

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Software Engineer",
      score: 94,
      experience: "5+ years",
      location: "San Francisco, CA",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      skills: ["React", "Node.js", "Python", "AWS", "Docker"],
      education: "MS Computer Science - Stanford",
      previousRole: "Software Engineer at Google",
      salary: "$120,000",
      availability: "2 weeks notice",
      strengths: ["Strong technical skills", "Leadership experience", "Open source contributor"],
      weaknesses: ["Limited mobile development", "No DevOps experience"],
      rating: 4.8
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Full Stack Developer",
      score: 89,
      experience: "4+ years",
      location: "New York, NY",
      email: "m.chen@email.com",
      phone: "+1 (555) 987-6543",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "GraphQL"],
      education: "BS Computer Science - MIT",
      previousRole: "Developer at Microsoft",
      salary: "$110,000",
      availability: "Immediate",
      strengths: ["Full-stack expertise", "Quick learner", "Team player"],
      weaknesses: ["Limited cloud experience", "No machine learning background"],
      rating: 4.5
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "Frontend Developer",
      score: 87,
      experience: "3+ years",
      location: "Austin, TX",
      email: "emily.d@email.com",
      phone: "+1 (555) 456-7890",
      skills: ["React", "TypeScript", "CSS", "Figma", "Jest"],
      education: "BS Design - RISD",
      previousRole: "UI Developer at Adobe",
      salary: "$95,000",
      availability: "1 month notice",
      strengths: ["Excellent UI/UX skills", "Design background", "Attention to detail"],
      weaknesses: ["Limited backend knowledge", "No database experience"],
      rating: 4.3
    }
  ];

  const comparisonData = selectedCandidates.map(id => 
    candidates.find(candidate => candidate.id === id)
  ).filter(Boolean);

  return (
    <motion.div 
      className="min-h-screen theme-bg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Demo Banner */}
        <div className="flex items-center gap-3 px-5 py-3 mb-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <Info className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          <p className="font-inter text-sm text-yellow-300 flex-1">
            This is a <span className="font-semibold">demo preview</span>. Real AI processing coming soon.
          </p>
          <Link to="/analyze" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap">
            Try Resume Analyzer →
          </Link>
        </div>

        <motion.div 
          className="mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="font-orbitron font-bold text-3xl theme-text mb-2">
            Candidate Comparison
          </h1>
          <p className="theme-text-secondary">
            Compare candidates side by side to make informed hiring decisions
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="glass rounded-xl overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="theme-bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left theme-text font-semibold w-48">Criteria</th>
                  {comparisonData.map((candidate, index) => (
                    <th key={candidate.id} className="px-6 py-4 text-center theme-text font-semibold min-w-64">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-3">
                            <Users className="w-8 h-8 text-white" />
                          </div>
                          <div className="font-semibold">{candidate.name}</div>
                          <div className="text-sm theme-text-secondary">{candidate.position}</div>
                        </div>
                      </motion.div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* AI Score */}
                <motion.tr 
                  className="border-b theme-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    AI Match Score
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold theme-text mb-2">{candidate.score}%</div>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                            style={{ width: `${candidate.score}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  ))}
                </motion.tr>

                {/* Experience */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-green-400" />
                    Experience
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center theme-text">
                      <div>{candidate.experience}</div>
                      <div className="text-sm theme-text-secondary mt-1">{candidate.previousRole}</div>
                    </td>
                  ))}
                </motion.tr>

                {/* Education */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    Education
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center theme-text">
                      {candidate.education}
                    </td>
                  ))}
                </motion.tr>

                {/* Skills */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Key Skills
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {candidate.skills.slice(0, 3).map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-400/10 text-gray-400 rounded-full text-xs">
                            +{candidate.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </motion.tr>

                {/* Location */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-400" />
                    Location
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center theme-text">
                      {candidate.location}
                    </td>
                  ))}
                </motion.tr>

                {/* Salary */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Expected Salary
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center theme-text font-semibold">
                      {candidate.salary}
                    </td>
                  ))}
                </motion.tr>

                {/* Availability */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    Availability
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center theme-text">
                      {candidate.availability}
                    </td>
                  ))}
                </motion.tr>

                {/* Rating */}
                <motion.tr 
                  className="border-b theme-border hover:theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    Overall Rating
                  </td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(candidate.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                        <span className="ml-2 theme-text font-semibold">{candidate.rating}</span>
                      </div>
                    </td>
                  ))}
                </motion.tr>

                {/* Actions */}
                <motion.tr 
                  className="theme-bg-secondary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <td className="px-6 py-4 font-semibold theme-text">Actions</td>
                  {comparisonData.map((candidate) => (
                    <td key={candidate.id} className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <motion.button 
                          className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <XCircle className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Detailed Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {comparisonData.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              className="glass p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="font-semibold text-lg theme-text mb-4">{candidate.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium theme-text mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {candidate.strengths.map((strength, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm theme-text-secondary">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium theme-text mb-2">Areas for Growth</h4>
                  <ul className="space-y-1">
                    {candidate.weaknesses.map((weakness, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm theme-text-secondary">
                        <XCircle className="w-3 h-3 text-yellow-400" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CandidateComparison;