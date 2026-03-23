import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Upload, FileText, Users, Download, Trash2,
  Play, CheckCircle, AlertCircle, BarChart3, Info
} from 'lucide-react';

const BulkAnalysis = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [jobDescription, setJobDescription] = useState('');

  const mockResults = [
    { id: 1, name: 'john_doe_resume.pdf', score: 94, status: 'excellent', skills: ['React', 'Node.js', 'AWS'] },
    { id: 2, name: 'sarah_smith_resume.pdf', score: 87, status: 'good', skills: ['Python', 'Django', 'SQL'] },
    { id: 3, name: 'mike_johnson_resume.pdf', score: 76, status: 'average', skills: ['Java', 'Spring', 'MySQL'] },
    { id: 4, name: 'emily_davis_resume.pdf', score: 91, status: 'excellent', skills: ['React', 'TypeScript', 'GraphQL'] }
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: file.size,
      status: 'uploaded'
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (id) => setUploadedFiles(uploadedFiles.filter(file => file.id !== id));

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => { setIsAnalyzing(false); setUploadedFiles(mockResults); }, 3000);
  };

  return (
    <motion.div 
      className="min-h-screen theme-bg p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
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

        <motion.div className="mb-8" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h1 className="font-orbitron font-bold text-3xl theme-text mb-2">Bulk Resume Analysis</h1>
          <p className="theme-text-secondary">Upload multiple resumes and analyze them against job requirements</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div className="glass p-6 rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <h3 className="font-semibold text-xl theme-text mb-4">Job Description</h3>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here to match candidates against specific requirements..."
                className="w-full h-32 p-4 theme-bg-secondary theme-border border rounded-lg theme-text resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </motion.div>

            <motion.div className="glass p-6 rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
              <h3 className="font-semibold text-xl theme-text mb-4">Upload Resumes</h3>
              <div className="border-2 border-dashed theme-border rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="theme-text mb-2">Drop PDF files here or click to browse</p>
                <p className="theme-text-secondary text-sm mb-4">Support for PDF files up to 10MB each</p>
                <input type="file" multiple accept=".pdf" onChange={handleFileUpload} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="btn-primary px-6 py-3 rounded-lg cursor-pointer inline-block text-white">
                  Select Files
                </label>
              </div>
            </motion.div>

            {uploadedFiles.length > 0 && (
              <motion.div className="glass p-6 rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-xl theme-text">Uploaded Files ({uploadedFiles.length})</h3>
                  {!isAnalyzing && uploadedFiles.some(f => f.status === 'uploaded') && (
                    <motion.button onClick={startAnalysis} className="btn-primary text-white px-6 py-3 rounded-lg flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Play className="w-4 h-4" /> Start Analysis
                    </motion.button>
                  )}
                </div>
                <div className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <motion.div key={file.id} className="flex items-center justify-between p-4 theme-bg-secondary rounded-lg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-cyan-400" />
                        <div>
                          <div className="theme-text font-medium">{file.name}</div>
                          {file.score && (
                            <div className="flex items-center gap-2 mt-1">
                              <div className="w-16 h-2 bg-gray-200 rounded-full">
                                <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" style={{ width: `${file.score}%` }} />
                              </div>
                              <span className="text-sm font-semibold theme-text">{file.score}%</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${file.status === 'excellent' ? 'bg-green-100 text-green-800' : file.status === 'good' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {file.status}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {file.score && (
                          <motion.button className="p-2 text-cyan-400 hover:bg-cyan-400/10 rounded-lg" whileHover={{ scale: 1.1 }}>
                            <BarChart3 className="w-4 h-4" />
                          </motion.button>
                        )}
                        <motion.button onClick={() => removeFile(file.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg" whileHover={{ scale: 1.1 }}>
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {isAnalyzing && (
                  <motion.div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="flex items-center gap-3">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                        <AlertCircle className="w-5 h-5 text-blue-400" />
                      </motion.div>
                      <span className="theme-text font-medium">Analyzing resumes with AI... This may take a few moments.</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <motion.div className="glass p-6 rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
              <h3 className="font-semibold text-xl theme-text mb-4">Analysis Summary</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Resumes', value: uploadedFiles.length, color: 'theme-text' },
                  { label: 'Excellent Match', value: uploadedFiles.filter(f => f.status === 'excellent').length, color: 'text-green-400' },
                  { label: 'Good Match', value: uploadedFiles.filter(f => f.status === 'good').length, color: 'text-blue-400' },
                  { label: 'Average Match', value: uploadedFiles.filter(f => f.status === 'average').length, color: 'text-yellow-400' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="theme-text-secondary">{item.label}</span>
                    <span className={`font-semibold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="glass p-6 rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
              <h3 className="font-semibold text-xl theme-text mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button className="w-full btn-secondary py-3 rounded-lg flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} disabled={uploadedFiles.length === 0}>
                  <Download className="w-4 h-4" /> Export Results
                </motion.button>
                <motion.button className="w-full btn-primary text-white py-3 rounded-lg flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} disabled={uploadedFiles.filter(f => f.score > 85).length === 0}>
                  <Users className="w-4 h-4" /> Shortlist Top Candidates
                </motion.button>
              </div>
            </motion.div>

            {uploadedFiles.some(f => f.skills) && (
              <motion.div className="glass p-6 rounded-xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}>
                <h3 className="font-semibold text-xl theme-text mb-4">Top Skills Found</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'SQL'].map((skill, index) => (
                    <motion.span key={skill} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BulkAnalysis;
