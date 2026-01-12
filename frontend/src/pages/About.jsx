import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaUsers, 
  FaLightbulb, 
  FaShieldAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaAward,
  FaChartLine,
  FaGlobe
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const stats = [
    { icon: <FaUsers />, number: "10,000+", label: "Resumes Analyzed" },
    { icon: <FaChartLine />, number: "85%", label: "Success Rate" },
    { icon: <FaGlobe />, number: "50+", label: "Countries Served" },
    { icon: <FaAward />, number: "4.9/5", label: "User Rating" }
  ];

  const values = [
    {
      icon: <FaLightbulb className={`${isDark ? 'text-yellow-400' : 'text-yellow-500'} text-4xl mb-4 animate-float`} />,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to provide insights that traditional resume tools simply can't match."
    },
    {
      icon: <FaShieldAlt className={`${isDark ? 'text-green-400' : 'text-green-500'} text-4xl mb-4 animate-float`} />,
      title: "Privacy First",
      description: "Your data security is our priority. We use enterprise-grade encryption and never store your personal information."
    },
    {
      icon: <FaUsers className={`${isDark ? 'text-blue-400' : 'text-blue-500'} text-4xl mb-4 animate-float`} />,
      title: "User-Centric",
      description: "Every feature we build is designed with job seekers in mind, focusing on real-world results and career success."
    },
    {
      icon: <FaRocket className={`${isDark ? 'text-purple-400' : 'text-purple-500'} text-4xl mb-4 animate-float`} />,
      title: "Excellence",
      description: "We're committed to providing the most accurate, helpful, and actionable resume analysis available."
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all duration-300`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              About ResumeAI
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              We're on a mission to help every job seeker land their dream job by providing 
              AI-powered insights that make resumes stand out in today's competitive market.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-scale-in stagger-${index + 1} hover-lift`}>
                <div className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-3xl mb-2 flex justify-center animate-float`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 neon-text`}>{stat.number}</div>
                <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Our Mission</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mb-6 leading-relaxed`}>
                The job market is more competitive than ever. Traditional resume advice often falls short 
                in the age of Applicant Tracking Systems (ATS) and AI-powered recruitment tools.
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mb-6 leading-relaxed`}>
                That's why we created ResumeAI – to level the playing field by giving job seekers access 
                to the same advanced AI technology that recruiters use to screen candidates.
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                Our platform analyzes your resume with the precision of a hiring manager and the speed 
                of modern AI, providing actionable insights that actually help you get hired.
              </p>
            </div>
            <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-xl p-8 border glass-morphism animate-fade-in-up stagger-1 hover-lift`}>
              <div className="text-center">
                <div className="text-6xl mb-4 animate-float">🎯</div>
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Our Goal</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  To help 1 million job seekers improve their resumes and land better jobs 
                  through AI-powered optimization and personalized insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Our Values</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`text-center animate-fade-in-up stagger-${index + 1} hover-lift`}>
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 holographic">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-white neon-text animate-hologram">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who trust ResumeAI to optimize their resumes and land better jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/analyze"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 animate-glow hover-lift"
            >
              Try ResumeAI Free
            </Link>
            <Link
              to="/contact"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;