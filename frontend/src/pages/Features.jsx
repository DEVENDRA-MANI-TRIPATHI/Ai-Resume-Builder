import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaRobot, 
  FaFileAlt, 
  FaChartLine, 
  FaShieldAlt, 
  FaClock, 
  FaUsers,
  FaCheckCircle,
  FaSearch,
  FaDownload,
  FaLanguage,
  FaLightbulb,
  FaBullseye
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Features = () => {
  const { isDark } = useTheme();

  const mainFeatures = [
    {
      icon: <FaRobot className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-5xl mb-4 animate-float`} />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your resume against job requirements, providing detailed insights and recommendations.",
      benefits: [
        "Deep content analysis",
        "Skill gap identification",
        "Keyword optimization",
        "Industry-specific insights"
      ]
    },
    {
      icon: <FaFileAlt className={`${isDark ? 'text-green-400' : 'text-green-600'} text-5xl mb-4 animate-float`} />,
      title: "Smart Cover Letters",
      description: "Generate personalized, professional cover letters that perfectly match your resume and target job description.",
      benefits: [
        "Personalized content",
        "Professional formatting",
        "Job-specific customization",
        "Multiple templates"
      ]
    },
    {
      icon: <FaChartLine className={`${isDark ? 'text-purple-400' : 'text-purple-600'} text-5xl mb-4 animate-float`} />,
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems with our comprehensive ATS compatibility analysis.",
      benefits: [
        "ATS score rating",
        "Format optimization",
        "Keyword density analysis",
        "Structure recommendations"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: <FaShieldAlt />, title: "Secure & Private", description: "Your data is encrypted and never stored permanently" },
    { icon: <FaClock />, title: "Lightning Fast", description: "Get results in under 30 seconds" },
    { icon: <FaUsers />, title: "Multi-Industry", description: "Optimized for all industries and job levels" },
    { icon: <FaSearch />, title: "Deep Analysis", description: "Comprehensive resume and job matching" },
    { icon: <FaDownload />, title: "Export Ready", description: "Download optimized versions instantly" },
    { icon: <FaLanguage />, title: "Multi-Language", description: "Support for multiple languages" },
    { icon: <FaLightbulb />, title: "Smart Suggestions", description: "AI-powered improvement recommendations" },
    { icon: <FaBullseye />, title: "Job Targeting", description: "Tailor your resume for specific positions" }
  ];

  const comparisonFeatures = [
    { feature: "AI Resume Analysis", us: true, others: false },
    { feature: "Cover Letter Generation", us: true, others: false },
    { feature: "ATS Optimization", us: true, others: true },
    { feature: "Real-time Processing", us: true, others: false },
    { feature: "Industry-specific Insights", us: true, others: false },
    { feature: "Secure Data Handling", us: true, others: true },
    { feature: "Multiple Export Formats", us: true, others: false },
    { feature: "Job Matching Score", us: true, others: false }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-all duration-300`}>
      {/* Hero Section */}
      <section className={`py-20 ${isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text animate-fade-in-up">
            Powerful Features
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8 animate-fade-in-up stagger-1`}>
            Discover all the tools and capabilities that make ResumeAI the most comprehensive 
            resume optimization platform available.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 animate-fade-in-up stagger-${index + 1}`}>
                <div className="flex-1">
                  <div className="flex justify-center lg:justify-start">
                    {feature.icon}
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 text-center lg:text-left ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>{feature.title}</h2>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mb-6 text-center lg:text-left leading-relaxed`}>
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-400 flex-shrink-0" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-xl p-8 border glass-morphism hover-lift`}>
                    <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg p-6 mb-4`}>
                      <div className={`h-4 ${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded mb-3`}></div>
                      <div className={`h-4 ${isDark ? 'bg-gray-600' : 'bg-gray-300'} rounded w-3/4 mb-3`}></div>
                      <div className="h-4 bg-blue-400 rounded w-1/2"></div>
                    </div>
                    <div className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
                      Feature Preview
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className={`py-20 ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Additional Features</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Everything you need for resume success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'} p-6 rounded-xl border transition-all duration-300 hover-lift animate-fade-in-up stagger-${(index % 4) + 1}`}>
                <div className={`${isDark ? 'text-blue-400' : 'text-blue-600'} text-2xl mb-3 animate-float`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} neon-text`}>Why Choose ResumeAI?</h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>See how we compare to other solutions</p>
          </div>
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl overflow-hidden border glass-morphism animate-fade-in-up stagger-1`}>
            <div className={`grid grid-cols-3 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} p-4`}>
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Feature</div>
              <div className={`font-semibold text-center ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>ResumeAI</div>
              <div className={`font-semibold text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Others</div>
            </div>
            {comparisonFeatures.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? (isDark ? 'bg-gray-800' : 'bg-white') : (isDark ? 'bg-gray-750' : 'bg-gray-50')}`}>
                <div className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.feature}</div>
                <div className="text-center">
                  {item.us ? (
                    <FaCheckCircle className="text-green-400 mx-auto" />
                  ) : (
                    <span className="text-red-400">✗</span>
                  )}
                </div>
                <div className="text-center">
                  {item.others ? (
                    <FaCheckCircle className="text-green-400 mx-auto" />
                  ) : (
                    <span className="text-red-400">✗</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 holographic">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 text-white neon-text animate-hologram">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Try ResumeAI today and see the difference AI-powered optimization can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/analyze"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 animate-glow hover-lift"
            >
              Try All Features Free
            </Link>
            <Link
              to="/pricing"
              className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover-lift"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;