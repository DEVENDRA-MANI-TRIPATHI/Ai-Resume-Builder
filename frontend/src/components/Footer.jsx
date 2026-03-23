import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="theme-bg border-t theme-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="col-span-1 md:col-span-2" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="animate-float">
                <Bot className="text-primary-cyan w-8 h-8 animate-subtle-glow" />
              </div>
              <span className={`font-orbitron font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>ResumeAI</span>
            </div>
            <p className="theme-text-muted mb-4 max-w-md leading-relaxed">
              AI-powered resume analysis and optimization tool. Get personalized insights 
              and improve your chances of landing your dream job.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Github, href: '#' },
                { icon: Mail, href: 'mailto:contact@resumeai.com' }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="theme-text-muted hover:text-primary-cyan transition-all duration-300 hover-lift"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="theme-text font-semibold mb-4 font-inter">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/features', label: 'Features' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/about', label: 'About' },
                { to: '/analyze', label: 'Try Now' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="theme-text-muted hover:theme-text transition-all duration-300 hover-lift font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className="theme-text font-semibold mb-4 font-inter">Support</h3>
            <ul className="space-y-2">
              {[
                { to: '/faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
                { to: '/privacy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="theme-text-muted hover:theme-text transition-all duration-300 hover-lift font-inter"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t theme-border mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="theme-text-muted text-sm font-inter">
            © 2024 ResumeAI. All rights reserved. Built with ❤️ for job seekers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;