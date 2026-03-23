import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const ResumePreview = ({ resumeText, missingKeywords = [], strengths = [] }) => {
  const highlighted = useMemo(() => {
    if (!resumeText) return '';

    // Build a map of keyword → type
    const kwMap = {};
    missingKeywords.forEach((kw) => { kwMap[kw.toLowerCase()] = 'missing'; });
    strengths.forEach((s) => {
      // extract short phrases (≤4 words) from strength sentences to highlight
      const words = s.split(' ').slice(0, 3).join(' ');
      if (words.length > 3) kwMap[words.toLowerCase()] = 'matched';
    });

    const allKws = Object.keys(kwMap).sort((a, b) => b.length - a.length);
    if (!allKws.length) return resumeText;

    const regex = new RegExp(`(${allKws.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

    return resumeText.split(regex).map((part, i) => {
      const lower = part.toLowerCase();
      if (kwMap[lower] === 'missing') {
        return <mark key={i} className="bg-red-400/20 text-red-300 rounded px-0.5 not-italic">{part}</mark>;
      }
      if (kwMap[lower] === 'matched') {
        return <mark key={i} className="bg-green-400/20 text-green-300 rounded px-0.5 not-italic">{part}</mark>;
      }
      return part;
    });
  }, [resumeText, missingKeywords, strengths]);

  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden border theme-border"
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b theme-border">
        <span className="flex items-center gap-2 font-inter font-semibold text-sm theme-text">
          <FileText className="w-4 h-4 text-cyan-400" /> Resume Preview
        </span>
        <div className="flex items-center gap-3 font-inter text-xs theme-text-muted">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-green-400/40 inline-block" /> Matched</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-red-400/40 inline-block" /> Missing</span>
        </div>
      </div>
      <div className="p-5 max-h-72 overflow-y-auto font-inter text-xs theme-text-secondary leading-relaxed whitespace-pre-wrap">
        {highlighted}
      </div>
    </motion.div>
  );
};

export default ResumePreview;
