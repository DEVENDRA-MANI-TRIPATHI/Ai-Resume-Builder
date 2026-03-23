import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Users, Lightbulb, Shield, BarChart3, Globe, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '10,000+', label: 'Resumes Analyzed', color: 'text-cyan-400' },
    { icon: <BarChart3 className="w-8 h-8" />, number: '85%', label: 'Success Rate', color: 'text-green-400' },
    { icon: <Globe className="w-8 h-8" />, number: '50+', label: 'Countries Served', color: 'text-purple-400' },
    { icon: <Award className="w-8 h-8" />, number: '4.9/5', label: 'User Rating', color: 'text-yellow-400' }
  ];

  const values = [
    { icon: <Lightbulb className="w-10 h-10 text-yellow-400" />, title: 'Innovation', description: 'We leverage cutting-edge AI technology to provide insights that traditional resume tools simply can\'t match.' },
    { icon: <Shield className="w-10 h-10 text-green-400" />, title: 'Privacy First', description: 'Your data security is our priority. We use enterprise-grade encryption and never store your personal information.' },
    { icon: <Users className="w-10 h-10 text-blue-400" />, title: 'User-Centric', description: 'Every feature we build is designed with job seekers in mind, focusing on real-world results and career success.' },
    { icon: <Rocket className="w-10 h-10 text-purple-400" />, title: 'Excellence', description: 'We\'re committed to providing the most accurate, helpful, and actionable resume analysis available.' }
  ];

  const milestones = [
    { year: '2023', event: 'ResumeAI founded with a mission to democratize career tools' },
    { year: 'Q2 2023', event: 'Launched AI-powered ATS analysis with Gemini integration' },
    { year: 'Q4 2023', event: 'Reached 5,000 resumes analyzed milestone' },
    { year: '2024', event: 'Expanded to hiring manager tools and bulk analysis features' }
  ];

  return (
    <motion.div
      className="min-h-screen theme-bg"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div className="absolute w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 22, repeat: Infinity }}
          style={{ top: '15%', right: '10%' }} />
        <motion.div className="absolute w-64 h-64 bg-purple-500/8 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }} transition={{ duration: 18, repeat: Infinity }}
          style={{ bottom: '20%', left: '5%' }} />
      </div>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 className="font-orbitron font-bold text-responsive-5xl text-gradient mb-6" variants={itemVariants}>
              About ResumeAI
            </motion.h1>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
              We're on a mission to help every job seeker land their dream job by providing{' '}
              <span className="font-jetbrains text-primary-cyan font-semibold">AI-powered insights</span>{' '}
              that make resumes stand out in today's competitive market.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden" animate="visible" variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="glass p-6 rounded-xl text-center hover-lift theme-border border"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,212,255,0.1)' }}
              >
                <motion.div className={`${stat.color} flex justify-center mb-3 animate-float`}
                  whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="font-orbitron font-bold text-responsive-3xl theme-text mb-1">{stat.number}</div>
                <div className="font-inter text-responsive-sm theme-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 theme-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-orbitron font-bold text-responsive-4xl theme-text mb-6">Our Mission</h2>
              <div className="space-y-4 font-inter text-responsive-base theme-text-secondary leading-relaxed">
                <p>The job market is more competitive than ever. Traditional resume advice often falls short in the age of Applicant Tracking Systems (ATS) and AI-powered recruitment tools.</p>
                <p>That's why we created ResumeAI — to level the playing field by giving job seekers access to the same advanced AI technology that recruiters use to screen candidates.</p>
                <p>Our platform analyzes your resume with the precision of a hiring manager and the speed of modern AI, providing actionable insights that actually help you get hired.</p>
              </div>
              <div className="mt-8 space-y-3">
                {['Free to use core features', 'No data stored permanently', 'Results in under 30 seconds'].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="font-inter text-responsive-sm theme-text-secondary">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 theme-border border hover-lift">
                <div className="text-center mb-6">
                  <motion.div className="text-6xl mb-4" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>🎯</motion.div>
                  <h3 className="font-orbitron font-bold text-responsive-2xl theme-text mb-3">Our Goal</h3>
                  <p className="font-inter text-responsive-base theme-text-secondary leading-relaxed">
                    To help <span className="text-primary-cyan font-semibold">1 million job seekers</span> improve their resumes and land better jobs through AI-powered optimization and personalized insights.
                  </p>
                </div>
                {/* Timeline */}
                <div className="space-y-4 mt-6">
                  {milestones.map((m, i) => (
                    <motion.div key={i} className="flex gap-4 items-start"
                      initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    >
                      <span className="font-jetbrains text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded whitespace-nowrap mt-0.5">{m.year}</span>
                      <p className="font-inter text-xs theme-text-secondary">{m.event}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="font-orbitron font-bold text-responsive-4xl accent-line-center theme-text mb-4" variants={itemVariants}>
              Our Values
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl theme-text-secondary" variants={itemVariants}>
              The principles that guide everything we do
            </motion.p>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div key={index} className="glass p-6 rounded-xl text-center hover-lift theme-border border"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              >
                <motion.div className="flex justify-center mb-4 animate-float" whileHover={{ scale: 1.2 }}>
                  {value.icon}
                </motion.div>
                <h3 className="font-inter font-semibold text-responsive-xl theme-text mb-3">{value.title}</h3>
                <p className="font-inter text-responsive-sm theme-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
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
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p className="font-inter text-responsive-xl text-gray-300 mb-8" variants={itemVariants}>
              Join thousands of professionals who trust ResumeAI to optimize their resumes and land better jobs.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/analyze" className="btn-primary text-white px-8 py-4 rounded-lg font-inter font-semibold flex items-center gap-2 hover-lift">
                  Try ResumeAI Free <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-secondary px-8 py-4 rounded-lg font-inter font-semibold hover-lift">
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
