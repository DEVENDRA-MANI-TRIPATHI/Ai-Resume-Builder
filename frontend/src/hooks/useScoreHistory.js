import { useState } from 'react';

const STORAGE_KEY = 'resumeai_history';
const MAX_ENTRIES = 10;

const useScoreHistory = () => {
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  const addEntry = (result, jobDescription) => {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      score: parseInt(result?.score?.ats_score) || 0,
      jobSnippet: jobDescription?.slice(0, 60) + '...',
    };
    const updated = [entry, ...history].slice(0, MAX_ENTRIES);
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, addEntry, clearHistory };
};

export default useScoreHistory;
