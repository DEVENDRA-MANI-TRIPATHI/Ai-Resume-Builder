import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nProvider } from "./contexts/I18nContext";
import './styles/animations.css';

// Lazy load all pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Analyze = lazy(() => import("./pages/Analyze"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

// Hiring Manager Pages
const HiringDashboard = lazy(() => import("./pages/HiringDashboard"));
const BulkAnalysis = lazy(() => import("./pages/BulkAnalysis"));
const CandidateComparison = lazy(() => import("./pages/CandidateComparison"));

function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen flex flex-col transition-all duration-300 scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
              <motion.div 
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 60% 30%, rgba(245, 158, 11, 0.05) 0%, transparent 60%)",
                    "radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.05) 0%, transparent 60%)",
                    "radial-gradient(circle at 70% 60%, rgba(0, 212, 255, 0.05) 0%, transparent 60%)",
                    "radial-gradient(circle at 60% 30%, rgba(245, 158, 11, 0.05) 0%, transparent 60%)"
                  ]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            
            <ScrollToTop />
            <Navbar />
            
            <main className="flex-grow relative z-10">
              <Suspense fallback={
                <motion.div 
                  className="flex items-center justify-center min-h-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div 
                    className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.span 
                    className="ml-3 text-cyan-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Loading...
                  </motion.span>
                </motion.div>
              }>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analyze" element={<Analyze />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    
                    {/* Hiring Manager Routes */}
                    <Route path="/hiring-dashboard" element={<HiringDashboard />} />
                    <Route path="/bulk-analysis" element={<BulkAnalysis />} />
                    <Route path="/candidate-comparison" element={<CandidateComparison />} />
                    <Route path="*" element={
                      <motion.div 
                        className="flex items-center justify-center min-h-screen text-center px-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div>
                          <motion.h1 
                            className="text-6xl font-bold mb-4 text-cyan-400"
                            animate={{ 
                              textShadow: [
                                "0 0 10px rgba(0, 212, 255, 0.5)",
                                "0 0 20px rgba(0, 212, 255, 0.8)",
                                "0 0 10px rgba(0, 212, 255, 0.5)"
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            404
                          </motion.h1>
                          <h2 className="text-2xl font-semibold mb-4 theme-text">Page Not Found</h2>
                          <p className="theme-text-secondary mb-8 max-w-md mx-auto">
                            The page you're looking for doesn't exist or has been moved.
                          </p>
                          <motion.a 
                            href="/" 
                            className="btn-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Go Home
                          </motion.a>
                        </div>
                      </motion.div>
                    } />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
      </ThemeProvider>
    </I18nProvider>
  );
}

export default App;