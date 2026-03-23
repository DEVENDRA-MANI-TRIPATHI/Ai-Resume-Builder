import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bot, FileText, BarChart3, Shield, Clock, Users,
  Search, Download, Globe, Lightbulb, Target, CheckCircle2, ArrowRight
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Features = () => {
  const mainFeatures = [
    {
      icon: <Bot className="w-14 h-14 text-cyan-400" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your resume against job requirements, providing detailed insights and recommendations.',
      benefits: ['Deep content analysis', 'Skill gap identification', 'Keyword optimization', 'Industry-specific insights'],
      gradient: 'from-cyan-400/10 to-blue-500/10',
      border: 'border-cyan-500/20'
    },
    {
      icon: <FileText className="w-14 h-14 text-emerald-400" />,
      title: 'Smart Cover Letters',
      description: 'Generate personalized, professional cover letters that perfectly match your resume and target job description.',
      benefits: ['Personalized content', 'Professional formatting', 'Job-specific customization', 'Multiple templates'],
      gradient: 'from-emerald-400/10 to-teal-500/10',
      border: 'border-emerald-500/20'
    },
    {
      icon: <BarChart3 className="w-14 h-14 text-purple-400" />,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes Applicant Tracking Systems with our comprehensive ATS compatibility analysis.',
      benefits: ['ATS score rating', 'Format optimization', 'Keyword density analysis', 'Structure recommendations'],
      gradient: 'from-purple-400/10 to-indigo-500/10',
      border: 'border-purple-500/20'
    }
  ];

  const additionalFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: 'Secure & Private', description: 'Your data is encrypted and never stored permanently', color: 'text-green-400' },
    { icon: <Clock className="w-6 h-6" />, title: 'Lightning Fast', description: 'Get results in under 30 seconds', color: 'text-cyan-400' },
    { icon: <Users className="w-6 h-6" />, title: 'Multi-Industry', description: 'Optimized for all industries and job levels', color: 'text-blue-400' },
    { icon: <Search className="w-6 h-6" />, title: 'Deep Analysis', description: 'Comprehensive resume and job matching', color: 'text-purple-400' },
    { icon: <Download className="w-6 h-6" />, title: 'Export Ready', description: 'Download optimized versions instantly', color: 'text-yellow-400' },
    { icon: <Globe className="w-6 h-6" />, title: 'Multi-Language', description: 'Support for multiple languages', color: 'text-pink-400' },
    { icon: <Lightbulb className="w-6 h-6" />, title: 'Smart Suggestions', description: 'AI-powered improvement recommendations', color: 'text-amber-400' },
    { icon: <Target className="w-6 h-6" />, title: 'Job Targeting', description: 'Tailor your resume for specific positions', color: 'text-red-400' }
  ];

  const comparisonFeatures = [
    { feature: 'AI Resume Analysis', us: true, others: false },
    { feature: 'Cover Letter Generation', us: true, others: false },
    { feature: 'ATS Optimization', us: true, others: true },
    { feature: 'Real-time Processing', us: true, others: false },
    { feature: 'Industry-specific Insights', us: true, others: false },
    { feature: 'Secure Data Handling', us: true, others: true },
    { feature: 'Multiple Export Formats', us: true, others: false },
    { feature: 'Job Matching Score', us: true, others: false }
  ];

  return (
    <motion.div
      className="min-h-screen theme-bg"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div className="absolute w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }} transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '5%' }} />
        <motion.div className="absolute w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }} transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '10%', right: '5%' }} />
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 className="font-orbitron font-bold text-responsive-5xl text-gradient mb-6" variants={itemVariants}>
              Powerful Features
            </motion.h1>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary max-w-3xl mx-auto" variants={itemVariants}>
              Discover all the tools that make ResumeAI the most comprehensive resume optimization platform — powered by{' '}
              <span className="font-jetbrains text-gradient-purple font-semibold">artificial intelligence</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
            >
              <motion.div className="flex-1" variants={itemVariants}>
                <motion.div className="mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  {feature.icon}
                </motion.div>
                <h2 className="font-orbitron font-bold text-responsive-3xl theme-text mb-4">{feature.title}</h2>
                <p className="font-inter text-responsive-base theme-text-secondary mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="font-inter text-responsive-sm theme-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="flex-1 w-full" variants={itemVariants}>
                <div className={`glass rounded-2xl p-8 border ${feature.border} bg-gradient-to-br ${feature.gradient} hover-lift`}>
                  <div className="flex flex-col items-center justify-center py-8 gap-4">
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                      {feature.icon}
                    </motion.div>
                    <p className="font-inter text-sm theme-text-muted">Feature Preview</p>
                    <div className="w-full space-y-2 mt-2">
                      {[80, 60, 90].map((w, i) => (
                        <motion.div key={i} className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            initial={{ width: 0 }} whileInView={{ width: `${w}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }} viewport={{ once: true }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 theme-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl accent-line-center theme-text mb-4" variants={itemVariants}>
              Additional Features
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary" variants={itemVariants}>
              Everything you need for resume success
            </motion.p>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div key={index} className="glass p-6 rounded-xl hover-lift theme-border border" variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                <div className={`${feature.color} mb-3 animate-float`}>{feature.icon}</div>
                <h3 className="font-inter font-semibold text-responsive-base theme-text mb-2">{feature.title}</h3>
                <p className="font-inter text-responsive-sm theme-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl accent-line-center theme-text mb-4" variants={itemVariants}>
              Why Choose ResumeAI?
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary" variants={itemVariants}>
              See how we compare to other solutions
            </motion.p>
          </motion.div>
          <motion.div className="glass rounded-2xl overflow-hidden theme-border border"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 theme-bg-secondary p-4 border-b theme-border">
              <div className="font-inter font-semibold theme-text">Feature</div>
              <div className="font-inter font-semibold text-center text-cyan-400">ResumeAI</div>
              <div className="font-inter font-semibold text-center theme-text-muted">Others</div>
            </div>
            {comparisonFeatures.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 border-b theme-border last:border-0 ${index % 2 === 0 ? '' : 'theme-bg-secondary'}`}>
                <div className="font-inter text-sm theme-text-secondary">{item.feature}</div>
                <div className="text-center">
                  {item.us ? <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-red-400">✗</span>}
                </div>
                <div className="text-center">
                  {item.others ? <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-red-400 text-sm">✗</span>}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl text-white mb-6" variants={itemVariants}>
              Ready to Experience These Features?
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl text-gray-300 mb-8" variants={itemVariants}>
              Try ResumeAI today and see the difference AI-powered optimization can make
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/analyze" className="btn-primary text-white px-8 py-4 rounded-lg font-inter font-semibold flex items-center gap-2 hover-lift">
                  Try All Features Free <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/pricing" className="btn-secondary px-8 py-4 rounded-lg font-inter font-semibold hover-lift">
                  View Pricing Plans
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;
