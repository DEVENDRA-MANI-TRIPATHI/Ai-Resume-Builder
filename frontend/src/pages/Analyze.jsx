import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import pdfWorker from 'pdfjs-dist/legacy/build/pdf.worker?url';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload, FileText, Search, Loader2, AlertCircle,
  CheckCircle2, X, Wifi, WifiOff, ArrowLeft,
  Sparkles, ClipboardList, ChevronRight, Copy, RotateCcw
} from 'lucide-react';
import AnalysisResult from '../components/AnalysisResult';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

/* ─── Toast ─────────────────────────────────────────────── */
const Toast = ({ toast, onClose }) => (
  <AnimatePresence>
    {toast && (
      <motion.div
        className={`fixed top-20 right-4 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl font-inter text-sm font-medium max-w-sm ${
          toast.type === 'success' ? 'bg-green-500 text-white' :
          toast.type === 'error'   ? 'bg-red-500 text-white' :
                                     'bg-yellow-500 text-gray-900'
        }`}
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 120 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {toast.type === 'success'
          ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
        <span className="flex-1">{toast.msg}</span>
        <button onClick={onClose} className="ml-2 hover:opacity-70"><X className="w-4 h-4" /></button>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─── Step Indicator ─────────────────────────────────────── */
const StepIndicator = ({ step }) => (
  <div className="flex items-center justify-center gap-3 mb-10">
    {[
      { n: 1, label: 'Upload & Describe' },
      { n: 2, label: 'AI Results' },
    ].map(({ n, label }, i) => (
      <React.Fragment key={n}>
        <div className="flex items-center gap-2">
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-orbitron transition-all duration-500 ${
              step >= n
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                : 'theme-bg-secondary theme-text-muted border theme-border'
            }`}
            animate={{ scale: step === n ? 1.15 : 1 }}
          >
            {step > n ? <CheckCircle2 className="w-4 h-4" /> : n}
          </motion.div>
          <span className={`font-inter text-sm font-medium hidden sm:block ${step >= n ? 'theme-text' : 'theme-text-muted'}`}>
            {label}
          </span>
        </div>
        {i === 0 && (
          <div className="flex-1 max-w-16 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ─── Main Page ──────────────────────────────────────────── */
/* ─── Loading Skeleton ──────────────────────────────────── */
const AnalysisSkeleton = () => {
  const messages = ['Reading your resume...', 'Matching keywords...', 'Calculating ATS score...', 'Generating insights...'];
  const [msgIndex, setMsgIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setMsgIndex(i => (i + 1) % messages.length), 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <motion.div className="space-y-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Status message */}
      <div className="flex items-center justify-center gap-3 py-2">
        <motion.div className="w-2 h-2 bg-cyan-400 rounded-full" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
        <AnimatePresence mode="wait">
          <motion.span key={msgIndex} className="font-inter text-sm text-cyan-400"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {messages[msgIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Score ring placeholder */}
      <div className="glass rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-full bg-white/5 animate-pulse flex-shrink-0" />
          <div className="flex-1 w-full space-y-3">
            <div className="h-4 bg-white/5 rounded-full animate-pulse w-1/3" />
            <div className="h-8 bg-white/5 rounded-full animate-pulse w-1/2" />
            <div className="h-4 bg-white/5 rounded-full animate-pulse w-2/3" />
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[...Array(4)].map((_, i) => <div key={i} className="h-14 bg-white/5 rounded-xl animate-pulse" />)}
            </div>
          </div>
        </div>
      </div>
      {/* Tab bar placeholder */}
      <div className="glass rounded-2xl p-4">
        <div className="flex gap-2 mb-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-9 w-28 bg-white/5 rounded-lg animate-pulse" />)}
        </div>
        <div className="space-y-3 p-2">
          {[...Array(3)].map((_, i) => <div key={i} className="h-14 bg-white/5 rounded-xl animate-pulse" />)}
        </div>
      </div>
    </motion.div>
  );
};

const Analyze = () => {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState('');
  const [pdfText, setPdfText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [coverLetterResult, setCoverLetterResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coverLoading, setCoverLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [serverOnline, setServerOnline] = useState(null);
  const [activeResult, setActiveResult] = useState('analysis'); // 'analysis' | 'cover'

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/v1/resume/health`, { signal: AbortSignal.timeout(4000) })
      .then(r => setServerOnline(r.ok))
      .catch(() => setServerOnline(false));
  }, []);

  const showToast = (msg, type = 'warning') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const extractTextFromPDF = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(reader.result) }).promise;
        let text = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str.trim()).filter(Boolean).join(' ') + '\n\n';
        }
        if (text.trim().length < 50) throw new Error('PDF appears empty');
        resolve(text);
      } catch (e) { reject(e); }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsArrayBuffer(file);
  });

  const handleFile = async (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') { showToast('PDF files only.', 'error'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast('Max file size is 5MB.', 'error'); return; }
    setFileName(file.name);
    setError(null);
    try {
      setPdfText(await extractTextFromPDF(file));
      showToast('Resume uploaded!', 'success');
    } catch {
      setError('Could not extract text from PDF. Try another file.');
      setFileName('');
    }
  };

  const handleAnalyze = async () => {
    if (!pdfText) { showToast('Please upload your resume.', 'error'); return; }
    if (!jobDescription || jobDescription.trim().length < 20) { showToast('Job description too short.', 'error'); return; }
    setLoading(true); setError(null);
    setStep(2); setActiveResult('analysis');
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/resume/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText: pdfText.trim(), jobDescription: jobDescription.trim() }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || `Server error ${res.status}`);
      if (!data.score) throw new Error('Invalid response from server.');
      setAnalysisResult(data);
      showToast('Analysis complete!', 'success');
    } catch (err) {
      const msg = err.message.includes('fetch') ? 'Cannot reach server. Is the backend running?' : err.message;
      setError(msg); showToast(msg, 'error');
    } finally { setLoading(false); }
  };

  const handleCoverLetter = async () => {
    if (!pdfText || !jobDescription) { showToast('Upload resume and add job description first.', 'error'); return; }
    setCoverLoading(true); setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/resume/cover-letter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText: pdfText.trim(), jobDescription: jobDescription.trim() }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || `Server error ${res.status}`);
      if (!data.coverLetter) throw new Error('Invalid response from server.');
      setCoverLetterResult(data);
      setActiveResult('cover');
      if (step === 1) setStep(2);
      showToast('Cover letter ready!', 'success');
    } catch (err) {
      const msg = err.message.includes('fetch') ? 'Cannot reach server. Is the backend running?' : err.message;
      setError(msg); showToast(msg, 'error');
    } finally { setCoverLoading(false); }
  };

  const handleReset = () => {
    setStep(1); setFileName(''); setPdfText(''); setJobDescription('');
    setAnalysisResult(null); setCoverLetterResult(null); setError(null);
  };

  return (
    <motion.div
      className="min-h-screen theme-bg"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div className="absolute w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '5%', left: '0%' }} />
        <motion.div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '5%', right: '0%' }} />
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <motion.div className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 text-cyan-400 text-sm font-medium"
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" /> Powered by Google Gemini AI
          </motion.div>
          <h1 className="font-orbitron font-bold text-4xl sm:text-5xl theme-text mb-3">
            AI Resume <span className="text-gradient">Analyzer</span>
          </h1>
          <p className="font-inter theme-text-secondary text-lg max-w-xl mx-auto">
            Get your ATS score, keyword gaps, and a tailored cover letter in seconds.
          </p>
        </motion.div>

        {/* Server status */}
        <AnimatePresence>
          {serverOnline === false && (
            <motion.div
              className="flex items-center gap-3 p-4 mb-6 bg-red-500/10 border border-red-500/30 rounded-xl"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            >
              <WifiOff className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <p className="font-inter font-semibold text-red-400 text-sm">Backend offline</p>
                <p className="font-inter text-xs text-red-400/70">Run <code className="bg-red-500/20 px-1 rounded">cd backend && npm run dev</code></p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Indicator */}
        <StepIndicator step={step} />

        {/* ── STEP 1: Input ── */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              {/* Job Description */}
              <div className="glass rounded-2xl p-6">
                <label className="flex items-center gap-2 font-inter font-semibold theme-text mb-3">
                  <ClipboardList className="w-5 h-5 text-cyan-400" />
                  Job Description
                </label>
                <textarea
                  className="w-full h-44 p-4 theme-bg-secondary theme-border border rounded-xl theme-text font-inter text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={e => setJobDescription(e.target.value)}
                  maxLength={5000}
                />
                <div className="flex items-center justify-between mt-1">
                  <span className={`font-inter text-xs transition-colors ${jobDescription.length > 0 && jobDescription.length < 20 ? 'text-red-400' : jobDescription.length >= 20 ? 'text-green-400' : 'theme-text-muted'}`}>
                    {jobDescription.length === 0 ? 'Minimum 20 characters required' : jobDescription.length < 20 ? `${20 - jobDescription.length} more characters needed` : '✓ Good to go'}
                  </span>
                  <span className="font-inter text-xs theme-text-muted">{jobDescription.length}/5000</span>
                </div>
              </div>

              {/* File Upload */}
              <div className="glass rounded-2xl p-6">
                <label className="flex items-center gap-2 font-inter font-semibold theme-text mb-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  Upload Resume
                </label>
                <motion.div
                  className={`relative border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all duration-300 ${
                    dragOver ? 'border-cyan-400 bg-cyan-400/5' : 'theme-border hover:border-cyan-400/60'
                  }`}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
                  whileHover={{ scale: 1.01 }}
                >
                  <input type="file" accept="application/pdf"
                    onChange={e => handleFile(e.target.files[0])}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <motion.div animate={{ y: dragOver ? -6 : 0 }}>
                    {fileName ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mb-1">
                          <CheckCircle2 className="w-7 h-7 text-green-400" />
                        </div>
                        <span className="font-inter font-semibold text-green-400">{fileName}</span>
                        <span className="text-xs theme-text-muted">Resume ready for analysis</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 theme-bg-secondary rounded-full flex items-center justify-center mb-1">
                          <Upload className={`w-7 h-7 ${dragOver ? 'text-cyan-400' : 'theme-text-muted'}`} />
                        </div>
                        <p className="font-inter font-medium theme-text">Drop PDF here or click to browse</p>
                        <p className="font-inter text-sm theme-text-muted">PDF only · Max 5MB</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    className="flex items-start gap-3 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-xl"
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-inter font-semibold text-red-400 text-sm">Error</p>
                      <p className="font-inter text-sm text-red-300 mt-0.5">{error}</p>
                    </div>
                    <button onClick={() => setError(null)}><X className="w-4 h-4 text-red-400" /></button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <motion.button
                  onClick={handleAnalyze}
                  disabled={loading || coverLoading}
                  className="relative overflow-hidden btn-primary text-white px-6 py-4 rounded-xl font-inter font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                >
                  {loading
                    ? <><Loader2 className="w-5 h-5 animate-spin" /> Analyzing...</>
                    : <><Search className="w-5 h-5" /> Analyze Resume <ChevronRight className="w-4 h-4" /></>
                  }
                  {!loading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  )}
                </motion.button>

                <motion.button
                  onClick={handleCoverLetter}
                  disabled={loading || coverLoading}
                  className="px-6 py-4 rounded-xl font-inter font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                >
                  {coverLoading
                    ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating...</>
                    : <><FileText className="w-5 h-5" /> Generate Cover Letter</>
                  }
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 2: Results ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Result Tab Bar */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex gap-2 glass p-1.5 rounded-xl">
                  {analysisResult && (
                    <button
                      onClick={() => setActiveResult('analysis')}
                      className={`px-5 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 ${
                        activeResult === 'analysis'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                          : 'theme-text-secondary hover:theme-text'
                      }`}
                    >
                      ATS Analysis
                    </button>
                  )}
                  {coverLetterResult && (
                    <button
                      onClick={() => setActiveResult('cover')}
                      className={`px-5 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-300 ${
                        activeResult === 'cover'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md'
                          : 'theme-text-secondary hover:theme-text'
                      }`}
                    >
                      Cover Letter
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  {/* Generate cover letter from results page */}
                  {!coverLetterResult && (
                    <motion.button
                      onClick={handleCoverLetter}
                      disabled={coverLoading}
                      className="px-4 py-2 rounded-xl font-inter font-medium text-sm border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    >
                      {coverLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                      {coverLoading ? 'Generating...' : 'Get Cover Letter'}
                    </motion.button>
                  )}
                  <motion.button
                    onClick={handleReset}
                    className="px-4 py-2 rounded-xl font-inter font-medium text-sm glass theme-text-secondary hover:theme-text flex items-center gap-2 transition-all"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </motion.button>
                </div>
              </div>

              {/* Analysis Result */}
              <AnimatePresence mode="wait">
                {activeResult === 'analysis' && analysisResult && !loading && (
                  <motion.div key="analysis"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  >
                    <AnalysisResult result={analysisResult} />
                  </motion.div>
                )}
                {activeResult === 'analysis' && loading && (
                  <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AnalysisSkeleton />
                  </motion.div>
                )}

                {/* Cover Letter Result */}
                {activeResult === 'cover' && coverLetterResult && (
                  <motion.div key="cover"
                    className="glass rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-orbitron font-bold text-xl theme-text flex items-center gap-2">
                        <FileText className="w-6 h-6 text-emerald-400" />
                        Cover Letter
                      </h3>
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => {
                            const blob = new Blob([coverLetterResult.coverLetter], { type: 'text/plain' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url; a.download = 'cover-letter.txt'; a.click();
                            URL.revokeObjectURL(url);
                          }}
                          className="px-4 py-2 rounded-lg text-sm font-inter font-medium border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        >
                          <ArrowLeft className="w-4 h-4 rotate-[225deg]" /> Download
                        </motion.button>
                        <motion.button
                          onClick={() => {
                            navigator.clipboard.writeText(coverLetterResult.coverLetter);
                            showToast('Copied to clipboard!', 'success');
                          }}
                          className="btn-primary text-white px-4 py-2 rounded-lg text-sm font-inter font-medium flex items-center gap-2"
                          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        >
                          <Copy className="w-4 h-4" /> Copy
                        </motion.button>
                      </div>
                    </div>
                    <div className="theme-bg-secondary rounded-xl p-6 font-inter text-sm theme-text-secondary leading-relaxed whitespace-pre-wrap border theme-border">
                      {coverLetterResult.coverLetter}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Analyze;
