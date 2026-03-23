import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';

const ImprovementChecklist = ({ improvements }) => {
  const [checked, setChecked] = useState([]);

  if (!improvements?.length) return null;

  const toggle = (i) =>
    setChecked((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);

  const progress = Math.round((checked.length / improvements.length) * 100);

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 theme-bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="font-inter text-xs theme-text-muted whitespace-nowrap">
          {checked.length}/{improvements.length} done
        </span>
      </div>

      {/* Checklist items */}
      <div className="space-y-2">
        {improvements.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => toggle(i)}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
              checked.includes(i)
                ? 'bg-cyan-500/5 border-cyan-500/20 opacity-60'
                : 'bg-cyan-500/5 border-cyan-500/15 hover:border-cyan-500/30'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
              checked.includes(i) ? 'bg-cyan-500 border-cyan-500' : 'border-cyan-500/40'
            }`}>
              {checked.includes(i) && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`font-inter text-sm theme-text-secondary ${checked.includes(i) ? 'line-through' : ''}`}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Print button */}
      <button
        onClick={() => window.print()}
        className="flex items-center gap-2 font-inter text-xs theme-text-muted hover:text-cyan-400 transition-colors"
      >
        <Printer className="w-3.5 h-3.5" /> Print checklist
      </button>
    </div>
  );
};

export default ImprovementChecklist;
