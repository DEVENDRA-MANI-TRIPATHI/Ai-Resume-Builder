import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Search, 
  CheckCircle, 
  FileText, 
  Rocket, 
  Users, 
  Star,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: <Upload className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
      title: "Smart Upload",
      description: "Upload your resume in PDF format and let our AI analyze it instantly with neural network precision.",
      color: 'text-primary-cyan'
    },
    {
      icon: <Search className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
      title: "Job Matching",
      description: "Compare your resume against job descriptions with AI-powered semantic analysis.",
      color: 'text-accent-green'
    },
    {
      icon: <CheckCircle className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
      title: "ATS Optimization",
      description: "Get detailed insights to make your resume ATS-friendly and recruiter-ready.",
      color: 'text-accent-yellow'
    },
    {
      icon: <FileText className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
      title: "Cover Letters",
      description: "Generate personalized cover letters tailored to specific job requirements.",
      color: 'text-accent-pink'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "10,000+", label: "Resumes Analyzed" },
    { icon: <Rocket className="w-8 h-8" />, number: "85%", label: "Success Rate" },
    { icon: <Clock className="w-8 h-8" />, number: "< 30s", label: "Analysis Time" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "95%", label: "ATS Compatibility" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "ResumeAI helped me optimize my resume and I landed my dream job at a tech startup!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content: "The AI insights were incredibly detailed. My interview rate increased by 300%.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Data Scientist",
      content: "Best resume tool I've used. The cover letter generator is a game-changer.",
      rating: 5
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen theme-bg transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Elements Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '60%', right: '10%' }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', left: '20%' }}
        />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="font-orbitron font-bold mb-6 text-gradient text-responsive-5xl lg:text-responsive-6xl"
              variants={itemVariants}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              AI-Powered Resume Optimization
            </motion.h1>
            <motion.p 
              className="font-inter text-responsive-lg lg:text-responsive-xl max-w-4xl mx-auto mb-8 leading-relaxed theme-text-secondary"
              variants={itemVariants}
            >
              Transform your resume with cutting-edge <span className="font-jetbrains text-primary-cyan font-semibold">neural networks</span>. 
              Get personalized insights, ATS optimization, and tailored cover letters to land your dream job faster.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mobile-stack mobile-gap-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/analyze"
                  className="btn-primary text-white px-8 py-4 rounded-lg font-inter font-semibold shadow-lg transition-smooth hover-lift flex items-center gap-3 mobile-full mobile-center relative overflow-hidden"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 animate-pulse-soft" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/features"
                  className="btn-secondary px-8 py-4 rounded-lg font-inter font-semibold transition-smooth hover-lift mobile-full mobile-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 theme-bg-secondary transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mobile-gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center glass p-6 rounded-xl mobile-p-4 hover-lift"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 212, 255, 0.15)"
                }}
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  y: {
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.div 
                  className="mb-3 flex justify-center animate-float text-primary-cyan"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="font-orbitron font-bold mb-2 text-responsive-3xl theme-text">{stat.number}</div>
                <div className="font-inter text-responsive-sm theme-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="font-orbitron font-bold mb-4 text-responsive-4xl accent-line-center theme-text"
              variants={itemVariants}
            >
              Powerful Features
            </motion.h2>
            <motion.p 
              className="font-inter text-responsive-xl max-w-3xl mx-auto theme-text-secondary"
              variants={itemVariants}
            >
              Everything you need to create a winning resume powered by <span className="font-jetbrains text-gradient-purple font-semibold">artificial intelligence</span>
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mobile-gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl shadow-lg transition-all duration-300 glass hover-lift hover-scale mobile-p-4 theme-border"
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  rotateX: 5,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)"
                }}
                animate={{
                  rotateY: [0, 2, 0, -2, 0]
                }}
                transition={{
                  rotateY: {
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className={feature.color}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-inter font-semibold mb-3 text-responsive-xl theme-text">{feature.title}</h3>
                  <p className="font-inter text-responsive-sm leading-relaxed theme-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 theme-bg-secondary transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="font-orbitron font-bold mb-4 text-responsive-4xl accent-line-center theme-text"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="font-inter text-responsive-xl theme-text-secondary"
              variants={itemVariants}
            >
              Simple, fast, and <span className="font-jetbrains text-primary-cyan font-semibold">AI-powered</span>
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mobile-gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { step: "01", title: "Upload Resume", desc: "Upload your PDF resume and paste the job description", gradient: "from-primary-cyan to-primary-blue" },
              { step: "02", title: "AI Analysis", desc: "Our neural networks analyze your resume against job requirements", gradient: "from-primary-purple to-accent-pink" },
              { step: "03", title: "Get Results", desc: "Receive detailed insights and AI-powered recommendations", gradient: "from-accent-green to-primary-cyan" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center mobile-center hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${item.gradient} w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 animate-subtle-glow shadow-lg`}
                  whileHover={{ rotate: 5 }}
                >
                  <span className="font-orbitron text-xl font-bold text-white">{item.step}</span>
                </motion.div>
                <h3 className="font-inter font-semibold mb-3 text-responsive-xl theme-text">{item.title}</h3>
                <p className="font-inter text-responsive-base theme-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="font-orbitron font-bold mb-4 text-responsive-4xl accent-line-center theme-text"
              variants={itemVariants}
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              className="font-inter text-responsive-xl theme-text-secondary"
              variants={itemVariants}
            >
              Join thousands of successful job seekers
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mobile-gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl glass hover-lift hover-scale mobile-p-4 theme-border"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-yellow fill-current" />
                  ))}
                </div>
                <p className="font-inter mb-4 italic text-responsive-base theme-text-secondary">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-inter font-semibold text-responsive-base theme-text">{testimonial.name}</div>
                  <div className="font-jetbrains text-responsive-sm theme-text-muted">// {testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue/20 to-primary-purple/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="font-orbitron font-bold mb-6 text-white text-responsive-4xl"
              variants={itemVariants}
            >
              Ready to Land Your Dream Job?
            </motion.h2>
            <motion.p 
              className="font-inter text-responsive-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join thousands of professionals who have improved their resumes with <span className="font-jetbrains text-primary-cyan font-semibold">ResumeAI</span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mobile-stack mobile-gap-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/analyze"
                  className="btn-primary text-white px-8 py-4 rounded-lg font-inter font-semibold shadow-lg transition-smooth hover-lift mobile-full mobile-center"
                >
                  Start Free Analysis
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/pricing"
                  className="btn-secondary text-white px-8 py-4 rounded-lg font-inter font-semibold transition-smooth hover-lift mobile-full mobile-center"
                >
                  View Pricing
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Managers Section */}
      <section className="py-20 theme-bg-secondary transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="font-orbitron font-bold mb-4 text-responsive-4xl accent-line-center theme-text"
              variants={itemVariants}
            >
              For Hiring Managers
            </motion.h2>
            <motion.p 
              className="font-inter text-responsive-xl max-w-3xl mx-auto theme-text-secondary"
              variants={itemVariants}
            >
              Streamline your hiring process with <span className="font-jetbrains text-gradient-purple font-semibold">AI-powered</span> candidate analysis and comparison tools
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                icon: <Upload className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
                title: "Bulk Analysis",
                description: "Upload hundreds of resumes and get AI-powered analysis in minutes, not hours.",
                link: "/bulk-analysis",
                color: 'text-purple-400'
              },
              {
                icon: <Users className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
                title: "Smart Comparison",
                description: "Compare candidates side-by-side with detailed AI insights and scoring.",
                link: "/candidate-comparison",
                color: 'text-pink-400'
              },
              {
                icon: <BarChart3 className="w-12 h-12 mb-4 animate-float transition-all duration-300" />,
                title: "Analytics Dashboard",
                description: "Track hiring metrics, candidate pipeline, and team performance in real-time.",
                link: "/hiring-dashboard",
                color: 'text-cyan-400'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="p-6 rounded-xl shadow-lg transition-all duration-300 glass hover-lift hover-scale mobile-p-4 theme-border group"
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  rotateX: 5,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className={feature.color}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="font-inter font-semibold mb-3 text-responsive-xl theme-text">{feature.title}</h3>
                  <p className="font-inter text-responsive-sm leading-relaxed theme-text-secondary mb-4">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.link}
                    className="text-primary-cyan hover:text-white font-semibold transition-colors duration-300 flex items-center gap-2 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mobile-stack mobile-gap-4"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/hiring-dashboard"
                  className="btn-primary text-white px-8 py-4 rounded-lg font-inter font-semibold shadow-lg transition-smooth hover-lift mobile-full mobile-center"
                >
                  Try Hiring Dashboard
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn-secondary px-8 py-4 rounded-lg font-inter font-semibold transition-smooth hover-lift mobile-full mobile-center"
                >
                  Request Enterprise Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;