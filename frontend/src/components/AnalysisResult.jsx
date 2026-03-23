import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, Tag, Lightbulb, Shield, Sparkles } from 'lucide-react';
import ImprovementChecklist from './ImprovementChecklist';

/* ─── Animated Score Ring ────────────────────────────────── */
const ScoreRing = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(0);
  const r = 52;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444';
  const bg = score >= 80 ? 'from-green-500/10 to-emerald-500/5'
           : score >= 60 ? 'from-yellow-500/10 to-amber-500/5'
           : 'from-red-500/10 to-rose-500/5';

  useEffect(() => {
    const duration = 1500;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(eased * score));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [score]);

  return (
    <div className={`relative w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-br ${bg}`}>
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
        <motion.circle
          cx="60" cy="60" r={r}
          fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
        />
      </svg>
      <div className="text-center z-10">
        <motion.div
          className="font-orbitron font-bold text-4xl leading-none"
          style={{ color }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          {displayScore}
        </motion.div>
        <div className="font-inter text-xs theme-text-muted mt-1">/ 100</div>
      </div>
    </div>
  );
};

/* ─── Tab Button ─────────────────────────────────────────── */
const Tab = ({ active, onClick, icon, label, count }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-inter font-medium text-sm transition-all duration-300 ${
      active
        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
        : 'theme-text-secondary hover:theme-text hover:theme-bg-secondary'
    }`}
  >
    {icon}
    {label}
    {count > 0 && (
      <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active ? 'bg-white/20' : 'bg-cyan-400/10 text-cyan-400'}`}>
        {count}
      </span>
    )}
  </button>
);

/* ─── Main Component ─────────────────────────────────────── */
const AnalysisResult = ({ result }) => {
  const [activeTab, setActiveTab] = useState('strengths');
  const confettiFired = React.useRef(false);

  const score = parseInt(result?.score?.ats_score) || 0;
  const strengths = result?.score?.strengths || [];
  const weaknesses = result?.score?.weaknesses || [];
  const missing_keywords = result?.score?.missing_keywords || [];
  const improvements = result?.score?.improvements || [];

  useEffect(() => {
    if (score >= 80 && !confettiFired.current) {
      confettiFired.current = true;
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  }, [score]);

  if (!result?.score) return null;

  const scoreLabel = score >= 80 ? 'Excellent Match' : score >= 60 ? 'Good Match' : 'Needs Work';
  const scoreColor = score >= 80 ? 'text-green-400' : score >= 60 ? 'text-yellow-400' : 'text-red-400';
  const scoreBadge = score >= 80 ? 'bg-green-500/10 border-green-500/20 text-green-400'
                   : score >= 60 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                   : 'bg-red-500/10 border-red-500/20 text-red-400';

  const tabs = [
    { id: 'strengths',  label: 'Strengths',    icon: <CheckCircle2 className="w-4 h-4" />, count: strengths.length },
    { id: 'weaknesses', label: 'Weaknesses',   icon: <XCircle className="w-4 h-4" />,      count: weaknesses.length },
    { id: 'keywords',   label: 'Keywords',     icon: <Tag className="w-4 h-4" />,           count: missing_keywords.length },
    { id: 'improve',    label: 'Improvements', icon: <Lightbulb className="w-4 h-4" />,    count: improvements.length },
  ];

  return (
    <div className="space-y-6">

      {/* ── Score Card ── */}
      <motion.div
        className="glass rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="flex-shrink-0">
            <ScoreRing score={score} />
          </div>

          <div className="text-center lg:text-left flex-shrink-0">
            <p className="font-inter text-sm theme-text-muted mb-1">ATS Compatibility Score</p>
            <h2 className={`font-orbitron font-bold text-3xl mb-3 ${scoreColor}`}>{scoreLabel}</h2>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${scoreBadge}`}>
              {score >= 80 ? '✓ Ready to apply' : score >= 60 ? '⚡ Minor improvements needed' : '✗ Significant gaps found'}
            </span>
            <p className="font-inter text-sm theme-text-secondary mt-3 max-w-xs">
              {score >= 80
                ? 'Your resume is well-optimized and aligns strongly with the job requirements.'
                : score >= 60
                ? 'Your resume is decent but addressing the gaps below will improve your chances.'
                : 'Your resume needs significant work to pass ATS filters for this role.'}
            </p>
          </div>

          {/* Category summary pills */}
          <div className="flex-1 w-full">
            <p className="font-inter text-xs theme-text-muted mb-4 uppercase tracking-widest">Analysis Summary</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Strengths',        count: strengths.length,        color: 'bg-green-500/10 border-green-500/20 text-green-400' },
                { label: 'Weaknesses',       count: weaknesses.length,       color: 'bg-red-500/10 border-red-500/20 text-red-400' },
                { label: 'Missing Keywords', count: missing_keywords.length, color: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' },
                { label: 'Improvements',     count: improvements.length,     color: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' },
              ].map((pill, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border ${pill.color}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className="font-inter text-xs font-medium opacity-80">{pill.label}</span>
                  <span className="font-orbitron font-bold text-lg">{pill.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Tabbed Details ── */}
      <motion.div
        className="glass rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        <div className="flex gap-1 p-3 border-b theme-border overflow-x-auto">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              icon={tab.icon}
              label={tab.label}
              count={tab.count}
            />
          ))}
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">

            {activeTab === 'strengths' && (
              <motion.div key="strengths"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                className="space-y-3"
              >
                {strengths.length ? strengths.map((s, i) => (
                  <motion.div key={i} className="flex items-start gap-3 p-4 bg-green-500/5 border border-green-500/15 rounded-xl"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="font-inter text-sm theme-text-secondary">{s}</p>
                  </motion.div>
                )) : (
                  <motion.div className="flex flex-col items-center gap-3 py-10 text-green-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <CheckCircle2 className="w-10 h-10 opacity-60" />
                    <p className="font-inter text-sm font-medium">Your resume covers all key areas</p>
                    <p className="font-inter text-xs theme-text-muted">No gaps detected in this category</p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeTab === 'weaknesses' && (
              <motion.div key="weaknesses"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                className="space-y-3"
              >
                {weaknesses.length ? weaknesses.map((w, i) => (
                  <motion.div key={i} className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/15 rounded-xl"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  >
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="font-inter text-sm theme-text-secondary">{w}</p>
                  </motion.div>
                )) : (
                  <motion.div className="flex flex-col items-center gap-3 py-10 text-green-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Shield className="w-10 h-10 opacity-60" />
                    <p className="font-inter text-sm font-medium">No major gaps detected</p>
                    <p className="font-inter text-xs theme-text-muted">Your resume looks solid for this role</p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeTab === 'keywords' && (
              <motion.div key="keywords"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
              >
                {missing_keywords.length ? (
                  <>
                    <p className="font-inter text-sm theme-text-muted mb-4">
                      Add these keywords from the job description to your resume:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {missing_keywords.map((kw, i) => (
                        <motion.span key={i}
                          className="px-3 py-1.5 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full font-jetbrains text-xs font-medium"
                          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                        >
                          {kw}
                        </motion.span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-green-400 py-6 justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="font-inter text-sm font-medium">No missing keywords — great coverage!</p>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'improve' && (
              <motion.div key="improve"
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
              >
                {improvements.length ? (
                  <ImprovementChecklist improvements={improvements} />
                ) : (
                  <motion.div className="flex flex-col items-center gap-3 py-10 text-cyan-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Sparkles className="w-10 h-10 opacity-60" />
                    <p className="font-inter text-sm font-medium">You're good to go!</p>
                    <p className="font-inter text-xs theme-text-muted">No additional improvements suggested</p>
                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalysisResult;
