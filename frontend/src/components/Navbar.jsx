import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const hiringLinks = [
    { path: '/hiring-dashboard', label: 'Dashboard' },
    { path: '/bulk-analysis', label: 'Bulk Analysis' },
    { path: '/candidate-comparison', label: 'Compare' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="theme-bg border-b theme-border sticky top-0 z-50 backdrop-blur-md bg-opacity-95 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
            <motion.div 
              className="animate-float"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 text-cyan-400" />
            </motion.div>
            <span className="font-orbitron font-bold text-lg sm:text-xl text-white">
              ResumeAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 hover-lift ${
                    isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'theme-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-500/20'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            {/* Hiring Manager Dropdown */}
            <div className="relative group">
              <motion.button 
                className="px-4 py-2 rounded-lg font-inter font-medium transition-all duration-300 theme-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-500/20 flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                For Hiring
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              <div className="absolute top-full left-0 mt-2 w-48 glass-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {hiringLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-4 py-3 theme-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-500/20 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-3 rounded-lg transition-all duration-300 theme-bg-secondary theme-text hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/analyze"
                className="btn-primary text-white px-6 py-3 rounded-lg font-inter font-semibold transition-smooth hover-lift"
              >
                <span className="font-jetbrains">Try Now</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-300 theme-bg-secondary theme-text min-w-[40px] h-10"
            >
              {isDark ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="theme-text-secondary hover:theme-text p-2 transition-all duration-300 min-w-[40px] h-10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 theme-bg-secondary rounded-lg mt-2 glass-dark backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 mobile-center ${
                    isActive(link.path)
                      ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500'
                      : 'theme-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-cyan-500/20'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Hiring Links */}
              <div className="border-t theme-border pt-3 mt-3">
                <div className="px-4 py-2 theme-text-muted text-sm font-semibold">For Hiring Managers</div>
                {hiringLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-lg font-inter font-medium transition-all duration-300 mobile-center theme-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-500/20"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/analyze"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary text-white px-4 py-3 rounded-lg font-inter font-semibold mt-4 mobile-full"
              >
                <span className="font-jetbrains">Try Now</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;