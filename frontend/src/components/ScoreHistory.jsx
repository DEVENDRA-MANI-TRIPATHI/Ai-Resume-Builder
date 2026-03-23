import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, ChevronDown, Trash2 } from 'lucide-react';

const ScoreHistory = ({ history, onClear }) => {
  const [open, setOpen] = useState(false);

  if (history.length === 0) return null;

  const color = (score) =>
    score >= 80 ? 'text-green-400 bg-green-500/10 border-green-500/20'
    : score >= 60 ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
    : 'text-red-400 bg-red-500/10 border-red-500/20';

  return (
    <div className="glass rounded-2xl border theme-border overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 font-inter font-semibold theme-text hover:theme-bg-secondary transition-all"
      >
        <span className="flex items-center gap-2 text-sm">
          <History className="w-4 h-4 text-cyan-400" />
          Past Analyses
          <span className="px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold">{history.length}</span>
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 theme-text-muted" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 space-y-2 border-t theme-border pt-3">
              {history.map((entry) => (
                <div key={entry.id} className="flex items-center gap-3 p-3 theme-bg-secondary rounded-xl">
                  <span className={`font-orbitron font-bold text-sm px-2.5 py-1 rounded-lg border ${color(entry.score)}`}>
                    {entry.score}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs theme-text truncate">{entry.jobSnippet}</p>
                    <p className="font-inter text-xs theme-text-muted">{entry.date}</p>
                  </div>
                </div>
              ))}
              <button
                onClick={onClear}
                className="flex items-center gap-1.5 font-inter text-xs text-red-400/70 hover:text-red-400 transition-colors mt-1"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear history
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScoreHistory;
